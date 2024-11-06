import { GEMINI_API_KEY } from "./Constants";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const { GoogleGenerativeAI } = require("@google/generative-ai");
// Make sure to include these imports:

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
];
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  dangerouslyAllowBrowser: true,
  safetySettings: safetySettings,
});

export default model;
