# Full Stack Intern (MERN) Assessment – User Management Application

## 📌 Project Overview

This project is a **Full Stack MERN (MongoDB, Express, React, Node.js) application** developed as part of the **Bits and Volts Pvt. Ltd. – Full Stack Intern Assessment**.

The application manages **user information** and demonstrates real‑world full‑stack development practices including CRUD operations, pagination, search, export functionality, clean architecture, and responsive UI design.

---

## 🧠 Features Implemented

### 🔹 Backend (Node.js + Express + MongoDB)

* ✅ **CRUD APIs** for user management (Add, Edit, Delete, View)
* ✅ **Pagination support** for user listing
* ✅ **Search API** (search by name, email, phone)
* ✅ **Export to CSV API**
* ✅ MongoDB schema designed using **Mongoose**
* ✅ Clean MVC‑style folder structure

### 🔹 Frontend (React + Material UI)

* ✅ **Responsive UI** (Mobile & Desktop)
* ✅ **3 Screens implemented**:

  1. Listing View Page (Table Screen)
  2. Add / Edit User Form Page
  3. View User Details Page
* ✅ **Multiple routing** using React Router
* ✅ **Component‑based architecture**
* ✅ **Form validation** (required fields, email, phone length, numeric age)
* ✅ **Search users from UI**
* ✅ **Export users to CSV from UI**
* ✅ **Pagination UI**
* ✅ **Success & Error notifications** using Material UI Snackbar

---

## 🗂️ Project Structure

```
full_stack_proj/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── routes/
    │   ├── services/
    │   ├── App.js
    │   └── index.js
    └── package.json
```

---

## ⚙️ Setup & Run Instructions

### 🔸 Prerequisites

* Node.js (v18+ recommended)
* MongoDB Community Server **or** MongoDB Atlas
* npm

---

### 🔹 Backend Setup

```bash
cd backend
npm install
npm start
```

Create a `.env` file inside `backend` folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/userdb
```

Backend will run at:

```
http://localhost:5000
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## 🌐 API Endpoints

| Method | Endpoint                 | Description               |
| ------ | ------------------------ | ------------------------- |
| POST   | /api/users               | Add user                  |
| GET    | /api/users?page=&limit=  | Get users with pagination |
| GET    | /api/users/:id           | Get user by ID            |
| PUT    | /api/users/:id           | Update user               |
| DELETE | /api/users/:id           | Delete user               |
| GET    | /api/users/search?query= | Search users              |
| GET    | /api/users/export        | Export users to CSV       |

---


## 🚀 Deployment

* **Frontend**: Deployed on Netlify
* **Backend**: Can be deployed on Render / Railway / Heroku

---

## ✅ Final Notes

This project strictly follows the guidelines mentioned in the assessment document and avoids all negative points such as inline styling, poor naming, or lack of componentization.

