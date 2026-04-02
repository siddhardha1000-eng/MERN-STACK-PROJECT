# Taskify - MERN Stack To-Do Application

A full-stack task management application built with MongoDB, Express.js, React.js, and Node.js.

## Project Structure

```
taskify/
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema with bcrypt hashing
│   │   └── Task.js          # Task schema with priority/category
│   ├── routes/
│   │   ├── authRoutes.js    # Register & Login endpoints
│   │   └── taskRoutes.js    # CRUD task endpoints
│   ├── middleware/
│   │   └── authMiddleware.js # JWT verification middleware
│   ├── .env                  # Environment variables
│   ├── server.js             # Express app entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── context/
│   │   │   └── AuthContext.js  # Global auth state (React Context)
│   │   ├── components/
│   │   │   └── Navbar.js       # Navigation bar
│   │   ├── pages/
│   │   │   ├── Home.js         # Landing page
│   │   │   ├── Register.js     # Registration form
│   │   │   ├── Login.js        # Login form
│   │   │   └── Dashboard.js    # Task management dashboard
│   │   ├── App.js              # Root component with routing
│   │   ├── index.js            # React entry point
│   │   └── index.css           # Global styles
│   └── package.json
│
└── README.md
```

## Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or above) - https://nodejs.org
- **MongoDB** (v5 or above, running locally) - https://www.mongodb.com/try/download/community
- **npm** (comes with Node.js)

## Setup & Run Instructions

### Step 1: Start MongoDB

Make sure MongoDB is running on your machine:
```bash
# On Windows (if installed as a service, it may already be running)
# Or run manually:
mongod

# On macOS/Linux:
sudo systemctl start mongod
# or
brew services start mongodb-community
```

Verify MongoDB is running at `mongodb://localhost:27017`

---

### Step 2: Setup & Start the Backend

```bash
# Navigate to backend folder
cd taskify/backend

# Install dependencies
npm install

# Start the server (production)
npm start

# OR start with auto-reload (development)
npm run dev
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:5000
```

---

### Step 3: Setup & Start the Frontend

Open a **new terminal window**:

```bash
# Navigate to frontend folder
cd taskify/frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The app will open automatically at **http://localhost:3000**

---

## API Endpoints

### Auth Routes (no token required)
| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | /api/auth/register   | Register new user   |
| POST   | /api/auth/login      | Login & get token   |

### Task Routes (JWT token required)
| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /api/tasks         | Get all user tasks  |
| POST   | /api/tasks         | Create new task     |
| PUT    | /api/tasks/:id     | Update a task       |
| DELETE | /api/tasks/:id     | Delete a task       |

---

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React.js, React Router  |
| Backend   | Node.js, Express.js     |
| Database  | MongoDB, Mongoose       |
| Auth      | JWT, bcryptjs           |
| Styling   | Custom CSS (glassmorphism) |

## Features
- User Registration & Login with JWT authentication
- Passwords encrypted with bcrypt (salt rounds: 10)
- Create, Read, Update, Delete tasks
- Filter tasks by status (All / Pending / Done / High Priority)
- Task priority levels: High, Medium, Low
- Due date and category support
- Responsive glassmorphism dark UI
- Persistent login via localStorage
