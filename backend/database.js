const Database = require('better-sqlite3');
const path = require('path');

// Initialize SQLite database
const db = new Database(path.join(__dirname, 'chat.db'));

// Create messages table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Get all messages
const getAllMessages = () => {
  const stmt = db.prepare('SELECT * FROM messages ORDER BY timestamp ASC');
  return stmt.all();
};

// Add a new message
const addMessage = (role, content) => {
  const stmt = db.prepare('INSERT INTO messages (role, content) VALUES (?, ?)');
  const info = stmt.run(role, content);
  
  // Return the newly created message
  const selectStmt = db.prepare('SELECT * FROM messages WHERE id = ?');
  return selectStmt.get(info.lastInsertRowid);
};

// Clear all messages (optional, for testing)
const clearMessages = () => {
  const stmt = db.prepare('DELETE FROM messages');
  return stmt.run();
};

module.exports = {
  getAllMessages,
  addMessage,
  clearMessages
};
