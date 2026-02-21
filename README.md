# Mingun Kim CV Website (Node.js + Django DRF)

This project builds a CV website from the provided PDF using:
- Backend: Django + Django REST Framework
- Frontend: Node.js (native HTTP server) + vanilla JS

## Project Structure

- `backend/`: Django DRF API server
- `frontend/`: Node.js server and CV UI

## 1) Backend Setup

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

API endpoints:
- `GET http://localhost:8000/api/health/`
- `GET http://localhost:8000/api/cv/`

## 2) Frontend Setup

Open a new terminal:

```bash
cd frontend
npm run dev
```

Open:
- `http://localhost:3000`

The Node.js server proxies:
- `GET http://localhost:3000/api/cv` -> `GET http://localhost:8000/api/cv/`

Optional env var:
- `BACKEND_API_BASE=http://localhost:8000`

Example:

```bash
cd frontend
BACKEND_API_BASE=http://localhost:8000 npm run dev
```

## Notes

- CV data is defined in `backend/cv_profile/data.py`.
- To customize styling, edit `frontend/public/styles.css`.
