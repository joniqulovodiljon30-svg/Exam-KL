import { GoogleGenAI, Type, Schema } from "@google/genai";

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

export const gradeBatchTasks = async (tasks: BatchTask[]): Promise<Record<string, GradingResult>> => {
  const results: Record<string, GradingResult> = {};

  if (tasks.length === 0) return results;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const tasksJson = tasks.map(t => ({
      id: t.id,
      question: t.prompt,
      userAnswer: t.userAnswer.trim() === "" ? "NO_ANSWER" : t.userAnswer,
      maxPoints: t.maxPoints,
      hint: t.correctAnswerHint
    }));

    const systemInstruction = `You are a strict Linguistics Professor. Grade exam answers.
    Output JSON only.
    Rules:
    1. If 'userAnswer' is empty or "NO_ANSWER", score is 0, isCorrect is false.
    2. Feedback must be in Uzbek.
    3. 'modelAnswer' should be in English (academic standard).`;

    const responseSchema: Schema = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          score: { type: Type.NUMBER },
          isCorrect: { type: Type.BOOLEAN },
          feedback: { type: Type.STRING },
          modelAnswer: { type: Type.STRING },
        },
        required: ["id", "score", "isCorrect", "feedback", "modelAnswer"],
      },
    };

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: JSON.stringify(tasksJson),
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const outputText = response.text;
    if (outputText) {
      let parsed: any[];
      try {
        parsed = JSON.parse(outputText);
      } catch (e) {
        // Fallback if the model outputs JSON code block despite mime type config
        const match = outputText.match(/```json\s*([\s\S]*?)\s*```/);
        if (match) {
          parsed = JSON.parse(match[1]);
        } else {
          // Attempt to parse raw text if it's just JSON
          parsed = JSON.parse(outputText);
        }
      }

      if (Array.isArray(parsed)) {
        parsed.forEach((item: any) => {
          results[item.id] = {
            score: item.score,
            isCorrect: item.isCorrect,
            feedback: item.feedback,
            modelAnswer: item.modelAnswer
          };
        });
      }
    }

  } catch (err) {
    console.error("Gemini Grading Error:", err);
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
