require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

/**
 * Generate AI response using Google Gemini
 * @param {Array} messages - Array of message objects with role and content
 * @returns {Promise<string>} - AI generated response
 */
async function generateAIResponse(messages) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('AI API Error: GEMINI_API_KEY is missing');
    return 'Sorry, the AI service is not configured. Please add a Gemini API key.';
  }

  try {
    const modelName = process.env.GEMINI_MODEL || 'gemini-1.5-pro';
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    const history = messages
      .map((m) => `${m.role === 'assistant' ? 'Assistant' : 'User'}: ${m.content}`)
      .join('\n');

    const prompt = `You are a helpful AI assistant. Continue the conversation.

${history}

Assistant:`;

    const result = await model.generateContent(prompt);
    const text = result.response?.text?.();

    if (!text) {
      console.error('AI API Error: Empty response from Gemini');
      return 'Sorry, I could not generate a response. Please try again.';
    }

    return text.trim();
  } catch (error) {
    console.error('AI API Error:', error.message);
    console.error('Full error:', error);

    if (error?.message?.toLowerCase().includes('api key')) {
      return `Error: API key issue - ${error.message}`;
    }

    // Return detailed error for debugging
    return `Error: ${error.message || 'Unknown error occurred'}`;
  }
}

module.exports = {
  generateAIResponse,
};
