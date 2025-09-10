"use strict";
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
const openai_1 = __importDefault(require("openai"));
const env_1 = require("../constants/env");
const openAIClient = new openai_1.default({
    apiKey: env_1.ENV.OPENAI_API_KEY,
});
const getAIResponse = (prompt_1, ...args_1) => __awaiter(void 0, [prompt_1, ...args_1], void 0, function* (prompt, temperature = 0.7) {
    var _a, _b, _c;
    const response = yield openAIClient.chat.completions.create({
        // model: "gpt-3.5-turbo",
        model: "gpt-3.5-turbo-0125",
        messages: [{ role: "user", content: prompt }],
        temperature,
    });
    return (_c = (_b = (_a = response.choices[0]) === null || _a === void 0 ? void 0 : _a.message) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.trim();
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
