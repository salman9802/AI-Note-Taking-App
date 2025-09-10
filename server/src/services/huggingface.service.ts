// import OpenAI from "openai";

import axios from "axios";

import { ENV } from "../constants/env";

// const openAIClient = new OpenAI({
//   apiKey: ENV.OPENAI_API_KEY,
// });

const getAIResponse = async (prompt: string, temperature = 0.7) => {
  //   const response = await openAIClient.chat.completions.create({
  //     // model: "gpt-3.5-turbo",
  //     model: "gpt-3.5-turbo-0125",
  //     messages: [{ role: "user", content: prompt }],
  //     temperature,
  //   });
  //   return response.choices[0]?.message?.content?.trim();

  try {
    const res = await axios.post(
      "https://router.huggingface.co/v1/chat/completions",
      {
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        model: "meta-llama/Llama-3.1-8B-Instruct:novita",
        stream: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ENV.HF_TOKEN}`,
        },
      }
    );
    return res.data.choices[0].message.content.trim() as string;
  } catch (error) {
    return (error as Error).message;
  }
};

export const generateNoteContentSummary = async (noteContent: string) => {
  const prompt = `Summarize the following note:\n\n${noteContent}`;
  return await getAIResponse(prompt, 0.3);
};

export const improveNoteContent = async (noteContent: string) => {
  const prompt = `Improve the following note for clarity and grammar:\n\n${noteContent}`;
  return await getAIResponse(prompt);
};

export const generateNoteTags = async (noteContent: string) => {
  const prompt = `Read the following note and return a comma-separated list of relevant tags:\n\n${noteContent}`;
  const tagString = await getAIResponse(prompt, 0.4);
  return tagString?.split(/\s*,\s*/).map((tag) => tag.trim().toLowerCase());
};

// import OpenAI from "openai";

// import { ENV } from "../constants/env";

// const openAIClient = new OpenAI({
//   baseURL: "https://router.huggingface.co/v1",
//   //   apiKey: ENV.OPENAI_API_KEY,
//   apiKey: ENV.HF_TOKEN,
// });

// const getAIResponse = async (prompt: string, temperature = 0.7) => {
//   const response = await openAIClient.chat.completions.create({
//     model: "moonshotai/Kimi-K2-Instruct",
//     // model: "facebook/bart-large-cnn",
//     messages: [{ role: "user", content: prompt }],
//     temperature,
//   });
//   return response.choices[0]?.message?.content?.trim();
// };

// export const generateNoteContentSummary = async (noteContent: string) => {
//   const prompt = `Summarize the following note:\n\n${noteContent}`;
//   return await getAIResponse(prompt, 0.3);
// };

// export const improveNoteContent = async (noteContent: string) => {
//   const prompt = `Improve the following note for clarity and grammar:\n\n${noteContent}`;
//   return await getAIResponse(prompt);
// };

// export const generateNoteTags = async (noteContent: string) => {
//   const prompt = `Read the following note and return a comma-separated list of relevant tags:\n\n${noteContent}`;
//   const tagString = await getAIResponse(prompt, 0.4);
//   return tagString?.split(/\s*,\s*/).map((tag) => tag.trim().toLowerCase());
// };

// import axios from "axios";

// const API_KEY = process.env.HUGGINGFACE_API_KEY!;
// const headers = {
//   Authorization: `Bearer ${API_KEY}`,
//   "Content-Type": "application/json",
// };

// async function callHFModel(modelUrl: string, inputs: any): Promise<any> {
//   try {
//     const res = await axios.post(modelUrl, { inputs }, { headers });
//     return res.data;
//   } catch (err: any) {
//     console.error("HuggingFace error:", err.response?.data || err.message);
//     throw new Error("Failed to fetch from Hugging Face");
//   }
// }

// export async function generateSummary(text: string): Promise<string> {
//   const MODEL_URL =
//     "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
//   const data = await callHFModel(MODEL_URL, text);
//   return data[0]?.summary_text || "No summary returned.";
// }

// export async function improveNote(text: string): Promise<string> {
//   const MODEL_URL =
//     "https://api-inference.huggingface.co/models/vennify/t5-base-grammar-correction";
//   const input = `grammar: ${text}`;
//   const data = await callHFModel(MODEL_URL, input);
//   return data[0]?.generated_text || "No improvement returned.";
// }

// export async function generateTags(text: string): Promise<string[]> {
//   const MODEL_URL =
//     "https://api-inference.huggingface.co/models/ml6team/keyphrase-extraction-distilbert-inspec";
//   const data = await callHFModel(MODEL_URL, text);

//   const tags = data.map(
//     (entry: { score: number; entity_group: string; word: string }) =>
//       entry.word.replace(/^##/, "").toLowerCase()
//   ) as string[];

//   // remove duplicates
//   return [...new Set(tags)];
// }
