# Job-Candidate Matching System

## Project Overview
A full-stack application that implements a job-candidate matching system using vector similarity in PostgreSQL. The system uses NextJS for the frontend, NestJS for the backend, and PostgreSQL with pgvector extension for vector-based similarity matching.

## Key Features
- Vector-based similarity matching for job-candidate pairing
- Mock embedding generation for jobs and candidates
- Top 3 candidate matching system
- Simple and intuitive user interface

## Prerequisites
- Node.js (latest version)
- npm or yarn
- Git
- PostgreSQL with pgvector extension (deployed on AWS)

## Project Structure
```
candidate_demo_app/
├── frontend/         # NextJS frontend application
├── backend/         # NestJS backend application with PostgreSQL
├── package.json     # Root level dependencies with concurrent scripts
└── .gitignore      # Git ignore rules
```

## API Endpoints
- `POST /jobs`: Add new job postings
- `POST /candidates`: Add new candidate profiles
- `POST /match`: Find top 3 matching candidates for a job

## Database Schema
The PostgreSQL database includes:
- pgvector extension for vector operations
- Jobs table with vector embeddings
- Candidates table with vector embeddings
- Cosine similarity-based matching queries

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd candidate_demo_app
   ```

2. **Install All Dependencies**
   ```bash
   # This will install dependencies for root, frontend, and backend
   npm run install:all
   ```

3. **Environment Setup**
   Create `.env` file in backend directory:
   ```env
   # AWS PostgreSQL Database Credentials
   DATABASE_URL= postgres://username:password@host:port/database
   
   ```

4. **Development Mode**
   ```bash
   # Run both frontend and backend in development mode
   npm run dev

   # Run only backend in development mode
   npm run dev:backend

   # Run only frontend in development mode
   npm run dev:frontend
   ```

5. **Production Build**
   ```bash
   # Build both applications
   npm run build

   # Build backend only
   npm run build:backend

   # Build frontend only
   npm run build:frontend
   ```

6. **Production Start**
   ```bash
   # Start both applications in production mode
   npm run start

   # Start backend only
   npm run start:backend

   # Start frontend only
   npm run start:frontend
   ```

## Access Points
- Frontend Development: http://localhost:3000
- Backend Development: http://localhost:4000

## Implementation Details
- Mock embedding generation for jobs and candidates
- Vector similarity matching using pgvector
- Cosine similarity for finding the best matches
- Simple and responsive UI for job and candidate management

## Deployment
- Frontend is deployed on Vercel
- Backend API endpoints are configured to work with the deployed frontend
- PostgreSQL database is hosted on AWS

## Scripts Overview
Root level scripts available:
- `install:all`: Install dependencies for all applications
- `dev`: Run both frontend and backend in development mode
- `dev:backend`: Run backend in development mode
- `dev:frontend`: Run frontend in development mode
- `build`: Build both applications for production
- `build:backend`: Build backend for production
- `build:frontend`: Build frontend for production
- `start`: Start both applications in production mode
- `start:backend`: Start backend in production mode
- `start:frontend`: Start frontend in production mode

## Notes
- The system uses mock embeddings instead of real ML models
- Database credentials are required for PostgreSQL connection
- Environment variables are gitignored for security
- Concurrent execution is handled by concurrently package
