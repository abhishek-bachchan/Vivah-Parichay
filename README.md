# Vivah Parichay — GitHub Hosting Guide

## Folder Structure
```
vivah-parichay/
├── index.html              ← Never edit this
├── biodata.config.js       ← Edit ALL your data here ✏️
├── README.md               ← This file
└── static/
    ├── photos/
    │   ├── main.jpg        ← Your main photo
    │   └── second.jpg      ← Second photo (flip back)
    ├── family/
    │   ├── father.jpg
    │   ├── mother.jpg
    │   ├── brother.jpg
    │   ├── dadaji.jpg
    │   ├── nanaji.jpg
    │   ├── uncle1.jpg
    │   ├── uncle2.jpg
    │   └── uncle3.jpg
    └── icons/
        ├── personal.jpg
        ├── work.jpg
        ├── education.jpg
        ├── family.jpg
        ├── about.jpg
        └── contact.jpg
```

---

## Step by Step — First Time Setup

### Step 1 — Create GitHub Account
1. Go to https://github.com
2. Click Sign Up
3. Choose a username (e.g. rahulsharma) — this becomes part of your URL
4. Verify email and complete signup

---

### Step 2 — Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Repository name: `vivah-parichay` (or any name you like)
3. Set to **Public** (required for free GitHub Pages)
4. ✅ Check **Add a README file**
5. Click **Create repository**

---

### Step 3 — Upload Your Files
1. Inside your new repo, click **Add file → Upload files**
2. Drag and drop ALL files and folders:
   - `index.html`
   - `biodata.config.js`
   - `static/` folder (with all subfolders)
3. Scroll down, write a commit message: `Add biodata files`
4. Click **Commit changes**

> TIP: GitHub lets you upload entire folders by dragging them.
> Drag the entire `static` folder in one go.

---

### Step 4 — Enable GitHub Pages
1. Go to your repo → **Settings** (top tab)
2. Scroll down to **Pages** in the left sidebar
3. Under **Source** → Select **Deploy from a branch**
4. Branch: **main** · Folder: **/ (root)**
5. Click **Save**

---

### Step 5 — Get Your Live Link
1. Wait 1-2 minutes
2. Refresh the Settings → Pages page
3. You'll see: **Your site is live at https://yourusername.github.io/vivah-parichay**
4. Share this link with anyone — they see the full biodata instantly

---

## Updating Your Data (After First Upload)

### Option A — Edit directly on GitHub (easiest)
1. Go to your repo on github.com
2. Click `biodata.config.js`
3. Click the **pencil icon** (Edit this file)
4. Change any value — name, dates, family details
5. Scroll down → **Commit changes**
6. Live link updates in ~60 seconds ✅

### Option B — Upload new photos
1. Go to your repo → `static/photos/` folder
2. Click **Add file → Upload files**
3. Upload your photo named exactly `main.jpg`
4. Commit changes
5. Done — photo appears on the live site

### Option C — Edit locally and push
If you have Git installed:
```bash
git clone https://github.com/yourusername/vivah-parichay
# edit biodata.config.js
git add .
git commit -m "Update family details"
git push
```

---

## How the Download Button Works
- Click **⬇ Export** in the topbar
- It downloads a self-contained HTML file
- All photos are baked in — works offline, on any device
- Share this file on WhatsApp or Google Drive
- Open it in any browser → print → Save as PDF

---

## Privacy Note
- Your biodata is **publicly accessible** to anyone with the link
- Do not put sensitive info like Aadhaar, PAN, or bank details
- Phone number is optional — you can remove it from config
- To make it private, upgrade to GitHub Pro (paid) for private repos with Pages

---

## Quick Edit Reference

Open `biodata.config.js` and change these values:

| What to change | Where in config |
|---|---|
| Name | `name:` |
| Date of birth | `dob:` |
| Caste / Gotra | `caste:` / `gotra:` |
| Job details | `jobs: [ { title, company, from, to, desc } ]` |
| Family names | `family: { father: { name, occ, photo } }` |
| Uncles | `uncles: [ { name, occ, photo } ]` |
| Contact | `phone:` / `email:` / `address:` |
| Photos | `photo1:` / `photo2:` (path to file in static/photos/) |
