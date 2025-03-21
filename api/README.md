# ClickNCount API 🚀

A robust NestJS backend API for the ClickNCount project, handling real-time click tracking with WebSocket support.

## 🔧 Technologies

This API is built with modern technologies:

- **NestJS:** A progressive Node.js framework
- **TypeScript:** For type-safe development
- **TypeORM:** ORM for database interactions
- **Socket.io:** For real-time WebSocket communication
- **Swagger/OpenAPI:** For API documentation
- **AsyncAPI:** For WebSocket documentation
- **MariaDB/MySQL:** As the database

> 📝 **Note:** For the exact versions of all dependencies, please refer to the `package.json` file.

## 📊 Features

- **RESTful Endpoints:** Standard HTTP API for click data
- **WebSocket Integration:** Real-time click tracking and broadcasting
- **Database Integration:** Persistent storage for click records
- **API Documentation:** Comprehensive documentation with Swagger UI
- **WebSocket Documentation:** AsyncAPI for real-time events
- **Health Check:** Endpoint for monitoring service health
- **Environmental Configuration:** Via dotenv for different deployment environments
- **CORS Support:** Cross-Origin Resource Sharing enabled

## 📡 API Endpoints

The API provides the following REST endpoints:

- `GET /clicks` - Retrieve all recorded clicks
- `GET /health` - Health check endpoint

## 🔌 WebSocket Events

The API supports the following WebSocket events:

- **Client -> Server:**

  - `click` - Register a new click (with optional auto-click flag)

- **Server -> Client:**
  - `click` - Response to a click event

## 🛠️ Development

### Prerequisites

- Node.js (refer to `.nvmrc` for version)
- npm package manager (refer to `package.json` for version)
- MariaDB/MySQL database

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables (refer to `.env.template` at project root)

3. Start the development server:
   ```bash
   npm run start:dev
   ```

### Build

To create a production build:

```bash
npm run build
```

### Running in Production

To run the API in production mode:

```bash
npm run start:prod
```

## 📚 Documentation

When the API is running, documentation is available at:

- REST API Documentation: http://localhost:3001/api-docs
- WebSocket Documentation: http://localhost:3001/asyncapi

## 🐳 Docker

The API can be run in a Docker container. The Dockerfile is configured to:

1. Build the application in a Node.js Alpine environment
2. Expose port 3001 for communication
3. Set up the necessary environment for running the NestJS application

## 🔒 Database

The API connects to a MariaDB database using TypeORM:

- Automatic schema generation and synchronization
- Entity-based data modeling
- Repository pattern for data access

## 🧪 Quality Assurance

The project enforces code quality with:

- TypeScript for type checking
- ESLint for code linting
- Prettier for code formatting

## 📝 Additional Information

For more information about the entire ClickNCount project, refer to the [main README](../README.md).
