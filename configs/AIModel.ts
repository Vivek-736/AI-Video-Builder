/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import fs from "node:fs";
import mime from "mime-types";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a script to generate 30 seconds video on topic :lnteresting historical story along with Al image\nprompt in Realistic format for each scene and give me result in JSON format with imagePrompt and\nContentText as field",
        },
      ],
    },

    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "EXT. ROMAN FORUM - DAY. 1 AD.  A bustling Roman forum.  Senators in togas argue. Vendors hawk their wares.  A lone figure, a NEWS VENDOR, stands out, holding a scroll with bold, hand-painted lettering announcing \'CAESAR\'S WILL REVEALED!\' Realistic rendering, detailed architecture, vibrant colors, dramatic lighting.",\n    "ContentText": "**(0-5 seconds) (Voiceover - dramatic, slightly theatrical):** Imagine ancient Rome. A city buzzing with power, ambition, and secrets. News traveled slowly... but when it did, it could change the world."\n  },\n  {\n    "imagePrompt": "INT. SENATE - DAY.  1 AD. A tense atmosphere.  Roman Senators are gathered, many looking worried.  A CLERK reads aloud from a PARCHMENT scroll. A close up on the scroll reveal mention \'adopt Brutus\'. Hyper-realistic detail, marble columns, sunlight streaming through high windows, capturing the gravitas and tension.",\n    "ContentText": "**(5-10 seconds) (Voiceover):** Caesar was dead. His will was sealed. The Senators gathered, eager to learn his last wishes... and who would inherit his power."\n  },\n  {\n    "imagePrompt": "EXT. ROMAN STREET - DAY.  1 AD. A crowd of Roman citizens reacts in shock.  Some are angry, others are confused, some are laughing.  They hear the news from a passing orator. Ultra-realistic depiction, showing the raw emotions on their faces, the details of their clothing, and the architecture of the ancient Roman street. ",\n    "ContentText": "**(10-15 seconds) (Voiceover):** But the will held a shocking secret... Caesar had adopted Brutus, one of his assassins, as his son!"\n  },\n  {\n    "imagePrompt": "INT. BRUTUS\' VILLA - NIGHT.  1 AD. Brutus sits alone, staring into a flickering oil lamp. He is torn, guilt and ambition warring within him.  Shadows play dramatically on his face. Cinematic lighting, highlighting his inner turmoil. Hyper-realistic portrait, showing the lines of worry on his face.",\n    "ContentText": "**(15-20 seconds) (Voiceover):** Brutus, consumed by guilt and conflicted by his newfound status, now face a difficult choices"\n  },\n  {\n    "imagePrompt": "EXT. ROMAN FORUM - DAY.  1 AD. Mark Antony addresses a furious crowd.  He points dramatically, his face contorted with rage.  The crowd responds with anger and shouts.  Realistic depiction of the chaos and energy of the moment, showing the textures of the crowd\'s clothing and the Roman architecture in the background.",\n    "ContentText": "**(20-25 seconds) (Voiceover):** Mark Antony seized the opportunity, whipping the crowds into a frenzy with his famous speech."\n  },\n  {\n    "imagePrompt": "EXT. ROMAN STREETS - DAY. 1 AD.  Riots erupt. Citizens clash. Buildings are set ablaze. Chaos reigns. Ultra-realistic depiction of the violence and destruction. Smoke fills the air. The details of the rioters\' clothing and the architecture of the ancient Roman street should be highly visible.",\n    "ContentText": "**(25-30 seconds) (Voiceover):** And so, Caesar\'s will, intended to provide stability, ignited a civil war that would reshape the Roman Republic forever. **(Text on screen: \'The Legacy of Caesar\'s Will\')**"\n  }\n]\n```',
        },
      ],
    },
  ],
});