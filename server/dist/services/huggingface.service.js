"use strict";
// import OpenAI from "openai";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNoteTags = exports.improveNoteContent = exports.generateNoteContentSummary = void 0;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../constants/env");
// const openAIClient = new OpenAI({
//   apiKey: ENV.OPENAI_API_KEY,
// });
const getAIResponse = (prompt_1, ...args_1) => __awaiter(void 0, [prompt_1, ...args_1], void 0, function* (prompt, temperature = 0.7) {
    //   const response = await openAIClient.chat.completions.create({
    //     // model: "gpt-3.5-turbo",
    //     model: "gpt-3.5-turbo-0125",
    //     messages: [{ role: "user", content: prompt }],
    //     temperature,
    //   });
    //   return response.choices[0]?.message?.content?.trim();
    try {
        const res = yield axios_1.default.post("https://router.huggingface.co/v1/chat/completions", {
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "meta-llama/Llama-3.1-8B-Instruct:novita",
            stream: false,
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${env_1.ENV.HF_TOKEN}`,
            },
        });
        return res.data.choices[0].message.content.trim();
    }
    catch (error) {
        return error.message;
    }
});
const generateNoteContentSummary = (noteContent) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = `Summarize the following note:\n\n${noteContent}`;
    return yield getAIResponse(prompt, 0.3);
});
exports.generateNoteContentSummary = generateNoteContentSummary;
const improveNoteContent = (noteContent) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = `Improve the following note for clarity and grammar:\n\n${noteContent}`;
    return yield getAIResponse(prompt);
});
exports.improveNoteContent = improveNoteContent;
const generateNoteTags = (noteContent) => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = `Read the following note and return a comma-separated list of relevant tags:\n\n${noteContent}`;
    const tagString = yield getAIResponse(prompt, 0.4);
    return tagString === null || tagString === void 0 ? void 0 : tagString.split(/\s*,\s*/).map((tag) => tag.trim().toLowerCase());
});
exports.generateNoteTags = generateNoteTags;
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
