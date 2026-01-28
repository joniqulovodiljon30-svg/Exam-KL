import React, { useState, useEffect, useMemo } from 'react';
import { 
  AppView, 
  User, 
  UserRole, 
  Theme, 
  ExamVariant, 
  TestResult,
  Section
} from './types.ts';
import { THEMES } from './constants.tsx';
import { gradeBatchTasks, GradingResult, BatchTask } from './services/geminiService.ts';
import * as Icons from 'lucide-react';

const LucideIcon = ({ name, className }: { name: string, className?: string }) => {
  const iconName = name.charAt(0).toUpperCase() + name.slice(1);
  const IconComponent = (Icons as any)[name] || (Icons as any)[iconName] || Icons.CircleHelp;
  return <IconComponent className={className} />;
};

interface DetailedFeedback extends GradingResult {
  userAnswer: string;
}

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('login');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ExamVariant | null>(null);
  const [currentResult, setCurrentResult] = useState<any>(null);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isGrading, setIsGrading] = useState(false);
  const [gradingProgress, setGradingProgress] = useState(0);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('lexis_v5_final');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('lexis_v5_final', JSON.stringify(history));
    }
  }, [history]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setCurrentUser({ username, role: UserRole.STUDENT });
      setView('dashboard');
    }
  };

  const startExam = (theme: Theme, variant: ExamVariant) => {
    setSelectedTheme(theme);
    setSelectedVariant(variant);
    setUserAnswers({});
    setGradingProgress(0);
    setView('exam');
    window.scrollTo(0, 0);
  };

  const totalQuestionsCount = useMemo(() => {
    if (!selectedVariant) return 0;
    return selectedVariant.sections.reduce((acc, s) => acc + s.questions.length, 0);
  }, [selectedVariant]);

  const answeredCount = useMemo(() => {
    // Fix: Explicitly type val as string to avoid 'unknown' type error
    return Object.values(userAnswers).filter((val: string) => val && val.trim().length > 0).length;
  }, [userAnswers]);

  const submitExam = async () => {
    if (isGrading || !selectedVariant || !selectedTheme || !currentUser) return;
    
    setIsGrading(true);
    setGradingProgress(5);

    // Barcha savollarni yig'amiz (javob berilganmi yoki yo'qmi farqi yo'q)
    // Chunki javob berilmagan bo'lsa ham AI "to'g'ri javob"ni generatsiya qilishi kerak.
    const allTasks: BatchTask[] = selectedVariant.sections.flatMap(s => 
      s.questions.map(q => ({
        id: q.id,
        type: s.type,
        prompt: q.text,
        userAnswer: userAnswers[q.id] || "", // Bo'sh bo'lsa ham jo'natamiz
        maxPoints: q.points,
        correctAnswerHint: q.correctAnswer
      }))
    );

    try {
      const batchSize = 5; 
      const allResults: Record<string, GradingResult> = {};
      
      for (let i = 0; i < allTasks.length; i += batchSize) {
        const batch = allTasks.slice(i, i + batchSize);
        // Batchni AI ga yuboramiz
        const batchResults = await gradeBatchTasks(batch);
        Object.assign(allResults, batchResults);
        
        setGradingProgress(Math.floor(((i + batch.length) / allTasks.length) * 100));
      }

      const detailedFeedback: Record<string, DetailedFeedback> = {};
      const simpleFeedback: Record<string, string> = {};
      let totalScore = 0;
      let totalPossible = 0;

      allTasks.forEach(task => {
        const res = allResults[task.id];
        // Agar AI javob qaytarmasa (network error), fallback
        const finalRes = res || { 
          score: 0, 
          isCorrect: false, 
          feedback: "Tizim xatosi", 
          modelAnswer: task.correctAnswerHint || "N/A" 
        };
        
        detailedFeedback[task.id] = { ...finalRes, userAnswer: task.userAnswer };
        simpleFeedback[task.id] = finalRes.isCorrect ? "✅" : "❌";
        totalScore += finalRes.score;
        totalPossible += task.maxPoints;
      });

      const result = {
        id: `res-${Date.now()}`,
        userId: currentUser.username,
        themeId: selectedTheme.id,
        variantId: selectedVariant.id,
        score: totalScore,
        totalPoints: totalPossible,
        date: new Date().toLocaleString(),
        userAnswers: { ...userAnswers },
        feedback: simpleFeedback,
        detailedFeedback
      };

      setHistory(prev => [result, ...prev]);
      setCurrentResult(result);
      setView('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      console.error("Submission failed:", err);
      alert("Natijalarni hisoblashda kutilmagan xatolik yuz berdi. Internetni tekshiring.");
    } finally {
      setIsGrading(false);
    }
  };

  const renderSection = (section: Section) => (
    <div key={section.id} className="mb-6 bg-gray-900/40 p-5 md:p-6 rounded-[1.5rem] border border-gray-800">
      <div className="mb-4 border-l-4 border-blue-600 pl-4">
        <h3 className="text-lg font-black text-white uppercase italic">{section.title}</h3>
        <p className="text-gray-500 text-[10px] mt-1 font-bold">{section.instructions}</p>
      </div>

      <div className="space-y-6">
        {section.questions.map((q, idx) => (
          <div key={q.id} className="flex flex-col gap-2">
            <div className="flex gap-3 items-start">
              <span className="w-6 h-6 shrink-0 rounded bg-gray-800 flex items-center justify-center text-[9px] font-black text-blue-500 border border-gray-700">
                {idx + 1}
              </span>
              <p className="text-base font-bold text-gray-200">{q.text}</p>
            </div>
            <div className="w-full">
              {section.type.includes('writing') || section.type.includes('comparison') || section.type.includes('definition') ? (
                <textarea 
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-xl p-4 text-sm text-gray-200 outline-none focus:border-blue-600 transition-all min-h-[100px]"
                  value={userAnswers[q.id] || ''}
                  onChange={e => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Javobingizni yozing..."
                />
              ) : (
                <input 
                  type="text"
                  className="w-full bg-gray-950/60 border border-gray-800 rounded-lg px-4 py-3 text-sm text-blue-400 font-bold outline-none focus:border-blue-600"
                  value={userAnswers[q.id] || ''}
                  onChange={e => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                  placeholder="Qisqa javob..."
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      {/* LOADER */}
      {isGrading && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6">
          <div className="w-32 h-32 relative mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="58" fill="none" stroke="#111827" strokeWidth="8" />
              <circle cx="64" cy="64" r="58" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="364.4" strokeDashoffset={364.4 * (1 - gradingProgress / 100)} strokeLinecap="round" className="transition-all duration-300" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-black">{gradingProgress}%</div>
          </div>
          <h2 className="text-xl font-black uppercase italic">Tahlil qilinmoqda...</h2>
        </div>
      )}

      {/* HEADER */}
      {view !== 'login' && (
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50 px-6 py-3 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('dashboard')}>
            <Icons.GraduationCap className="text-blue-500 w-6 h-6" />
            <span className="text-lg font-black uppercase italic tracking-tighter">ODILXON <span className="text-blue-500">DEV</span></span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setView('dashboard')} className={`px-2 py-1 text-[9px] font-black uppercase ${view === 'dashboard' ? 'text-blue-500' : 'text-gray-500'}`}>Asosiy</button>
            <button onClick={() => setView('history')} className={`px-2 py-1 text-[9px] font-black uppercase ${view === 'history' ? 'text-blue-500' : 'text-gray-500'}`}>Tarix</button>
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-black shadow-lg">{currentUser?.username[0].toUpperCase()}</div>
          </div>
        </header>
      )}

      <main className="p-4 md:p-8 max-w-5xl mx-auto">
        {/* LOGIN */}
        {view === 'login' && (
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center animate-fade-in">
            <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-2">ODILXON <span className="text-blue-500">DEV</span></h1>
            <p className="text-gray-600 font-bold uppercase tracking-[0.4em] text-[9px] mb-10">Academic Lexis Hub</p>
            <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4 bg-gray-900/40 p-8 rounded-[2rem] border border-gray-800 backdrop-blur-xl">
              <input required type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="ISM SHARIF" className="w-full bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 font-bold text-sm focus:border-blue-600 outline-none" />
              <input required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="PAROL" className="w-full bg-gray-950 border border-gray-800 rounded-xl px-5 py-4 font-bold text-sm focus:border-blue-600 outline-none" />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-black text-sm tracking-widest shadow-lg">KIRISH</button>
            </form>
          </div>
        )}

        {/* DASHBOARD */}
        {view === 'dashboard' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8">Mavzular</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {THEMES.map(theme => (
                <div key={theme.id} onClick={() => { setSelectedTheme(theme); setView('theme_details'); }} className="group bg-gray-900/30 border border-gray-800 p-6 rounded-[1.5rem] cursor-pointer hover:border-blue-600 hover:bg-gray-900/60 transition-all shadow-md">
                  <LucideIcon name={theme.icon} className="w-5 h-5 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-[9px] font-black text-gray-600 uppercase mb-1">{theme.title}</h3>
                  <h4 className="text-sm font-black uppercase italic leading-tight">{theme.subtitle}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* THEME DETAILS */}
        {view === 'theme_details' && selectedTheme && (
          <div className="animate-slide-up max-w-3xl mx-auto">
            <button onClick={() => setView('dashboard')} className="flex items-center gap-2 text-gray-500 mb-6 font-black uppercase text-[10px]"><Icons.ArrowLeft className="w-4 h-4" /> Orqaga</button>
            <div className="bg-gray-900/40 p-10 rounded-[2.5rem] border border-gray-800 text-center shadow-2xl">
              <h2 className="text-3xl font-black uppercase italic mb-10 tracking-tight">{selectedTheme.subtitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedTheme.variants.map(v => (
                  <button key={v.id} onClick={() => startExam(selectedTheme, v)} className="bg-gray-950 border-2 border-gray-800 p-8 rounded-2xl hover:border-blue-600 transition-all active:scale-95 group">
                    <span className="text-[9px] font-black text-gray-700 block mb-2 uppercase">VARIANT</span>
                    <span className="text-5xl font-black text-white group-hover:text-blue-500">{v.variantNumber}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EXAM */}
        {view === 'exam' && selectedVariant && (
          <div className="animate-fade-in pb-20 max-w-4xl mx-auto">
            <div className="sticky top-20 z-40 bg-gray-950/90 backdrop-blur-md border border-gray-800 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg"><LucideIcon name={selectedTheme?.icon || 'BookOpen'} className="text-white w-5 h-5" /></div>
                <div className="text-left">
                  <h2 className="text-sm font-black uppercase tracking-tight leading-none mb-1">{selectedTheme?.subtitle}</h2>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 bg-blue-600/20 text-blue-500 rounded text-[8px] font-black">VAR {selectedVariant.variantNumber}</span>
                    <p className="text-[9px] text-gray-500 font-bold uppercase">{answeredCount}/{totalQuestionsCount} BAJARILDI</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button onClick={() => setView('theme_details')} className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-[9px] font-black uppercase hover:bg-gray-800">Chiqish</button>
                <button 
                  onClick={submitExam} 
                  disabled={isGrading} 
                  className="flex-1 px-6 py-2 bg-blue-600 rounded-lg text-[9px] font-black uppercase flex items-center justify-center gap-2 hover:bg-blue-500 active:scale-95 transition-all shadow-lg"
                >
                  <Icons.CheckCircle className="w-4 h-4" /> YAKUNLASH
                </button>
              </div>
            </div>
            <div className="space-y-6">
              {selectedVariant.sections.map(renderSection)}
            </div>
          </div>
        )}

        {/* RESULT (COMPACT & BEAUTIFUL) */}
        {view === 'result' && currentResult && (
          <div className="animate-slide-up pb-20 max-w-3xl mx-auto">
            <div className="bg-gray-900/60 border border-gray-800 rounded-[3rem] p-8 md:p-12 shadow-3xl">
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-8 border-b border-gray-800 pb-8">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/10 text-blue-500 rounded-full text-[9px] font-black uppercase mb-3 border border-blue-500/10">Natija hisoblandi</div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">{selectedTheme?.subtitle}</h2>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Imtihon topshirildi: {currentResult.date}</p>
                </div>
                <div className="flex items-baseline gap-2 bg-black/40 px-10 py-5 rounded-[2.5rem] border border-gray-800 shadow-inner">
                  <span className="text-7xl font-black text-blue-500 leading-none tabular-nums">{currentResult.score}</span>
                  <span className="text-xl font-black text-gray-700">/ {currentResult.totalPoints}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 flex items-center gap-2 mb-4 px-2">
                  <Icons.Zap className="w-3 h-3 text-blue-500" /> JAVOBLAR TAHLILI
                </h3>
                {Object.entries(currentResult.detailedFeedback || {}).map(([qId, data]: [string, any]) => {
                  const q = selectedVariant?.sections.flatMap(s => s.questions).find(item => item.id === qId);
                  return (
                    <div key={qId} className={`p-5 rounded-3xl border-2 transition-all group hover:scale-[1.01] ${data.isCorrect ? 'border-green-600/20 bg-green-600/5' : 'border-red-600/20 bg-red-600/5'}`}>
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <p className="text-[15px] font-bold text-gray-200 leading-snug">{q?.text}</p>
                        <span className={`shrink-0 px-3 py-1 rounded-xl text-[9px] font-black uppercase text-white shadow-md ${data.isCorrect ? 'bg-green-600' : 'bg-red-600'}`}>
                          {data.score} Ball
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                        <div className="p-3 bg-black/40 rounded-2xl border border-gray-800">
                          <span className="text-[8px] text-gray-700 block mb-1 font-black uppercase tracking-tighter">SIZNING JAVOBINGIZ</span>
                          <span className="text-sm font-bold text-blue-400 italic break-words">{data.userAnswer || "(Bo'sh)"}</span>
                        </div>
                        <div className="p-3 bg-blue-600/5 rounded-2xl border border-blue-500/10">
                          <span className="text-[8px] text-blue-500 block mb-1 font-black uppercase tracking-tighter">TO'G'RI JAVOB</span>
                          <span className="text-sm font-black text-gray-100 break-words">{data.modelAnswer}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 bg-blue-600/5 p-4 rounded-2xl border border-blue-500/10">
                         <Icons.MessageSquareQuote className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                         <p className="text-[13px] text-gray-400 font-medium italic">"{data.feedback}"</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <button onClick={() => setView('dashboard')} className="flex-1 bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95">Yangi test</button>
                <button onClick={() => setView('history')} className="flex-1 bg-gray-950 border border-gray-800 hover:bg-gray-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Tarix</button>
              </div>
            </div>
          </div>
        )}

        {/* HISTORY */}
        {view === 'history' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-black uppercase italic mb-10 tracking-tighter">Imtihonlar Tarixi</h2>
            <div className="grid grid-cols-1 gap-4">
              {history.map(res => (
                <div key={res.id} onClick={() => { 
                  const theme = THEMES.find(t => t.id === res.themeId);
                  const variant = theme?.variants.find(v => v.id === res.variantId);
                  setSelectedTheme(theme || null);
                  setSelectedVariant(variant || null);
                  setCurrentResult(res); 
                  setView('result'); 
                  window.scrollTo(0, 0);
                }} className="bg-gray-900/30 border border-gray-800 p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:border-blue-500 hover:bg-gray-900/60 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center font-black text-xl border border-blue-500/10">{res.variantId.split('-v')[1]}</div>
                    <div className="text-left">
                      <h4 className="text-sm font-black uppercase italic group-hover:text-blue-500">{THEMES.find(t => t.id === res.themeId)?.subtitle}</h4>
                      <p className="text-[9px] text-gray-600 font-bold uppercase mt-1">{res.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <span className="text-[8px] text-gray-700 block font-black uppercase">To'plangan ball</span>
                      <span className="text-2xl font-black text-blue-500">{res.score}<span className="text-xs text-gray-800 ml-1">/{res.totalPoints}</span></span>
                    </div>
                    <Icons.ChevronRight className="w-5 h-5 text-gray-800 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
              {history.length === 0 && <div className="py-20 text-center text-gray-800 font-black uppercase italic tracking-widest">Tarix bo'sh</div>}
            </div>
          </div>
        )}
      </main>

      <footer className="py-12 opacity-10 text-[8px] font-black uppercase tracking-[1em] text-center border-t border-gray-900 mt-20">
        ODILXON DEV • LINGUISTIC PLATFORM © 2024
      </footer>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #030712; }
        ::-webkit-scrollbar-thumb { background: #1f2937; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>
    </div>
  );
};

export default App;
