
import { GoogleGenAI, Type } from "@google/genai";
// FIX: Imported Message and User from ../types instead of ../data/mockData
import { Message, User } from '../types';
import { users } from '../data/mockData';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

function formatConversationHistory(messages: Message[]): string {
  return messages.map(msg => {
    const senderName = users[msg.senderId]?.name || 'Unknown';
    return `${senderName}: ${msg.text}`;
  }).join('\n');
}

export const generateSmartReplies = async (messages: Message[]): Promise<string[]> => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is not set.");
    return ["Can't connect to AI", "Try again later", "Looks good!"];
  }
  try {
    const conversationHistory = formatConversationHistory(messages.slice(-5)); // Use last 5 messages for context
    const prompt = `Based on the following conversation, generate three concise, context-aware, and natural-sounding replies. The replies should be from the perspective of "You".\n\nConversation:\n${conversationHistory}\n\nReplies:`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            replies: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "An array of three short reply suggestions."
            }
          }
        }
      }
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result.replies || [];

  } catch (error) {
    console.error("Error generating smart replies:", error);
    return [];
  }
};

export const summarizeConversation = async (messages: Message[]): Promise<string> => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is not set.");
    return "Could not generate summary: API key not configured.";
  }
  try {
    const conversationHistory = formatConversationHistory(messages);
    const prompt = `Please provide a concise, one-paragraph summary of the following chat conversation:\n\n---\n${conversationHistory}\n---`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error summarizing conversation:", error);
    return "An error occurred while generating the summary.";
  }
};