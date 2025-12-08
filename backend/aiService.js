require('dotenv').config();
const OpenAI = require('openai');

// Initialize OpenAI client
// This works with OpenAI, Groq, or any OpenAI-compatible API
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY,
  baseURL: process.env.GROQ_API_BASE || undefined // Use Groq if configured, otherwise default OpenAI
});

/**
 * Generate AI response based on conversation history
 * @param {Array} messages - Array of message objects with role and content
 * @returns {Promise<string>} - AI generated response
 */
async function generateAIResponse(messages) {
  try {
    // Format messages for API (only include role and content)
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Call AI API
    const completion = await openai.chat.completions.create({
      model: process.env.GROQ_API_BASE ? 'llama-3.1-70b-versatile' : 'gpt-3.5-turbo', // Use Groq model if configured
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 500
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('AI API Error:', error.message);
    
    // Return a friendly error message
    if (error.code === 'invalid_api_key') {
      return 'Sorry, the AI service is not properly configured. Please check the API key.';
    }
    
    return 'Sorry, I encountered an error. Please try again.';
  }
}

module.exports = {
  generateAIResponse
};
