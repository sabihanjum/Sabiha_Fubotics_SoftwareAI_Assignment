import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Backend API URL - Change this when deploying
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatContainerRef = useRef(null);

  // Fetch chat history on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Fetch all messages from backend
  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}/api/messages`);
      const data = await response.json();
      
      if (data.success) {
        setMessages(data.messages);
      } else {
        setError('Failed to load chat history');
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Cannot connect to server. Please make sure the backend is running.');
    }
  };

  // Send a new message
  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || loading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.success) {
        // Add the new messages (user + assistant) to the state
        setMessages(prev => [...prev, ...data.messages]);
      } else {
        setError(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(e);
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <h1>💬 AI Chat Assistant</h1>
        <p>Chat with AI - History is saved automatically</p>
      </div>

      {/* Chat Messages Container */}
      <div className="chat-container" ref={chatContainerRef}>
        {error && <div className="error">{error}</div>}
        
        {messages.length === 0 && !loading && !error ? (
          <div className="empty-state">
            <div className="empty-state-icon">🤖</div>
            <h2>Start a conversation</h2>
            <p>Your chat history will be saved and restored when you refresh the page</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div key={msg.id || index} className={`message ${msg.role}`}>
              <div className="message-content">
                <div className="message-role">{msg.role}</div>
                <div>{msg.content}</div>
              </div>
            </div>
          ))
        )}

        {loading && (
          <div className="loading">
            <div className="loading-dots">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={sendMessage} className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
        </div>
        <button 
          type="submit" 
          className="send-button"
          disabled={loading || !inputMessage.trim()}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

export default App;
