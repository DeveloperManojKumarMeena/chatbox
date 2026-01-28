# 💬 React Chat App (WhatsApp-like UI)

यह एक **Frontend-only Chat Application** है जो **React JS + Tailwind CSS** से बनाया गया है।  
इसका उद्देश्य WhatsApp जैसे chat flow, UI structure और React की real-world architecture को समझना है।

> ⚠️ Note:  
> यह app backend के बिना है (no database, no socket).  
> Future में इसमें Socket.io और backend easily add किया जा सकता है।

---

## 🚀 Features

- ✅ WhatsApp जैसी UI layout  
- ✅ Left Sidebar में Users list  
- ✅ Right Side में Chat Window  
- ✅ Sender & Receiver messages अलग-अलग style में  
- ✅ Message send functionality  
- ✅ Auto time stamp  
- ✅ React Context API का use  
- ✅ Fully component-based structure  
- ✅ Tailwind CSS for styling  

---

## 🛠️ Tech Stack

- **React JS** (Vite)
- **Tailwind CSS**
- **Context API**
- **JavaScript (ES6+)**

---

## 📁 Project Folder Structure

```
src/
│
├── components/
│ ├── Sidebar.jsx // User list (Left panel)
│ ├── ChatWindow.jsx // Selected chat window
│ ├── Message.jsx // Single message bubble
│ └── MessageInput.jsx // Input box + Send button
│
├── context/
│ └── ChatContext.jsx // Global state (chat logic)
│
├── data/
│ ├── users.js // Dummy users
│ └── chats.js // Dummy chat messages
│
├── App.jsx // App layout
├── main.jsx // Entry point
└── index.css // Tailwind styles

```
---

## 🧠 Project Architecture (How It Works)

### 1️⃣ ChatContext (Core Logic)

- Selected user store करता है
- Messages store करता है
- `sendMessage()` function provide करता है
- पूरे app में state share करता है

👉 यही WhatsApp-like apps का **real structure** होता है।

---

### 2️⃣ Sidebar (Left Panel)

- Users list show करता है
- User पर click करने से chat open होती है
- `setSelectedUser()` Context के through call होता है

---

### 3️⃣ ChatWindow (Main Area)

- Selected user का नाम show करता है
- Messages list render करता है
- नीचे MessageInput component होता है

---

### 4️⃣ Message Component

- Sender (`me`) → Right side  
- Receiver (`them`) → Left side  
- Tailwind classes से UI control होती है

---

### 5️⃣ MessageInput

- User message type करता है
- Send button से message Context में add होता है
- Input auto clear हो जाता है

---

## ▶️ How to Run the Project

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Start development server
```bash
npm run dev
```
### Step 3: Open browser
```bash
http://localhost:5173

```

### 📌 Important Notes (For Learning)

<li>यह project job-ready frontend structure follow करता है

<li>Context API का practical use समझने के लिए best example है

<li> Backend जोड़ना बहुत आसान रहेगा:

    Socket.io

    MongoDB

    Authentication

---
### 🔮 Future Improvements (Next Level)

<li>🔌 Real-time chat using Socket.io

<li>🔐 Login / Signup system

<li>🟢 Online / Offline status

<li>📱 Fully responsive (mobile view)

<li>💾 Database integration

---

### 👨‍💻 Author

**Manoj Kumar Meena** 
<p>Frontend / Full-Stack Developer (Learning Phase)
<p>This project is built for learning, practice, and interview preparation.
