# 📁 Project File Guide

This document explains what each file does and whether you need to modify it.

---

## 🎯 Files You MUST Edit

### 1. `backend/.env`
**What it does:** Stores your API key and configuration  
**Action required:** ✏️ **EDIT THIS FILE**  
**How to create:**
```bash
cd backend
copy .env.example .env
```
Then edit `.env` and add your Groq or OpenAI API key.

**Example:**
```env
GROQ_API_KEY=gsk_your_actual_api_key_here
GROQ_API_BASE=https://api.groq.com/openai/v1
PORT=5000
```

---

## 📄 Files You Can Read (No Editing Needed)

### Backend Files

#### `backend/server.js`
**What it does:** Main Express server with API endpoints  
**Endpoints:**
- `GET /` - Health check
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Send message & get AI response
- `DELETE /api/messages` - Clear all messages

**You can:** Read to understand API structure  
**No need to edit:** Works out of the box

#### `backend/database.js`
**What it does:** SQLite database operations  
**Functions:**
- Creates `messages` table
- Saves new messages
- Retrieves all messages
- Clears messages

**You can:** Read to understand database structure  
**No need to edit:** Handles all database operations

#### `backend/aiService.js`
**What it does:** Integrates with AI APIs (Groq/OpenAI)  
**Features:**
- Sends conversation to AI
- Gets AI response
- Handles errors gracefully

**You can:** Read to understand AI integration  
**No need to edit:** Works with multiple providers

#### `backend/package.json`
**What it does:** Lists all backend dependencies  
**Dependencies:**
- express - Web server
- cors - Cross-origin requests
- better-sqlite3 - Database
- openai - AI client
- dotenv - Environment variables

**You can:** Read to see what's installed  
**No need to edit:** Already configured

---

### Frontend Files

#### `frontend/src/App.js`
**What it does:** Main React component for chat UI  
**Features:**
- Fetches messages on load
- Sends messages to backend
- Displays conversation
- Handles loading & errors

**You can:** Read to understand React code  
**Optional edit:** Change API_URL if needed (already configured)

#### `frontend/src/App.css`
**What it does:** Styles for chat interface  
**Features:**
- Modern gradient design
- Message bubbles
- Animations
- Responsive layout

**You can:** Read and customize colors/styles if desired  
**No need to edit:** Looks great by default

#### `frontend/src/index.js`
**What it does:** React entry point  
**You can:** Read for structure  
**No need to edit:** Standard React setup

#### `frontend/src/index.css`
**What it does:** Global styles and background  
**You can:** Read and customize if desired  
**No need to edit:** Provides nice gradient background

#### `frontend/public/index.html`
**What it does:** HTML template for React app  
**You can:** Read for structure  
**No need to edit:** Standard React template

#### `frontend/package.json`
**What it does:** Lists all frontend dependencies  
**Dependencies:**
- react - UI library
- react-dom - React rendering
- react-scripts - Build tools

**You can:** Read to see what's installed  
**No need to edit:** Already configured

---

## 📚 Documentation Files (Reading Material)

### `README.md`
**Purpose:** Complete project documentation  
**Contains:**
- Full setup instructions
- Technology stack
- API documentation
- Troubleshooting guide
- Deployment instructions

**Action:** 📖 Read this first for overview

### `QUICKSTART.md`
**Purpose:** 5-minute quick setup guide  
**Contains:**
- Fast setup steps
- Minimal commands
- Quick testing

**Action:** 📖 Use this for fastest setup

### `DEPLOYMENT.md`
**Purpose:** Step-by-step deployment guide  
**Contains:**
- Render.com setup
- Vercel setup
- Troubleshooting
- Alternative platforms

**Action:** 📖 Read when ready to deploy

### `TESTING.md`
**Purpose:** Complete testing procedures  
**Contains:**
- 15 different tests
- Screenshot instructions
- Success criteria
- Common issues

**Action:** 📖 Follow for thorough testing

### `ASSIGNMENT_SUMMARY.md`
**Purpose:** Assignment overview and deliverables  
**Contains:**
- Requirements checklist
- Features implemented
- Submission items
- Project status

**Action:** 📖 Read for submission prep

### `CHECKLIST.md`
**Purpose:** Step-by-step completion tracker  
**Contains:**
- All tasks listed
- Checkboxes for progress
- Submission checklist

**Action:** ✅ Use this to track progress

---

## 🚫 Files You Should NOT Edit

### Configuration Files

#### `.gitignore` (multiple locations)
**What it does:** Tells git which files to ignore  
**Why not edit:** Protects sensitive data from being committed

#### `backend/render.yaml`
**What it does:** Configuration for Render.com deployment  
**Why not edit:** Optimized for Render platform

#### `frontend/vercel.json`
**What it does:** Configuration for Vercel deployment  
**Why not edit:** Optimized for Vercel platform

---

## 📋 Template Files (Use as Reference)

### `backend/.env.example`
**What it does:** Template for your `.env` file  
**Action:** Copy this to create `.env`, then edit the copy

### `frontend/.env.example`
**What it does:** Template for production frontend config  
**Action:** Reference this when deploying to Vercel

---

## 🛠️ Utility Files

### `setup.ps1`
**What it does:** Automated setup script for Windows PowerShell  
**How to use:**
```powershell
powershell -ExecutionPolicy Bypass -File setup.ps1
```
**Action:** Run this for automatic installation

---

## 🗄️ Files Created at Runtime

### `backend/chat.db`
**What it does:** SQLite database file (created automatically)  
**When created:** After first message is sent  
**Contains:** All chat messages  
**Action:** Don't delete while testing. Can view with DB Browser for SQLite

### `backend/node_modules/`
**What it does:** Contains all installed backend packages  
**When created:** After `npm install`  
**Action:** Don't edit or commit to git

### `frontend/node_modules/`
**What it does:** Contains all installed frontend packages  
**When created:** After `npm install`  
**Action:** Don't edit or commit to git

### `frontend/build/`
**What it does:** Production build of frontend (created by `npm run build`)  
**When created:** When running build command or deploying  
**Action:** Don't commit to git. Used for deployment

---

## 📊 File Modification Summary

| File | Action | Priority |
|------|--------|----------|
| `backend/.env` | ✏️ **MUST EDIT** | 🔴 Critical |
| `backend/server.js` | 📖 Read only | ✅ Working |
| `backend/database.js` | 📖 Read only | ✅ Working |
| `backend/aiService.js` | 📖 Read only | ✅ Working |
| `frontend/src/App.js` | 📖 Read (optional edit) | ✅ Working |
| `frontend/src/App.css` | 🎨 Optional styling | ✅ Working |
| All `.md` files | 📖 Read for guidance | 📚 Docs |
| `.gitignore` files | 🚫 Don't edit | 🔒 Protected |

---

## 🎯 Quick Start File Priority

**For fastest setup, focus on these files in order:**

1. **Read:** `QUICKSTART.md` (5 minutes)
2. **Edit:** `backend/.env` (add your API key)
3. **Run:** `setup.ps1` or manual npm install
4. **Read:** `TESTING.md` (for testing)
5. **Read:** `DEPLOYMENT.md` (when ready to deploy)

---

## 🔍 Where to Find Things

**Setup instructions:**
→ `QUICKSTART.md` or `README.md`

**API key setup:**
→ `backend/.env.example` (template)  
→ `README.md` (instructions)

**API endpoints:**
→ `backend/server.js` (code)  
→ `README.md` (documentation)

**Database structure:**
→ `backend/database.js` (code)  
→ `README.md` (documentation)

**UI styling:**
→ `frontend/src/App.css`  
→ `frontend/src/index.css`

**Deployment steps:**
→ `DEPLOYMENT.md` (detailed guide)  
→ `README.md` (overview)

**Testing procedures:**
→ `TESTING.md` (complete guide)

**Progress tracking:**
→ `CHECKLIST.md`

**Assignment requirements:**
→ `ASSIGNMENT_SUMMARY.md`

---

## 💡 Tips

### Do:
✅ Read `README.md` for complete understanding  
✅ Edit only `backend/.env` with your API key  
✅ Use `CHECKLIST.md` to track progress  
✅ Follow `TESTING.md` for thorough testing  
✅ Keep `.env` file secret (don't share)  

### Don't:
❌ Edit configuration files unnecessarily  
❌ Commit `.env` to GitHub  
❌ Delete `node_modules` while running  
❌ Modify `package.json` unless you know why  
❌ Change database structure without understanding  

---

## 🆘 If Something Goes Wrong

### Backend won't start:
1. Check `backend/.env` exists and has valid API key
2. Check terminal for specific error
3. See `README.md` troubleshooting section

### Frontend won't connect:
1. Verify backend is running
2. Check `frontend/src/App.js` API_URL
3. See browser console for errors

### Database issues:
1. Check if `backend/chat.db` exists
2. Check file permissions
3. Try deleting `chat.db` and restarting

---

**Remember:** Most files work perfectly as-is. Only `backend/.env` needs your API key!

For detailed help, see `README.md` or `TESTING.md`.
