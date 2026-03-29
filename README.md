# Sapna Portfolio (Full Stack)

Personal portfolio website built with React + Tailwind (frontend) and Node.js + Express + MongoDB (backend).

## Live Links
- Frontend: `https://sapna-portfolio.vercel.app`
- Backend API base: `https://sapna-portfolio-backend.onrender.com/api`
- Health check: `https://sapna-portfolio-backend.onrender.com/api/health`

Note: `https://sapna-portfolio-backend.onrender.com/` can show `Not Found` because root (`/`) route is not defined. Use `/api/health` to test backend.

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
  render.yaml
```

## Features
- Responsive portfolio UI (mobile/tablet/desktop)
- Dark/Light mode toggle
- Sections: Home, About, Skills, Projects, Education, Achievements, Contact
- Social links (GitHub, LinkedIn)
- Contact form connected to backend API
- Validation and centralized error handling
- Messages stored in MongoDB

## Run Locally

### 1) Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

Backend `.env`:
- `PORT=5000`
- `MONGO_URI=<your_mongodb_connection_string>`
- `CLIENT_URL=http://localhost:5173`

### 2) Frontend
Open new terminal:
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend `.env`:
- `VITE_API_BASE_URL=http://localhost:5000/api`

Open: `http://localhost:5173`

## API

### GET `/api/health`
Returns API status.

### POST `/api/contact`
Request body:
```json
{
  "name": "Sapna",
  "email": "sapna@example.com",
  "subject": "Internship Opportunity",
  "message": "I would like to connect with you."
}
```

## Deployment (Render + Vercel)

### Backend (Render)
1. Create service from this repo using `render.yaml`.
2. Set env:
   - `MONGO_URI=<atlas_uri>`
   - `CLIENT_URL=https://sapna-portfolio.vercel.app`
3. Deploy.

### Frontend (Vercel)
1. Import same repo.
2. Set root directory: `frontend`.
3. Set env:
   - `VITE_API_BASE_URL=https://sapna-portfolio-backend.onrender.com/api`
4. Deploy.

## Notes
- Replace `frontend/public/Sapna_Resume.pdf` when your real resume is ready.
- Update project links in `frontend/src/data/portfolioData.js` as needed.
