import OpenAI from "openai";

import { ENV } from "../constants/env";

const openAIClient = new OpenAI({
  apiKey: ENV.OPENAI_API_KEY,
});

const getAIResponse = async (prompt: string, temperature = 0.7) => {
  const response = await openAIClient.chat.completions.create({
    // model: "gpt-3.5-turbo",
    model: "gpt-3.5-turbo-0125",
    messages: [{ role: "user", content: prompt }],
    temperature,
  });
  return response.choices[0]?.message?.content?.trim();
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
