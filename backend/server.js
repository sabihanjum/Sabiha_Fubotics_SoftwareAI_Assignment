require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getAllMessages, addMessage, clearMessages } = require('./database');
const { generateAIResponse } = require('./aiService');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'AI Chat API is running',
    endpoints: {
      'GET /api/messages': 'Get all chat messages',
      'POST /api/messages': 'Send a new message',
      'DELETE /api/messages': 'Clear all messages (optional)'
    }
  });
});

// Get all messages
app.get('/api/messages', (req, res) => {
  try {
    const messages = getAllMessages();
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

// Send a new message and get AI response
app.post('/api/messages', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, error: 'Message is required' });
    }

    // Save user message
    const userMessage = addMessage('user', message.trim());

    // Get conversation history for context
    const allMessages = getAllMessages();

    // Generate AI response
    const aiResponse = await generateAIResponse(allMessages);

    // Save AI response
    const assistantMessage = addMessage('assistant', aiResponse);

    // Return both messages
    res.json({
      success: true,
      messages: [userMessage, assistantMessage]
    });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ success: false, error: 'Failed to process message' });
  }
});

// Clear all messages (optional - for testing)
app.delete('/api/messages', (req, res) => {
  try {
    clearMessages();
    res.json({ success: true, message: 'All messages cleared' });
  } catch (error) {
    console.error('Error clearing messages:', error);
    res.status(500).json({ success: false, error: 'Failed to clear messages' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api`);
});
