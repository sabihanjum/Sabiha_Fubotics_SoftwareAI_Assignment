# ✅ Assignment Completion Checklist

Use this checklist to track your progress through the assignment.

---

## 📦 Setup Phase

- [ ] Node.js installed (check: `node --version`)
- [ ] Git installed (optional, for GitHub)
- [ ] Project folder downloaded/cloned
- [ ] Read `ASSIGNMENT_SUMMARY.md` for overview

---

## 🔑 API Key Setup

- [ ] Signed up for Groq account (https://console.groq.com/)
- [ ] Created API key
- [ ] Copied API key to safe location
- [ ] Created `backend/.env` file
- [ ] Pasted API key into `.env` file
- [ ] Verified `.env` format is correct

---

## 🛠️ Installation

### Backend
- [ ] Navigated to `backend` folder
- [ ] Ran `npm install`
- [ ] No errors during installation
- [ ] `node_modules` folder created
- [ ] `.env` file configured

### Frontend
- [ ] Navigated to `frontend` folder
- [ ] Ran `npm install`
- [ ] No errors during installation
- [ ] `node_modules` folder created

**Alternative:** Run `setup.ps1` for automatic setup

---

## 🚀 Local Testing

### Backend
- [ ] Opened terminal in `backend` folder
- [ ] Ran `npm start`
- [ ] Saw message: "Server is running on http://localhost:5000"
- [ ] No errors in terminal
- [ ] Opened http://localhost:5000 in browser
- [ ] Saw JSON response with API info

### Frontend
- [ ] Opened NEW terminal in `frontend` folder
- [ ] Ran `npm start`
- [ ] Browser opened automatically to http://localhost:3000
- [ ] Saw chat interface with header
- [ ] No errors in browser console (F12)

---

## 💬 Feature Testing

### Basic Chat
- [ ] Typed "Hello!" in input box
- [ ] Clicked "Send" button
- [ ] Saw my message appear on right side (purple)
- [ ] Saw loading animation (three dots)
- [ ] Received AI response on left side (white)
- [ ] Response makes sense and is relevant

### Multiple Messages
- [ ] Sent at least 5-6 different messages
- [ ] All messages appear in order
- [ ] AI responds to each message
- [ ] Can scroll through conversation
- [ ] Page auto-scrolls to latest message

### Persistence (MOST IMPORTANT!)
- [ ] Sent several messages (at least 6)
- [ ] **Took screenshot #1** (chat with messages)
- [ ] Pressed F5 or clicked refresh button
- [ ] Page reloaded
- [ ] **Took screenshot #2** (same messages still there)
- [ ] All messages are in same order
- [ ] Can send new messages
- [ ] New messages also persist after refresh

---

## 📸 Screenshots Taken

### Screenshot 1: Chat Interface
- [ ] Multiple messages visible (at least 6)
- [ ] Both user messages (purple, right side)
- [ ] AI responses (white, left side)
- [ ] Header visible: "💬 AI Chat Assistant"
- [ ] Input box visible at bottom
- [ ] Clear, high-quality image

### Screenshot 2: After Refresh
- [ ] Same browser window/tab
- [ ] Same messages as Screenshot 1
- [ ] All messages still there
- [ ] Proves persistence works

### Screenshot 3: Backend Running
**Choose one:**
- [ ] Terminal showing "Server is running" message
- [ ] Terminal showing API request logs
- [ ] Render.com dashboard (if deployed)

### Screenshot 4: Database Evidence
**Choose one:**
- [ ] DB Browser showing messages table with data
- [ ] Terminal showing database query results
- [ ] Backend logs showing message saves

---

## 🗄️ Database Verification

- [ ] Backend creates `chat.db` file
- [ ] File exists in `backend` folder
- [ ] Downloaded DB Browser for SQLite (optional)
- [ ] Opened `chat.db` in DB Browser
- [ ] Saw `messages` table
- [ ] Table has columns: id, role, content, timestamp
- [ ] Messages are saved in database
- [ ] **Took screenshot** of database table

---

## 🌐 Deployment Preparation

### Code Repository (Optional)
- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Initialized git in project folder
- [ ] Added files to git
- [ ] Committed changes
- [ ] Pushed to GitHub
- [ ] Repository is accessible

### Backend Deployment (Render.com)
- [ ] Created Render account
- [ ] Connected GitHub repository
- [ ] Created new Web Service
- [ ] Configured settings (Node, backend folder)
- [ ] Added environment variables (API key)
- [ ] Deployed backend
- [ ] Backend URL works
- [ ] Tested API: `https://your-app.onrender.com/api/messages`

### Frontend Deployment (Vercel)
- [ ] Created Vercel account
- [ ] Imported project from GitHub
- [ ] Configured settings (React, frontend folder)
- [ ] Added environment variable (backend URL)
- [ ] Deployed frontend
- [ ] Frontend URL works
- [ ] Tested live app
- [ ] Can send messages on live app
- [ ] Messages persist on live app

---

## 🧪 Live App Testing

- [ ] Opened deployed frontend URL
- [ ] Chat interface loads correctly
- [ ] Sent test message
- [ ] Received AI response
- [ ] Sent multiple messages
- [ ] Refreshed page
- [ ] Messages still there (persistence works)
- [ ] No errors in browser console
- [ ] Works on mobile device (optional)

---

## 📋 Documentation Review

- [ ] Read `README.md` (main documentation)
- [ ] Read `QUICKSTART.md` (setup guide)
- [ ] Read `DEPLOYMENT.md` (hosting guide)
- [ ] Read `TESTING.md` (testing procedures)
- [ ] Read `ASSIGNMENT_SUMMARY.md` (overview)
- [ ] Understand all features implemented
- [ ] Know how to troubleshoot issues

---

## 📦 Final Submission

### Required Items
- [ ] Live frontend URL (Vercel or other)
- [ ] Live backend URL (Render or other)
- [ ] Screenshot 1: Chat interface
- [ ] Screenshot 2: After refresh
- [ ] Screenshot 3: Backend running
- [ ] Screenshot 4: Database evidence

### Optional Items
- [ ] GitHub repository URL
- [ ] Brief description of project
- [ ] List of technologies used
- [ ] Any extra features implemented

---

## ✅ Pre-Submission Checklist

### Functionality
- [ ] Live app is accessible
- [ ] Can send messages
- [ ] AI responds correctly
- [ ] Messages persist after refresh
- [ ] No critical errors
- [ ] Works in Chrome/Firefox/Safari

### Screenshots
- [ ] All 4 screenshots taken
- [ ] Images are clear and readable
- [ ] Screenshots show evidence of working features
- [ ] Filenames are descriptive

### URLs
- [ ] Frontend URL tested and working
- [ ] Backend URL tested and responding
- [ ] Both URLs are accessible from different devices
- [ ] No localhost URLs in submission

### Code Quality
- [ ] No `.env` files committed to GitHub
- [ ] `.gitignore` is working
- [ ] Code is clean and organized
- [ ] README is complete

---

## 🎯 Success Criteria

Your submission is complete when:

✅ You have a working live web app  
✅ Users can chat with AI  
✅ Messages are saved in database  
✅ Messages persist after page refresh  
✅ You have 4 clear screenshots  
✅ Frontend is deployed and accessible  
✅ Backend is deployed and accessible  

---

## 📊 Scoring Guide (Estimated)

| Feature | Points |
|---------|--------|
| Working chat interface | 15% |
| Backend API with database | 25% |
| AI integration | 20% |
| Message persistence | 20% |
| Live deployment | 15% |
| Screenshots & documentation | 5% |

**Total: 100%**

---

## 🆘 If You're Stuck

### Quick Troubleshooting
1. Check `TESTING.md` for specific test procedures
2. Check `README.md` troubleshooting section
3. Verify API key is correct in `.env`
4. Check terminal for error messages
5. Check browser console for errors (F12)

### Common Issues
- **Backend won't start:** Check `.env` file exists and has valid API key
- **Frontend can't connect:** Ensure backend is running on port 5000
- **AI not responding:** Verify API key and internet connection
- **Messages not persisting:** Check if `chat.db` file is created

---

## 🎉 Completion

When all items are checked:

✅ Your project is complete!  
✅ All features are working!  
✅ You're ready to submit!  

**Congratulations!** 🎊

---

## 📝 Notes Section

Use this space for your own notes:

**Live URLs:**
- Frontend: ___________________________________
- Backend: ___________________________________

**GitHub:**
- Repository: ___________________________________

**Screenshots:**
- Location: ___________________________________

**Submission Date:**
- Deadline: ___________________________________
- Submitted: ___________________________________

---

**Good luck with your assignment!** 🚀

For detailed help, see:
- Setup: `QUICKSTART.md`
- Deployment: `DEPLOYMENT.md`
- Testing: `TESTING.md`
- Overview: `README.md`
