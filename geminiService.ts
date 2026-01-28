
export interface GradingResult {
  score: number;
  isCorrect: boolean;
  feedback: string;
  modelAnswer: string;
}

export interface BatchTask {
  id: string;
  type: string;
  prompt: string;
  userAnswer: string;
  maxPoints: number;
  correctAnswerHint?: string;
}

// Siz bergan DeepSeek API kaliti
const API_KEY = "sk-ec020064fbb7426cb15bffb16902d982";

export const gradeBatchTasks = async (tasks: BatchTask[]): Promise<Record<string, GradingResult>> => {
  const results: Record<string, GradingResult> = {};

  if (tasks.length === 0) return results;

  try {
    // DeepSeek uchun prompt tayyorlash
    const systemInstruction = `You are a strict Linguistics Professor. Grade exam answers.
    Output JSON format only: { "TASK_ID": { "score": number, "isCorrect": boolean, "feedback": "Uzbek short feedback", "modelAnswer": "Perfect academic answer or definition" } }.
    
    Rules:
    1. If 'userAnswer' is empty or "NO_ANSWER", score is 0, isCorrect is false, BUT you MUST provide the 'modelAnswer' (definition or correct phrase).
    2. Feedback must be in Uzbek.
    3. 'modelAnswer' should be in English (academic standard).
    4. Do not output markdown, just raw JSON.`;

    const tasksJson = tasks.map(t => ({
      id: t.id,
      question: t.prompt,
      userAnswer: t.userAnswer.trim() === "" ? "NO_ANSWER" : t.userAnswer,
      maxPoints: t.maxPoints,
      hint: t.correctAnswerHint
    }));

    // DeepSeek API chaqiruvi (OpenAI formatiga mos)
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat", // DeepSeek V3 (chat)
        messages: [
          { role: "system", content: systemInstruction },
          { role: "user", content: JSON.stringify(tasksJson) }
        ],
        temperature: 0.1,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    let content = data.choices[0]?.message?.content || "{}";
    
    // JSON tozalash (ehtimoliy markdownlardan)
    content = content.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const aiResults = JSON.parse(content);
    
    // Natijalarni formatlash
    tasks.forEach(t => {
      const res = aiResults[t.id];
      results[t.id] = {
        score: typeof res?.score === 'number' ? res.score : 0,
        isCorrect: !!res?.isCorrect,
        feedback: res?.feedback || (t.userAnswer ? "Tahlil qilinmadi." : "Javob yozilmadi."),
        modelAnswer: res?.modelAnswer || t.correctAnswerHint || "To'g'ri javob mavjud emas."
      };
    });

  } catch (err) {
    console.error("DeepSeek Grading Error:", err);
    // Xatolik bo'lsa, xavfsiz holatga qaytish
    tasks.forEach(t => {
      results[t.id] = { 
        score: 0, 
        isCorrect: false, 
        feedback: "Server bilan aloqa xatosi.", 
        modelAnswer: t.correctAnswerHint || "N/A" 
      };
    });
  }

  return results;
};
