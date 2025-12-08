# Deployment Guide - Step by Step

## 🎯 Goal
Deploy your AI Chat App for FREE using Render.com (backend) and Vercel (frontend).

---

## Part 1: Deploy Backend to Render.com

### Step 1: Prepare Your Code
1. Push your code to GitHub (create a new repository)
2. Make sure `.env` is in `.gitignore` (don't commit API keys!)

### Step 2: Sign Up for Render
1. Go to https://render.com
2. Click "Get Started" → Sign up with GitHub
3. Authorize Render to access your repositories

### Step 3: Create Web Service
1. Click "New +" button → Select "Web Service"
2. Connect your GitHub repository
3. Or click "Deploy from Git" and paste your repo URL

### Step 4: Configure Service
Fill in these settings:
- **Name:** `ai-chat-backend` (or your choice)
- **Region:** Choose closest to you
- **Branch:** `main` or `master`
- **Root Directory:** `backend`
- **Environment:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** `Free`

### Step 5: Add Environment Variables
Click "Advanced" → Add Environment Variables:
```
GROQ_API_KEY = gsk_your_groq_api_key_here
GROQ_API_BASE = https://api.groq.com/openai/v1
PORT = 5000
```

Or for OpenAI:
```
OPENAI_API_KEY = sk_your_openai_api_key_here
PORT = 5000
```

### Step 6: Deploy
1. Click "Create Web Service"
2. Wait 5-10 minutes for deployment
3. Copy your backend URL: `https://your-app-name.onrender.com`
4. Test it: Visit `https://your-app-name.onrender.com/api/messages`
   - Should return: `{"success":true,"messages":[]}`

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Sign Up for Vercel
1. Go to https://vercel.com
2. Click "Sign Up" → Continue with GitHub
3. Authorize Vercel to access your repositories

### Step 2: Import Project
1. Click "Add New..." → "Project"
2. Find your repository in the list
3. Click "Import"

### Step 3: Configure Project
Fill in these settings:
- **Framework Preset:** Create React App (auto-detected)
- **Root Directory:** `frontend`
- **Build Command:** `npm run build` (auto-filled)
- **Output Directory:** `build` (auto-filled)

### Step 4: Add Environment Variable
Click "Environment Variables" section:
```
REACT_APP_API_URL = https://your-backend-url.onrender.com
```
(Use the URL you copied from Render in Part 1, Step 6)

### Step 5: Deploy
1. Click "Deploy"
2. Wait 2-3 minutes
3. Click on the provided URL
4. Your app is LIVE! 🎉

### Step 6: Test Live App
1. Visit your Vercel URL
2. Send a message
3. Verify AI responds
4. Refresh the page
5. Confirm messages persist

---

## Part 3: Troubleshooting Deployment

### Backend Issues

**Problem:** Build fails on Render
- Check that `package.json` is in the backend folder
- Verify Node version compatibility
- Check Render logs for specific errors

**Problem:** Service runs but API doesn't respond
- Check environment variables are set correctly
- View logs: Dashboard → Your Service → Logs
- Verify API key is valid

**Problem:** "Cannot connect to database"
- Render free tier has ephemeral filesystem
- Database will reset on sleep/restart
- For production, upgrade to persistent storage or use external DB

### Frontend Issues

**Problem:** Build fails on Vercel
- Check that all dependencies are in `package.json`
- Verify `public` and `src` folders exist
- Check build logs for specific errors

**Problem:** Can't connect to backend
- Verify `REACT_APP_API_URL` is set correctly
- Check browser console for CORS errors
- Ensure backend URL is correct (no trailing slash)

**Problem:** Environment variable not working
- Must start with `REACT_APP_`
- Redeploy after adding variables
- Check Settings → Environment Variables

### CORS Errors
If you see CORS errors in browser console:

Update `backend/server.js`:
```javascript
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

Redeploy backend after this change.

---

## Part 4: Alternative Deployment Options

### Option A: Both on Railway.app
1. Go to https://railway.app
2. Create new project from GitHub
3. Add two services:
   - Backend (root: `backend`, start: `npm start`)
   - Frontend (root: `frontend`, start: `npm start`)
4. Set environment variables for each
5. Railway provides URLs automatically

### Option B: Backend on Render + Frontend on Netlify
1. Backend: Follow Render steps above
2. Frontend on Netlify:
   - Go to https://netlify.com
   - Drag & drop `frontend/build` folder
   - Or connect GitHub for automatic deploys
   - Set environment variable: `REACT_APP_API_URL`

### Option C: Free Hosting Alternatives
- **Backend:** Railway, Cyclic, Fly.io
- **Frontend:** Netlify, GitHub Pages, Surge

---

## Part 5: Post-Deployment Checklist

- [ ] Backend is accessible at Render URL
- [ ] Frontend is accessible at Vercel URL
- [ ] Can send messages in live app
- [ ] AI responds with messages
- [ ] Messages persist after refresh
- [ ] No console errors in browser
- [ ] Backend logs show successful requests
- [ ] Environment variables are set correctly
- [ ] CORS is configured properly

---

## 📸 Screenshots to Take

1. **Render Dashboard:**
   - Screenshot showing your backend service running (green checkmark)

2. **Vercel Dashboard:**
   - Screenshot showing your frontend deployment success

3. **Live App:**
   - Chat interface with several messages
   - Browser URL visible showing your Vercel domain

4. **Persistence Test:**
   - Screenshot with messages
   - Refresh page
   - Another screenshot showing same messages

5. **Backend Logs:**
   - Render logs showing API requests
   - Or API test response from Postman/browser

---

## 🎉 You're Done!

Your app is now:
- ✅ Hosted on free platforms
- ✅ Accessible from anywhere
- ✅ Ready for submission

**Submission:**
1. Live URL (Vercel frontend)
2. Screenshots (as listed above)
3. Optional: GitHub repository link

---

## 💡 Tips

- Render free tier sleeps after 15 min inactivity (first request may be slow)
- Vercel has instant response (no sleep)
- Keep API keys secure, never commit to GitHub
- Use `.env.example` files as templates
- Test locally before deploying

Good luck! 🚀
