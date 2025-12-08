# Testing Guide

## 🧪 How to Test Your AI Chat App

This guide will help you verify that all features are working correctly.

---

## Prerequisites
- Backend server running on http://localhost:5000
- Frontend running on http://localhost:3000
- Valid API key configured in backend/.env

---

## Test 1: Backend Health Check

### Steps:
1. Open browser and go to: http://localhost:5000
2. You should see JSON response:
```json
{
  "status": "AI Chat API is running",
  "endpoints": {
    "GET /api/messages": "Get all chat messages",
    "POST /api/messages": "Send a new message",
    "DELETE /api/messages": "Clear all messages (optional)"
  }
}
```

### Expected Result:
✅ Backend is running and responding

---

## Test 2: Empty Messages List

### Steps:
1. Go to: http://localhost:5000/api/messages
2. You should see:
```json
{
  "success": true,
  "messages": []
}
```

### Expected Result:
✅ Database is working and returns empty array

---

## Test 3: Frontend Loads

### Steps:
1. Open http://localhost:3000
2. Wait for page to load

### Expected Result:
✅ You see:
- Header: "💬 AI Chat Assistant"
- Empty state with robot icon 🤖
- Message: "Start a conversation"
- Input box at bottom
- Send button

---

## Test 4: Send First Message

### Steps:
1. Type "Hello!" in the input box
2. Click "Send" button
3. Wait for response (5-10 seconds)

### Expected Result:
✅ You see:
- Your message appears on the right (purple bubble)
- Loading animation (three dots)
- AI response appears on the left (white bubble)
- Input box is cleared and ready for next message

---

## Test 5: Send Multiple Messages

### Steps:
1. Send: "What is 2+2?"
2. Wait for response
3. Send: "Tell me a joke"
4. Wait for response
5. Send: "What's the weather?"
6. Wait for response

### Expected Result:
✅ You see:
- All messages in chronological order
- User messages on right (purple)
- AI responses on left (white)
- Conversation flows naturally
- Page scrolls to show latest messages

---

## Test 6: Page Refresh (MOST IMPORTANT!)

### Steps:
1. With several messages visible on screen
2. Take a screenshot (for submission)
3. Press F5 or click refresh button
4. Wait for page to reload
5. Take another screenshot (for submission)

### Expected Result:
✅ You see:
- All previous messages are still there
- Same order as before
- No messages lost
- Can continue conversation

---

## Test 7: Database Verification

### Steps:
1. Close both frontend and backend
2. Navigate to backend folder
3. Check if file `chat.db` exists
4. Open with DB Browser for SQLite (download from https://sqlitebrowser.org/)
5. Browse Data → Select "messages" table
6. Take screenshot (for submission)

### Expected Result:
✅ You see:
- Table with columns: id, role, content, timestamp
- All your messages stored with correct role (user/assistant)
- Timestamps showing when messages were sent

### Alternative (Without DB Browser):
Run this in backend folder:
```powershell
npm install -g sqlite3
sqlite3 chat.db "SELECT * FROM messages;"
```

---

## Test 8: Error Handling

### Steps:
1. Stop the backend server (Ctrl+C)
2. Try to send a message from frontend
3. Observe the error message

### Expected Result:
✅ You see:
- Red error banner appears
- Message: "Cannot connect to server..."
- Input still works but messages don't send

### Recovery:
1. Restart backend
2. Send a message
3. Should work again

---

## Test 9: API Direct Test (Using Browser or Postman)

### Steps:
1. Open Postman or use browser console
2. Make POST request:

**Using Browser Console:**
```javascript
fetch('http://localhost:5000/api/messages', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Test from console' })
})
.then(r => r.json())
.then(data => console.log(data));
```

### Expected Result:
✅ You see:
```json
{
  "success": true,
  "messages": [
    {
      "id": X,
      "role": "user",
      "content": "Test from console",
      "timestamp": "..."
    },
    {
      "id": X+1,
      "role": "assistant",
      "content": "AI response here...",
      "timestamp": "..."
    }
  ]
}
```

---

## Test 10: Mobile Responsiveness

### Steps:
1. Open frontend in Chrome
2. Press F12 (Developer Tools)
3. Click device toolbar icon (Ctrl+Shift+M)
4. Select iPhone or Samsung Galaxy
5. Test sending messages

### Expected Result:
✅ You see:
- UI adapts to mobile screen
- Messages are narrower
- Input box still accessible
- Can scroll through messages
- No horizontal scrolling needed

---

## Test 11: Performance Test

### Steps:
1. Clear all messages (optional)
2. Send 10 messages rapidly
3. Observe behavior

### Expected Result:
✅ You see:
- All messages processed in order
- No crashes or freezes
- Loading states work correctly
- Database saves all messages
- Page remains responsive

---

## Test 12: Long Message Test

### Steps:
1. Copy and paste a very long text (500+ words)
2. Send as message
3. Wait for AI response

### Expected Result:
✅ You see:
- Long message displays correctly
- Text wraps within bubble
- Can scroll to read full message
- AI responds appropriately
- No UI breaking

---

## Test 13: Special Characters

### Steps:
Send messages with:
1. Emojis: "Hello! 😊🎉"
2. Code: "print('Hello World')"
3. HTML: "<script>alert('test')</script>"

### Expected Result:
✅ You see:
- All characters display correctly
- No script execution (XSS prevented)
- Emojis render properly
- Code shows as plain text

---

## Test 14: Backend Logs

### Steps:
1. Open backend terminal
2. Send a message from frontend
3. Observe logs

### Expected Result:
✅ You see logs like:
```
POST /api/messages 200
GET /api/messages 200
```

Take screenshot for submission.

---

## Test 15: Clear Database (Optional)

### Steps:
1. Make DELETE request to http://localhost:5000/api/messages
2. Refresh frontend

**Using Browser Console:**
```javascript
fetch('http://localhost:5000/api/messages', {
  method: 'DELETE'
})
.then(r => r.json())
.then(data => console.log(data));
```

### Expected Result:
✅ You see:
- Success message in console
- Frontend shows empty state again
- Can start fresh conversation

---

## 📸 Screenshots Checklist for Submission

Required screenshots:

1. **Chat Interface:**
   - [ ] Multiple messages visible (at least 6)
   - [ ] Both user and AI messages
   - [ ] Clear UI showing header, messages, input

2. **Persistence Test:**
   - [ ] Before refresh (with messages)
   - [ ] After refresh (same messages)
   - [ ] Clearly shows it's the same browser tab

3. **Backend Running:**
   - [ ] Terminal showing "Server is running"
   - [ ] Or backend logs with API requests
   - [ ] Or Render.com dashboard (if deployed)

4. **Database:**
   - [ ] SQLite browser showing messages table
   - [ ] Or terminal output showing database content
   - [ ] Clearly shows stored messages with timestamps

5. **Deployment (if completed):**
   - [ ] Render dashboard showing backend service
   - [ ] Vercel dashboard showing frontend deployment
   - [ ] Live app with working chat

---

## Common Issues & Solutions

### Issue: AI not responding
**Solution:** Check API key in backend/.env

### Issue: Messages not persisting
**Solution:** Check if chat.db file exists in backend folder

### Issue: CORS error in console
**Solution:** Ensure backend CORS is enabled (already done in code)

### Issue: Port already in use
**Solution:** 
- Change PORT in backend/.env to 5001
- Update frontend API_URL to match

### Issue: npm install fails
**Solution:**
- Delete node_modules folder
- Delete package-lock.json
- Run npm install again

---

## ✅ Final Checklist

Before submission, ensure:

- [ ] Backend runs without errors
- [ ] Frontend loads and displays correctly
- [ ] Can send messages and get AI responses
- [ ] Messages persist after page refresh
- [ ] Database contains saved messages
- [ ] All required screenshots taken
- [ ] App deployed to free hosting (if required)
- [ ] Live URL tested and working
- [ ] README.md reviewed and complete

---

## 🎉 Success Criteria

Your app passes if:
- ✅ User can send messages
- ✅ AI responds to messages
- ✅ All messages saved in database
- ✅ Messages load on page refresh
- ✅ Clean, functional UI
- ✅ No critical errors in console
- ✅ Deployed and accessible online

---

Good luck with testing! 🚀

If you find any issues, refer to the troubleshooting section in README.md.
