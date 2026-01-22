# Real Estate Management System

A Full-stack real estate management project, featuring web applications for Tenants and Managers.

## 📋 Introduction

The system provides features for managing property portfolios, processing lease applications, managing tenant profiles, and intuitive property search utilities via maps.

## 🛠️ Tech Stack

The project is divided into 2 main parts: Client and Server.

### Client (Frontend)
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS, Shadcn UI (Radix UI)
- **Authentication:** AWS Amplify
- **Maps:** Mapbox GL
- **Forms:** React Hook Form, Zod
- **Others:** Framer Motion, FilePond

### Server (Backend)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL (with PostGIS extension for geospatial data)
- **Middleware:** Helmet, Morgan, Cors
- **File Storage:** AWS S3 (via SDK)

### Infrastructure
- **Docker:** To run the PostgreSQL database and Adminer.

## 🚀 Installation Guide

### 1. System Requirements
- Node.js (v20+ recommended)
- Docker & Docker Compose
- NPM or Yarn

### 2. Database Initialization

Use Docker Compose to initialize the PostgreSQL database and Adminer:

```bash
docker-compose up -d
```
The database will run on port `5432`.
Adminer (DB UI manager) will run at `http://localhost:8080`.

### 3. Server Installation

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory based on your database configuration (example):
```env
PORT=3001
DATABASE_URL="postgresql://root:1@localhost:5432/estate?schema=public"
# Other environment variables (AWS, JWT secret,...)
```

Run migrations and seed sample data:
```bash
npx prisma migrate dev
npm run seed
```

Start the server (Development mode):
```bash
npm run dev
```
The server will run at `http://localhost:3001`.

### 4. Client Installation

Open a new terminal, navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

Create a `.env.local` file in the `client/` directory:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
# Environment variables for AWS Amplify, Mapbox...
```

Start the application (Development mode):
```bash
npm run dev
```
The application will run at `http://localhost:3000`.

## 📂 Project Structure

```
real-estate/
├── client/                 # Frontend Source Code (Next.js)
│   ├── src/
│   │   ├── app/            # Pages & Routing
│   │   ├── components/     # UI Components
│   │   ├── state/          # Redux Store & API
│   │   └── ...
├── server/                 # Backend Source Code (Express)
│   ├── src/
│   │   ├── controllers/    # Logic Controllers
│   │   ├── routes/         # API Routes Definitions
│   │   └── ...
│   ├── prisma/             # Schema & Seed data
│   └── seedData/           # JSON Sample Data
└── compose.yml             # Docker config for DB
```

## 📝 Scripts

### Server
- `npm run dev`: Run server in watch mode.
- `npm run build`: Build TypeScript to JavaScript.
- `npm run start`: Run server from build.
- `npm run seed`: Seed sample data into the database.
- `npm run prisma:generate`: Generate Prisma Client.

### Client
- `npm run dev`: Run Next.js in dev mode.
- `npm run build`: Build Next.js application.
- `npm run start`: Run production application.
