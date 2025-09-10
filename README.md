# MERN Stack Application

This is a full-stack **MERN (MongoDB, Express, React, Node.js)** application with token-based authentication (access and refresh tokens). It includes both the backend server and frontend client code to demonstrate a complete full-stack workflow.

---

## 🧰 Tech Stack

- **MongoDB** – NoSQL database
- **Express.js** – Backend framework
- **React.js** – Frontend library
- **Node.js** – JavaScript runtime

---

## 🚀 Getting Started

Follow these steps to get the project running locally.

### 🔧 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/salman9802/AI-Note-Taking-App.git
cd AI-Note-Taking-App
```

2. **Install both client and server dependencies from root of the project:**

```bash
npm run install:all
```

3. **Generate prisma client locally:**

```bash
npm run build:prisma
```

3. **Set up environment variables:**

A `.env.example` file is included in the root of this project. Copy it and rename it to `.env`:

```bash
cp .env.example .env
```

Then fill in the appropriate values. See the explanation below.

---

## ⚙️ Environment Variables Explained

Here’s a breakdown of what each variable in the `.env` file does:

| Variable               | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| `NODE_ENV`             | Set to `"development"` during development or `"production"` when deployed. |
| `COOKIE_SECRET`        | A secret key used to sign cookies (for secure cookie-based sessions).      |
| `REFRESH_TOKEN_SECRET` | Secret used to sign and verify JWT refresh tokens.                         |
| `ACCESS_TOKEN_SECRET`  | Secret used to sign and verify JWT access tokens.                          |
| `DATABASE_URL`         | MongoDB connection string (e.g., from MongoDB Atlas).                      |
| `HF_TOKEN`             | Hugging Face API token for using their models or services.                 |

---

## 💻 Running the Application Locally

### Start both client and server

```bash
npm run dev:all
```

- Server Runs on: `http://localhost`
- Client Runs on: `http://localhost:5173`
- Make sure MongoDB database is accessible via `DATABASE_URL`.

---

## 📁 Project Structure

```
/
├───client
│   ├───dist
│   │   └───assets
│   ├───public
│   └───src
│       ├───api
│       ├───assets
│       ├───components
│       │   └───ui
│       ├───context
│       ├───lib
│       └───pages
│           └───layouts
└───server
    ├───dist
    │   ├───constants
    │   ├───controllers
    │   ├───db
    │   ├───lib
    │   ├───middlewares
    │   ├───routers
    │   └───services
    ├───generated
    │   └───prisma
    │       └───runtime
    ├───prisma
    └───src
        ├───constants
        ├───controllers
        ├───db
        ├───lib
        ├───middlewares
        ├───routers
        ├───services
        └───types
```

---
