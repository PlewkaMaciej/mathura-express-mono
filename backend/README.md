# Mathura Backend

A Node.js/TypeScript backend application providing authentication services with MongoDB integration.

## 🚀 Tech Stack

### Core Technologies
- **Node.js** - JavaScript runtime environment
- **TypeScript** - Type-safe JavaScript superset
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM

### Security & Authentication
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT token generation and verification
- **helmet** - Security headers middleware
- **express-rate-limit** - Request rate limiting
- **cors** - Cross-Origin Resource Sharing

### Validation & Utilities
- **Joi** - Schema validation
- **cookie-parser** - Cookie parsing middleware
- **dotenv** - Environment variable management

### Development Tools
- **ts-node-dev** - TypeScript development server with hot reload
- **TypeScript** compiler and type definitions

## 📁 Project Structure

```
src/
├── controllers/
│   └── authController.ts    # Authentication logic
├── middleware/
│   └── auth.ts             # Authentication middleware (empty)
├── models/
│   └── User.ts             # User data model
├── routes/
│   └── auth.ts             # Authentication routes
├── utils/
│   └── jwt.ts              # JWT utility functions
└── index.ts                # Application entry point
```

## 🛠️ How to Run the Project

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mathurabackenddd
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Update the `.env` file with your configuration:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_strong_jwt_secret_key
   JWT_EXPIRES_IN=1h
   BCRYPT_SALT_ROUNDS=12
   CORS_ORIGIN=http://localhost:3000
   NODE_ENV=development
   MAX_ACCOUNT=1000
   ```

4. **Development Mode**
   ```bash
   npm run dev
   ```

5. **Production Build**
   ```bash
   npm run build
   npm start
   ```

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

## ✨ Implemented Features

### Authentication System
- **User Registration** (`POST /api/auth/register`)
  - Email validation and uniqueness check
  - Password hashing with bcrypt
  - Account limit enforcement (max 1000 users)
  - JWT token generation and cookie-based authentication

- **User Login** (`POST /api/auth/login`)
  - Credential validation
  - Password comparison
  - JWT token generation with secure cookies

### Security Features
- **Password Security**: bcrypt hashing with configurable salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Rate Limiting**: 200 requests per 15-minute window
- **Security Headers**: Helmet middleware for security headers
- **CORS Protection**: Configurable cross-origin requests
- **Input Validation**: Joi schema validation for user inputs

### Health Check
- **Health Endpoint** (`GET /api/health`)
  - Server status monitoring
  - MongoDB connection state check

### Database Integration
- MongoDB with Mongoose ODM
- User model with email uniqueness
- Automatic timestamps
- Connection management with graceful shutdown

## 🔧 Suggested Technical Best Practices

### 1. **Authentication Middleware Implementation**
- Complete the empty `auth.ts` middleware file
- Add JWT verification middleware for protected routes
- Implement user authentication checks

### 2. **Error Handling Enhancement**
- Create centralized error handling middleware
- Implement custom error classes
- Add consistent error response format
- Improve error logging with structured logging

### 3. **Input Validation Improvements**
- Add validation schemas for login endpoint
- Implement request sanitization
- Add file upload validation if needed

### 4. **Security Enhancements**
- Implement refresh token mechanism
- Add password strength requirements
- Consider implementing account lockout after failed attempts
- Add request logging for security monitoring

### 5. **Code Organization**
- Create separate validation schemas file
- Add service layer between controllers and models
- Implement repository pattern for database operations
- Add constants file for configuration values

### 6. **Testing Implementation**
- Add unit tests for controllers and utilities
- Implement integration tests for API endpoints
- Add test database configuration
- Set up CI/CD pipeline

### 7. **Documentation & Development**
- Add API documentation (Swagger/OpenAPI)
- Implement request/response logging
- Add development debugging tools
- Create database migration scripts

### 8. **Performance & Monitoring**
- Add database indexing strategy
- Implement caching layer (Redis)
- Add application monitoring (health checks, metrics)
- Optimize database queries

## ⚠️ Identified Issues & Inconsistencies

### Critical Issues

1. **Security Vulnerability in .env File**
   - **Issue**: MongoDB credentials and JWT secret are exposed in the repository
   - **Risk**: High security risk if repository is public
   - **Solution**: Remove `.env` from version control, add to `.gitignore`, use environment-specific configurations

2. **Incomplete Authentication Middleware**
   - **Issue**: `src/middleware/auth.ts` is empty but imported in the project structure
   - **Impact**: No route protection mechanism implemented
   - **Solution**: Implement JWT verification middleware

3. **Inconsistent Environment Variable Usage**
   - **Issue**: `MAX_ACCOUNT` in `.env` vs `MAX_ACCOUNTS` in code
   - **Impact**: Configuration not working as expected
   - **Solution**: Standardize environment variable names

### Code Quality Issues

4. **Missing .gitignore Entries**
   - **Issue**: Only `node_modules` is ignored
   - **Missing**: `.env`, `dist/`, logs, IDE files, OS files
   - **Solution**: Expand `.gitignore` with comprehensive exclusions

5. **Hardcoded Configuration Values**
   - **Issue**: Cookie options and some timeouts are hardcoded
   - **Solution**: Move to environment configuration

6. **Inconsistent Error Handling**
   - **Issue**: Different error response formats across endpoints
   - **Solution**: Implement centralized error handling

7. **Missing Input Validation**
   - **Issue**: Login endpoint lacks Joi validation schema
   - **Solution**: Add comprehensive validation for all endpoints

### Development & Deployment Issues

8. **No Production Readiness**
   - **Issue**: Missing production configurations
   - **Missing**: Process management, logging, monitoring
   - **Solution**: Add PM2 configuration, structured logging

9. **Database Connection Management**
   - **Issue**: No connection pooling configuration
   - **Solution**: Add MongoDB connection options for production

10. **Missing TypeScript Strict Checks**
    - **Issue**: Some TypeScript configurations could be stricter
    - **Solution**: Enable additional strict type checking options

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Test the health endpoint
curl http://localhost:4000/api/health

# Test user registration
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Test user login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 📝 Next Steps

1. **Immediate Priority**: Fix security issues (remove credentials from repository)
2. **High Priority**: Implement authentication middleware and route protection
3. **Medium Priority**: Add comprehensive testing and error handling
4. **Long Term**: Implement advanced features like password reset, email verification

---

*This README was generated through automated code analysis. Please verify all information and update as needed.*
