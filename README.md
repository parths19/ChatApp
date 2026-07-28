<div align="center">

# 💬 ChatApp

**A real-time full-stack chat application with instant messaging, media sharing, and live online-status tracking.**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://chat-app-frontend-taupe-mu.vercel.app/)
[![Repo](https://img.shields.io/badge/github-repository-181717?style=for-the-badge&logo=github)](https://github.com/parths19/ChatApp)

React · Node.js · Express · MongoDB · Socket.IO

</div>

---

## ✨ Overview

ChatApp is a MERN-stack messaging application that lets users sign up, find other users, and chat with them in real time. Messages are pushed instantly over WebSockets via **Socket.IO**, images are uploaded and served through **Cloudinary**, and authentication is handled with **JWT**. The frontend is a **React 19 + Vite** single-page app styled with **Tailwind CSS**, and the backend is an **Express 5** REST API backed by **MongoDB**.

**🔗 Live App:** https://chat-app-frontend-taupe-mu.vercel.app/

---

## 🚀 Features

- 🔐 **User authentication** — signup/login with hashed passwords (bcrypt) and JWT-based sessions
- ⚡ **Real-time messaging** — instant text delivery powered by Socket.IO
- 🖼️ **Image sharing** — send photos in chat, uploaded and hosted via Cloudinary
- 🟢 **Online presence** — see which contacts are currently online, updated live
- ✅ **Seen/unread indicators** — messages are marked as seen, with unseen message counts per contact
- 👤 **Editable profiles** — update display name, bio, and profile picture
- 📱 **Responsive UI** — clean, mobile-friendly chat interface built with Tailwind CSS
- 🔔 **Toast notifications** — instant feedback for actions and errors via `react-hot-toast`

---

## 🛠️ Tech Stack

**Frontend (`/client`)**
| Tech | Purpose |
|---|---|
| React 19 | UI library |
| Vite | Build tool / dev server |
| React Router DOM | Client-side routing |
| Tailwind CSS 4 | Styling |
| Socket.IO Client | Real-time communication |
| Axios | HTTP requests |
| React Hot Toast | Notifications |

**Backend (`/server`)**
| Tech | Purpose |
|---|---|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database & ODM |
| Socket.IO | Real-time WebSocket server |
| JSON Web Token | Authentication |
| bcryptjs | Password hashing |
| Cloudinary | Image storage & delivery |
| dotenv / CORS | Configuration & security |

**Deployment:** Vercel (both frontend and backend are deployed as separate Vercel projects)

---

## 📁 Project Structure

```
ChatApp/
├── client/                 # React frontend
│   ├── context/            # AuthContext & ChatContext (global state)
│   ├── src/
│   │   ├── assets/         # Images & static assets
│   │   ├── components/     # Sidebar, ChatContainer, RightSidebar
│   │   ├── pages/          # HomePage, LoginPage, ProfilePage
│   │   └── lib/            # Utility helpers
│   └── vercel.json
│
└── server/                  # Express backend
    ├── controllers/        # userController, messageController
    ├── models/             # User, Message (Mongoose schemas)
    ├── routes/              # userRoutes, messageRoutes
    ├── middleware/          # JWT auth middleware
    ├── lib/                 # db, cloudinary, token utils
    ├── server.js            # App entry point + Socket.IO setup
    └── vercel.json
```

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- A [MongoDB](https://www.mongodb.com/atlas) database (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)

### 1. Clone the repository
```bash
git clone https://github.com/parths19/ChatApp.git
cd ChatApp
```

### 2. Set up the backend
```bash
cd server
npm install
```

Create a `.env` file inside `/server`:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Run the server:
```bash
npm run server   # starts with nodemon (auto-reload)
# or
npm start        # standard start
```
The API will run at `http://localhost:4000`.

### 3. Set up the frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `/client`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Run the frontend:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 🔌 API Reference

**Base URL:** `/api`

### Auth Routes — `/api/auth`
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/signup` | Register a new user | No |
| POST | `/login` | Log in a user | No |
| GET | `/check` | Verify current session / fetch user | Yes |
| PUT | `/update-profile` | Update profile (name, bio, picture) | Yes |

### Message Routes — `/api/messages`
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | `/users` | Get all users for the sidebar + unseen counts | Yes |
| GET | `/:id` | Get chat history with a specific user | Yes |
| PUT | `/mark/:id` | Mark a specific message as seen | Yes |
| POST | `/send/:id` | Send a message (text and/or image) to a user | Yes |

### Realtime Events (Socket.IO)
| Event | Direction | Description |
|---|---|---|
| `connection` | client → server | Registers the connected user by `userId` |
| `getOnlineUsers` | server → client | Broadcasts the list of currently online users |
| `newMessage` | server → client | Pushes a new incoming message to the receiver |

---

## 🌐 Deployment

Both the client and server include `vercel.json` configs and are deployed independently on **Vercel**:
- **Frontend:** https://chat-app-frontend-taupe-mu.vercel.app/
- **Backend:** Deployed as a separate Vercel project (serverless Node function), with `VITE_BACKEND_URL` on the frontend pointing to it.

Make sure to configure the same environment variables listed above in your Vercel project settings for the server deployment.

---

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add some feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is currently unlicensed. 

---

<div align="center">

Made with ❤️ by [parths19](https://github.com/parths19)

</div>
