# AI Chat App with Saved History

A full-stack web application where users can chat with an AI assistant. All conversations are automatically saved to a database and restored when the page is refreshed.

## Features

- ✅ Real-time chat interface with AI assistant
- ✅ Persistent chat history stored in SQLite database
- ✅ Messages automatically load on page refresh
- ✅ Modern, responsive UI with smooth animations
- ✅ Support for OpenAI or Groq API (with free tier option)
- ✅ RESTful API backend
- ✅ Easy deployment to free hosting platforms

## Tech Stack

### Frontend
- **React** - UI framework
- **CSS3** - Styling with gradients and animations
- **Fetch API** - HTTP requests

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **SQLite** (better-sqlite3) - Database for message storage
- **OpenAI SDK** - AI integration (works with OpenAI, Groq, etc.)

## 📁 Project Structure

```
Sabiha_Fubotics_SoftwareAI_Assignment/
├── backend/
│   ├── server.js          # Express server
│   ├── database.js        # SQLite database operations
│   ├── aiService.js       # AI API integration
│   ├── package.json       # Backend dependencies
│   ├── .env.example       # Environment variables template
│   └── render.yaml        # Render.com deployment config
│
└── frontend/
    ├── src/
    │   ├── App.js         # Main React component
    │   ├── App.css        # Styling
    │   ├── index.js       # React entry point
    │   └── index.css      # Global styles
    ├── public/
    │   └── index.html     # HTML template
    ├── package.json       # Frontend dependencies
    ├── vercel.json        # Vercel deployment config
    └── .env.example       # Frontend environment variables
```

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- API key from OpenAI or Groq

### Step 1: Get an API Key (FREE option available!)

**Option A: Groq (Recommended - Has Free Tier)**
1. Go to https://console.groq.com/
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key (starts with `gsk_...`)

**Option B: OpenAI (Paid)**
1. Go to https://platform.openai.com/
2. Sign up and add payment method
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `sk-...`)

### Step 2: Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from template:
```bash
copy .env.example .env
```

4. Edit `.env` file and add your API key:

**For Groq (Free):**
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
GROQ_API_BASE=https://api.groq.com/openai/v1
PORT=5000
```

**For OpenAI:**
```env
OPENAI_API_KEY=sk_your_openai_api_key_here
PORT=5000
```

5. Start the backend server:
```bash
npm start
```

You should see:
```
🚀 Server is running on http://localhost:5000
📊 API endpoints available at http://localhost:5000/api
```

### Step 3: Frontend Setup

1. Open a new terminal and navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at http://localhost:3000

## 🎯 Testing Locally

1. Open http://localhost:3000 in your browser
2. Type a message and click "Send"
3. Wait for the AI response
4. Send more messages to build a conversation
5. **Refresh the page** - all your messages should still be there!

## 📡 API Endpoints

### GET `/api/messages`
Fetch all chat messages from the database.

**Response:**
```json
{
  "success": true,
  "messages": [
    {
      "id": 1,
      "role": "user",
      "content": "Hello!",
      "timestamp": "2025-12-08T10:30:00.000Z"
    },
    {
      "id": 2,
      "role": "assistant",
      "content": "Hi! How can I help you?",
      "timestamp": "2025-12-08T10:30:02.000Z"
    }
  ]
}
```

### POST `/api/messages`
Send a new message and get AI response.

**Request:**
```json
{
  "message": "What is React?"
}
```

**Response:**
```json
{
  "success": true,
  "messages": [
    {
      "id": 3,
      "role": "user",
      "content": "What is React?",
      "timestamp": "2025-12-08T10:31:00.000Z"
    },
    {
      "id": 4,
      "role": "assistant",
      "content": "React is a JavaScript library...",
      "timestamp": "2025-12-08T10:31:03.000Z"
    }
  ]
}
```

### DELETE `/api/messages` (Optional)
Clear all messages from the database.

## Deployment Guide

### Deploy Backend to Render.com (FREE)

1. Create account at https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository or use "Manual Deploy"
4. Configure:
   - **Name:** ai-chat-backend
   - **Environment:** Node
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Plan:** Free
5. Add Environment Variables:
   - `GROQ_API_KEY` or `OPENAI_API_KEY`
   - `GROQ_API_BASE` (if using Groq): `https://api.groq.com/openai/v1`
   - `PORT`: 5000
6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy your backend URL (e.g., `https://your-app.onrender.com`)

### Deploy Frontend to Vercel (FREE)

1. Create account at https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Create React App
   - **Root Directory:** frontend
   - **Build Command:** `npm run build`
   - **Output Directory:** build
5. Add Environment Variable:
   - `REACT_APP_API_URL`: Your Render backend URL
6. Click "Deploy"
7. Wait for deployment (2-3 minutes)
8. Your app is live! Copy the URL.

### Alternative: Deploy Both to Railway.app

1. Go to https://railway.app
2. Connect GitHub repository
3. Deploy backend and frontend as separate services
4. Configure environment variables
5. Both services will get URLs automatically

## 📸 Screenshots Guide

Take the following screenshots for your submission:

1. **Chat Interface:**
   - Screenshot of the chat UI with multiple messages (user + AI)
   - Show the gradient header and message bubbles

2. **Persistence Test:**
   - Screenshot before refresh (with several messages)
   - Screenshot after refresh (same messages still visible)

3. **Backend Running:**
   - Terminal screenshot showing backend server logs
   - Or Render.com dashboard showing service running

4. **Database:**
   - Open `backend/chat.db` with DB Browser for SQLite
   - Screenshot showing messages table with saved data
   - Or show terminal with backend logs showing message saves

## Testing Checklist

- [ ] Backend server starts without errors
- [ ] Frontend loads at http://localhost:3000
- [ ] Can send a message and receive AI response
- [ ] Messages appear in chat UI
- [ ] Messages persist after page refresh
- [ ] Backend logs show API calls
- [ ] Database file (`chat.db`) contains messages
- [ ] App works on deployed URLs
- [ ] Mobile responsive design works

## Troubleshooting

### Backend won't start
- Check if Node.js is installed: `node --version`
- Ensure you're in the backend directory
- Verify `.env` file exists with valid API key
- Check if port 5000 is available

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check browser console for CORS errors
- Verify `API_URL` in `App.js` points to `http://localhost:5000`

### AI not responding
- Verify API key is correct in `.env`
- Check backend logs for error messages
- Ensure you have internet connection
- For Groq: verify `GROQ_API_BASE` is set correctly

### Messages not persisting
- Check if `chat.db` file is created in backend folder
- Look for database errors in backend logs
- Ensure write permissions in backend directory

## Environment Variables Summary

### Backend (.env)
```env
# For Groq (Free)
GROQ_API_KEY=your_groq_key
GROQ_API_BASE=https://api.groq.com/openai/v1

# OR for OpenAI (Paid)
OPENAI_API_KEY=your_openai_key

# Server
PORT=5000
```

### Frontend (.env)
```env
# Point to your backend URL
REACT_APP_API_URL=http://localhost:5000

# For production (after deploying backend):
# REACT_APP_API_URL=https://your-backend.onrender.com
```

## Features Implemented

✅ **Required Features:**
- Chat-style UI with input box and send button
- Message display area showing user and AI messages
- Backend stores user messages in database
- Backend calls AI service for responses
- AI responses stored in database
- Full chat history endpoint
- Chat history loads on page refresh

✅ **Bonus Features:**
- Modern, attractive UI with gradients
- Smooth animations and transitions
- Loading states and error handling
- Auto-scroll to latest messages
- Responsive design for mobile
- Easy deployment configuration
- Support for multiple AI providers

## Technologies & Libraries

- **React 18** - Frontend framework
- **Express.js** - Backend framework
- **better-sqlite3** - Fast, synchronous SQLite database
- **OpenAI SDK** - Universal AI client (works with multiple providers)
- **cors** - Enable cross-origin requests
- **dotenv** - Environment variable management

## Security Notes

- Never commit `.env` files to version control
- Always use `.env.example` as template
- Store API keys securely
- Use environment variables in production
- Enable CORS only for trusted origins in production

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all dependencies are installed
3. Ensure API keys are valid
4. Check backend and frontend logs for errors

## License

This project is created for the Fubotics Software & AI Assignment.

---

**Good luck with your assignment! 🚀**

For questions or issues, please refer to the troubleshooting section or check the inline code comments.
