# Clothing Website

A full-stack clothing and fashion web application with a React/Vite frontend and an Express/MongoDB backend. The app includes product browsing, cart and favorites flows, user authentication, profile questions, wardrobe features, card handling, and a virtual try-on area.

## Showcase

<p align="center">
  <img src="frontend/src/assets/banner.jpg" alt="Clothing website banner" width="100%" />
</p>

| Landing Page | Footer | Products |
| --- | --- | --- |
| <img src="frontend\src\assets\home.png" alt="Fashion hero image" width="260" /> | <img src="frontend\src\assets\footer.png" alt="Dress product showcase" width="260" /> | <img src="frontend\src\assets\products.png" alt="Bag product showcase" width="260" /> |

| wardrobe |  Brand |
| --- | --- |
| <img src="frontend\src\assets\wardrobe_read.png" alt="Shoe product showcase" width="260" /> | <img src="frontend/src/assets/fitfusion.png" alt="FitFusion brand logo" width="260" /> |

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, DaisyUI, AOS, Three.js
- Backend: Node.js, Express, MongoDB, Mongoose
- Tooling: ESLint, Docker, Docker Compose

## Project Structure

```text
.
+-- backend/          # Express API, MongoDB models, routes, controllers, uploads
+-- frontend/         # React/Vite application
+-- compose.yaml      # Production-style container composition
`-- README.md
```

## Prerequisites

- Node.js 20 or newer
- npm
- MongoDB connection string, either local or MongoDB Atlas

## Environment Variables

Create environment files from the examples before running the app:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Backend variables:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://username:password@cluster.example.mongodb.net/database-name
```

Frontend variables:

```env
VITE_API_URL=http://localhost:5000
```

## Local Development

Install dependencies:

```bash
cd backend
npm install

cd ../frontend
npm install
```

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

The frontend runs at `http://localhost:5173` by default, and the backend runs at `http://localhost:5000`.

## Available Scripts

Backend:

- `npm start` - run the Express server with Node
- `npm run dev` - run the Express server with Nodemon

Frontend:

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Docker

The root `compose.yaml` uses published images from GitHub Container Registry and Watchtower for automatic updates. Make sure the required `.env` files exist before starting the services.

```bash
docker compose up -d
```

## Notes

- Uploaded product and profile images live under `backend/Uploads` and `backend/upload`.
- Keep secrets such as MongoDB credentials in `.env` files. They are ignored by Git.
- If frontend API calls fail in local development, confirm `VITE_API_URL` matches the backend URL and `CLIENT_URL` matches the frontend URL.
