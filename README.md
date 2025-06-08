# Full Stack Project

This is a full-stack web application built with Go (Golang) for the backend and React with TypeScript for the frontend.

## Project Structure

```
.
├── backend-golang/     # Go backend application
└── frontend-react-ts/  # React + TypeScript frontend application
```

## Backend (Go)

The backend is built using Go and follows a clean architecture pattern.

### Prerequisites

- Go 1.x or higher
- Air (for hot reloading)

### Setup and Installation

1. Navigate to the backend directory:
   ```bash
   cd backend-golang
   ```

2. Install dependencies:
   ```bash
   go mod download
   ```

3. Run the application:
   ```bash
   air
   ```

The server will start on `http://localhost:8080` by default.

### Project Structure

- `controllers/` - Request handlers
- `models/` - Database models
- `routes/` - API routes
- `middlewares/` - HTTP middlewares
- `database/` - Database configuration
- `config/` - Application configuration
- `helpers/` - Utility functions
- `structs/` - Data structures

## Frontend (React + TypeScript)

The frontend is built using React with TypeScript and Vite as the build tool.

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Setup and Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend-react-ts
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The development server will start on `http://localhost:5173` by default.

### Project Structure

- `src/` - Source code
- `public/` - Static assets
- `index.html` - Entry HTML file
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite configuration

## Development

### Backend Development

The backend uses Air for hot reloading during development. Any changes to the Go files will automatically trigger a rebuild.

### Frontend Development

The frontend uses Vite for fast development with hot module replacement (HMR). Any changes to the React components will be reflected immediately in the browser.

## Building for Production

### Backend

```bash
cd backend-golang
go build -o main
```

### Frontend

```bash
cd frontend-react-ts
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details. 