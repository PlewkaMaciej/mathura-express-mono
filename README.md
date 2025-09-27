# MathuraExpress - Frontend

MathuraExpress is an educational platform helping students prepare for mathematics final exams (matura). The application offers ready-made task solutions, video tutorials, and an exam sheet generator.

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Static typing

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - SVG icons
- **PostCSS** - CSS preprocessing

### Forms & Validation
- **Formik 2.4.6** - Form management
- **Yup 1.7.0** - Schema validation

### HTTP Client & Math Rendering
- **Axios 1.11.0** - HTTP client
- **better-react-mathjax 2.3.0** - Mathematical formula rendering

### Development Tools
- **ESLint 9** - Code linting
- **Turbopack** - Fast bundler (dev mode)

## 🚀 How to Run

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm or bun

### Installation & Development

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Start development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. **Open the application:**
   - Go to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## ✨ Implemented Features

### 🏠 Landing Page
- **Hero Section** - Main section with CTA buttons
- **Feature Cards** - Presentation of main features:
  - Ready-made solutions for exam tasks
  - Step-by-step video tutorials
  - Exam sheet generator
- **Course Preview** - Section with video placeholder

### 🔐 Authentication System
- **Registration Page** (`/register`)
  - Registration form with validation
  - Fields: email, password
  - Backend API integration
- **Login Page** (`/login`)
  - Login form with validation
  - Error handling and status management
  - Redirect after successful login

### 🧩 Reusable Components
- **Header** - Navigation with responsive menu
- **Footer** - Footer with links
- **FormInput** - Form component with validation
- **MathJax Integration** - Mathematical formula rendering

### 🎨 UI/UX Features
- **Responsive Design** - Adaptation to different screen sizes
- **Dark Theme** - Dark color scheme
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - ARIA labels and semantic HTML

## 📋 Suggested Technical Best Practices

### 🔧 Code Quality & Architecture
1. **Add Error Boundaries** - Implement React Error Boundaries
2. **Environment Variables** - Move configuration to `.env.local`
3. **API Layer Abstraction** - Create dedicated API layer
4. **Loading States** - Add loading spinners/skeletons
5. **Type Safety** - Extend TypeScript types for API responses

### 🛡️ Security & Performance
1. **Input Sanitization** - Input data validation and sanitization
2. **CSRF Protection** - Implement CSRF tokens
3. **Image Optimization** - Image optimization (Next.js Image)
4. **Bundle Analysis** - Bundle size analysis
5. **Caching Strategy** - Implement caching strategies

### 🧪 Testing & Quality Assurance
1. **Unit Tests** - Unit testing (Jest + Testing Library)
2. **E2E Tests** - End-to-end testing (Playwright/Cypress)
3. **Component Documentation** - Storybook for components
4. **Code Coverage** - Test coverage monitoring

### 🔄 Development Workflow
1. **Pre-commit Hooks** - Husky + lint-staged
2. **Conventional Commits** - Standard commit formats
3. **CI/CD Pipeline** - Deployment automation
4. **Code Review Guidelines** - Code review guidelines

## ⚠️ Identified Issues & Inconsistencies

### 🐛 Critical Issues
1. **Missing Error Handling** - Lack of network error handling in some places
2. **Incomplete Registration Flow** - RegisterPage doesn't handle registration success
3. **Missing API Endpoints** - References to non-existent endpoints (`/pricing`, `/library`, `/generator`)
4. **Hardcoded API URL** - API URL should be in environment variables

### 🔍 Code Quality Issues
1. **Inconsistent Error Display** - Different error display styles in forms
2. **Missing PropTypes/Interfaces** - Some components lack complete types
3. **Unused Imports** - CheckCircle2 in RegisterPage is not used
4. **Console.log Statements** - Debug logs in production code
5. **Missing Display Names** - forwardRef components without displayName

### 🎨 UI/UX Inconsistencies
1. **Color Variables** - Mixing CSS custom properties with Tailwind classes
2. **Responsive Breakpoints** - Inconsistent breakpoint usage
3. **Focus States** - Missing focus indicators for accessibility
4. **Loading States** - Missing loading states for async operations

### 📁 Project Structure
1. **Missing Directories** - Missing folders: `hooks/`, `utils/`, `types/`, `constants/`
2. **Component Organization** - Components could be better organized
3. **Missing Tests** - Missing unit and integration tests

### 🔧 Configuration Issues
1. **Next.js Config** - Empty Next.js configuration
2. **Missing Metadata** - Missing SEO metadata in layout
3. **Missing Favicon** - Missing favicon and other meta tags

## 📝 Development Notes

- Project uses the latest versions of React (19) and Next.js (15)
- Implements App Router instead of Pages Router
- Uses Turbopack in development mode for faster bundling
- MathJax is configured for mathematical formula rendering
- Application is prepared for backend API integration

## 🚀 Next Steps

1. Implement missing pages (`/pricing`, `/library`, `/generator`)
2. Add state management system (Zustand/Redux)
3. Implement payment system
4. Add content management system
5. Implement exam sheet generator
6. Add comment and rating system
