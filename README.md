# Lixo URL Shortener

A minimal, production-ready URL shortener built with Spring Boot and React.

## Tech Stack
- **Backend**: Java 17, Spring Boot, Spring Data JPA, PostgreSQL
- **Frontend**: React, Vite, Tailwind CSS, Lucide React
- **DevOps**: Docker, Docker Compose, GitHub Actions

## Setup Instructions

### Prerequisites
- Docker and Docker Compose installed

### Running Locally
1. Clone the repository.
2. Run `docker-compose up -d --build` from the root directory.
3. Access the frontend at `http://localhost:5173`.
4. The backend API is available at `http://localhost:8080`.

## API Endpoints

- `POST /api/shorten`: Shortens a URL. 
  - Body: `{ "url": "https://example.com" }`
- `GET /{code}`: Redirects to the original URL.
- `GET /api/stats/{code}`: Returns stats for a short code.

## CI/CD
This project includes a GitHub Actions workflow that automatically builds the application, runs tests, and publishes multi-architecture Docker images to Docker Hub upon pushing to the `main` branch.
