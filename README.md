# Mathura Express Monorepo

This repository is a monorepo that contains both the frontend and backend for the Mathura Express application. It uses npm workspaces to manage the two projects in a single repository.

## 🚀 Tech Stack

- **Monorepo Management**: npm Workspaces
- **TypeScript**: For type-safe JavaScript across both projects.
- **Concurrently**: To run both frontend and backend with a single command.

### Frontend (`/frontend`)

- **Framework**: Next.js
- **UI**: React

### Backend (`/backend`)

- **Framework**: Express.js
- **Database**: MongoDB with Mongoose

## 📁 Project Structure

```
/
├── backend/          # The backend Express.js application
├── frontend/         # The frontend Next.js application
├── package.json      # Root package.json for managing workspaces
└── tsconfig.json     # Root tsconfig.json for editor integration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher, for workspace support)
- MongoDB Atlas account or local MongoDB instance for the backend.

### Installation

To install all dependencies for both the frontend and backend, run the following command from the root of the repository:

```bash
npm install
```

This will install the dependencies for both workspaces as defined in the root `package.json`.

### Running the Applications

You can run both the frontend and backend development servers simultaneously using a single command from the root directory:

```bash
npm run dev
```

This uses `concurrently` to start the development servers for both `frontend` and `backend`.

### Available Scripts

All scripts can be run from the root of the repository.

- `npm run dev`: Starts both frontend and backend development servers.
- `npm run build`: Builds both frontend and backend applications for production.
- `npm run start`: Starts both frontend and backend applications in production mode.

### Running Commands in a Specific Workspace

If you need to run a command in a specific workspace (e.g., to add a dependency), you can use the `--workspace` flag:

```bash
# Add a dependency to the frontend
npm --workspace=frontend add <package-name>

# Add a dependency to the backend
npm --workspace=backend add <package-name>
```
