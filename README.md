# Sapna Portfolio (Full Stack)

Production-ready personal portfolio with React + Tailwind frontend and Node.js + Express + MongoDB backend.

## Tech Stack
- Frontend: React.js, Tailwind CSS, Vite
- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose)

## Project Structure
```text
portfolio-fullstack/
  frontend/
    public/
    src/
      components/
      data/
      App.jsx
      main.jsx
      index.css
    package.json
    .env.example
  backend/
    config/
    controllers/
    middleware/
    models/
    routes/
    validators/
    server.js
    package.json
    .env.example
```

## Features
- Modern, clean, card-based UI (Airbnb-inspired)
- Fully responsive design
- Smooth scrolling and section animations
- Dark/Light mode toggle
- Portfolio sections: Home, About, Skills, Projects, Education, Achievements, Contact
- Resume download button
- Social links (GitHub + LinkedIn)
- Contact form integrated with backend REST API
- Input validation and centralized error handling
- MongoDB message storage

## Local Setup
### 1) Clone and open project
```bash
git clone <your-repo-url>
cd portfolio-fullstack
```

### 2) Setup backend
```bash
cd backend
npm install
copy .env.example .env
```
Update `.env` values if needed:
- `PORT=5000`
- `MONGO_URI=your_mongodb_connection_string`
- `CLIENT_URL=http://localhost:5173`

Run backend:
```bash
npm run dev
```

### 3) Setup frontend
Open a new terminal:
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```
Frontend runs on `http://localhost:5173` and calls backend at `http://localhost:5000/api`.

## API
### POST `/api/contact`
Request body:
```json
{
  "name": "Sapna",
  "email": "sapna@example.com",
  "subject": "Internship Opportunity",
  "message": "I would like to discuss a role..."
}
```

## Deployment Notes
### Frontend (Vercel / Netlify)
- Set env variable: `VITE_API_BASE_URL=https://your-backend-domain/api`
- Build command: `npm run build`
- Output directory: `dist`

### Backend (Render / Railway)
- Set env variables from `.env`
- Start command: `npm start`
- Ensure MongoDB Atlas URI is accessible from deployed backend
- Set `CLIENT_URL` to your deployed frontend URL

## Important
- Replace `frontend/public/Sapna_Resume.pdf` with your real PDF resume.
- Update LinkedIn URL in `frontend/src/App.jsx`.
- Update project links in `frontend/src/data/portfolioData.js` with your actual repositories and demos.
