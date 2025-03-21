# ClickNCount 🖱️

A dockerized real-time clicker project.

## 🌟 Introduction

ClickNCount is a MVP (Minimum Viable Product) that allows users to click a button to increment a counter in real-time. This simple application also includes an auto-click feature.

The project is fully dockerized and consists of two main parts:

- A **Backend API** developed with NestJS 🚀
- A **Frontend App** developed with React ⚛️

## 📁 Project Structure

```
.
├── api/                # NestJS API (backend)
├── app/                # React Application (frontend)
├── docker-compose.yml  # Docker Compose configuration
└── .env                # Environment variables (not versioned)
```

## 🚀 Quick Start

1. Clone the repository
2. Copy the `.env.template` file to `.env`
   ```bash
   cp .env.template .env
   ```
3. Launch with Docker Compose:
   ```bash
   docker-compose up
   ```
4. Access the application at http://localhost:3000

## 📚 Detailed Documentation

For more details on each component of the project, please consult the specific READMEs:

- [API Documentation](./api/README.md)
- [App Documentation](./app/README.md)

These documents contain detailed information about the architecture, technologies used, and development procedures for each part of the project.
