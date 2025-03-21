# ClickNCount Frontend App ⚛️

A modern React application for the ClickNCount project that allows users to click a button and track their clicks in real-time.

## 🚀 Technologies

This application leverages modern front-end technologies and libraries:

- **React:** A JavaScript library for building user interfaces
- **TypeScript:** Adds static typing to JavaScript
- **Vite:** Next generation frontend tooling
- **TanStack Router:** Type-safe routing for React applications
- **Socket.io Client:** Real-time bidirectional event-based communication
- **Tailwind CSS:** A utility-first CSS framework
- **Radix UI:** Components like Progress, Switch, and Slot for accessible UI elements
- **Sonner:** An opinionated toast component for React
- **OpenAPI Fetch:** Type-safe API client generated from OpenAPI schema

> 📝 **Note:** For the exact versions of all dependencies, please refer to the `package.json` file.

## ✨ Features

- **Real-time Click Counter:** Instantly updates the counter when a button is clicked
- **Auto-Click Functionality:** Toggle automatic clicking at regular intervals
- **TypeScript Integration:** Full type safety throughout the application
- **OpenAPI Integration:** Auto-generated TypeScript types from the backend API
- **Modern UI Components:** Utilizes Radix UI and Tailwind CSS for a beautiful UI
- **Toast Notifications:** User feedback via toast messages

## 🔄 Real-time Communication

The application uses Socket.io to establish a WebSocket connection with the backend, enabling:

- Real-time counter updates
- Instant feedback on click actions
- Auto-click functionality synchronization

## 🔗 API Integration

The app uses a type-safe API client generated from the OpenAPI specification:

- Automatic type generation from OpenAPI schema
- Type-safe HTTP requests
- Error handling middleware

## 🛠️ Development

### Prerequisites

- Node.js (refer to `.nvmrc` for version)
- npm package manager (refer to `package.json` for version)

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```
   This will:
   - Generate API types from the OpenAPI specification
   - Start the Vite development server

### Build

To create a production build:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run serve
```

## 🧪 Testing

Run tests with:

```bash
npm run test
```

## 🐳 Docker

The application can be run in a Docker container. The Dockerfile is configured to:

1. Build the application in a Node.js environment
2. Serve the built assets using a lightweight Nginx server

## 🔍 Code Quality

The project uses:

- TypeScript for type checking
- ESLint for code linting
- Prettier for code formatting

## 📝 Additional Information

For more information about the entire ClickNCount project, refer to the [main README](../README.md).
