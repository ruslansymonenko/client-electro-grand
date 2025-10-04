# Electro Grand Client Project Architecture

## Overview

**Electro Grand Client** is a frontend application for an electronics e-commerce store. The project is built on a modern React/Next.js stack with TypeScript.

## Technology Stack

### Core Stack

- **Next.js 14.2.12**
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 3.4.1**
- **SCSS/Sass 1.79.1**

### State Management and API

- **Redux Toolkit 2.2.7** - Global state management
- **React Query (TanStack Query) 5.51.23** - Server state management
- **Axios 1.7.4** - HTTP client

### UI and Animations

- **Framer Motion 11.11.10** - Animations and transitions
- **Lucide React 0.441.0** - Icons
- **React Slick 0.30.2** - Carousels and sliders
- **React Hot Toast 2.4.1** - Notifications

### Forms and Validation

- **React Hook Form 7.52.2** - Form management
- **js-cookie 3.0.5** - Cookie handling

### Additional Tools

- **clsx 2.1.1** - Conditional CSS classes
- **jsonwebtoken 9.0.2** - JWT tokens
- **Prettier 3.3.3** - Code formatting

## Application Architecture

```mermaid
graph TD
    A[Next.js App Router] --> B[Layout.tsx]
    B --> C[Providers]
    C --> D[Redux Store]
    C --> E[React Query]
    C --> F[React Hot Toast]

    A --> G[Page Routes]
    G --> H[(public) - Public pages]
    G --> I[(private) - Private Pages]
    G --> J[(admin) - Admin]

    H --> K[Main Page]
    H --> L[Products]
    H --> M[Categories/Brands]
    H --> N[Auth Pages]

    I --> O[Customer Dashboard]

    J --> P[Admin Dashboard]
    J --> Q[Product Management]
    J --> R[User Management]

    S[Services Layer] --> T[Auth Service]
    S --> U[Products Service]
    S --> V[Categories Service]
    S --> W[Brands Service]
    S --> X[Users Service]
    S --> Y[Forms Service]

    T --> Z[Backend API]
    U --> Z
    V --> Z
    W --> Z
    X --> Z
    Y --> Z

    AA[Components] --> BB[Common Components]
    AA --> CC[Store Components]
    AA --> DD[Admin Components]

    BB --> EE[Navbar/Footer]
    BB --> FF[Forms/Buttons]
    BB --> GG[Modals/Loaders]

    CC --> HH[Product Cards]
    CC --> II[Category Lists]
    CC --> JJ[Hero Section]

    DD --> KK[Admin Tables]
    DD --> LL[Admin Forms]
    DD --> MM[Control Panels]
```

## Project Structure

### Main Directories

```
src/
├── app/                    # Next.js App Router
│   ├── (admin)/           # Admin routes
│   ├── (private)/         # Private routes
│   ├── (public)/          # Public routes
│   └── api/               # API routes
├── components/            # React components
│   ├── admin/            # Admin components
│   ├── common/           # Common components
│   └── store/            # Store components
├── config/               # Configuration
├── consts/               # Constants
├── hooks/                # Custom hooks
├── providers/            # React providers
├── screens/              # Page screens
├── services/             # API services
├── store/                # Redux store
├── types/                # TypeScript types
└── utils/                # Utilities
```

### Entry Points

1. **Main Entry Point**: `src/app/layout.tsx`

   - Root layout with providers
   - Font and metadata setup

2. **Routes**:
   - `/` - Home page
   - `/products` - Product catalog
   - `/categories` - Categories
   - `/brands` - Brands
   - `/auth/login` - Authentication
   - `/admin/*` - Admin panel
   - `/customer/*` - User dashboard

### Core Modules

1. **Authentication** (`src/services/auth/`)

   - JWT tokens
   - Role-based access (user/admin)
   - Interceptors for automatic token refresh

2. **Product Management** (`src/services/products/`)

   - CRUD operations
   - Filtering and pagination
   - Image uploads

3. **Categories and Brands** (`src/services/categories/`, `src/services/brands/`)

   - Hierarchical category structure
   - Subcategories
   - Brand navigation

4. **Users** (`src/services/users/`)

   - User management (admin)
   - User profiles

5. **Contact Forms** (`src/services/forms/`)
   - Contact forms
   - Callback requests

## Architecture Features

### State Management

- **Redux Toolkit** for global state (modals, UI states)
- **React Query** for server state (caching, synchronization)
- Local component state via `useState`

### API Integration

- Centralized API configuration in `src/config/api.config.ts`
- Axios interceptors for token and error handling
- Separation of public and private API calls

### Routing

- **Next.js App Router** with route grouping in parentheses
- Dynamic routes for products and categories
- Middleware for authorization checks

### TypeScript Integration

- Strict typing of API responses
- Separate types for data and UI states
- Interfaces for all main entities

## How to Run the Project Locally

### Prerequisites

- Node.js 18+
- npm or yarn

### Run Commands

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Linting
npm run lint
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_DOMAIN=localhost
NEXT_PUBLIC_SERVER_URL=http://localhost:4000
NEXT_PUBLIC_STAFF_KEY=your-secret-key
```

### Docker

The project supports containerization:

```bash
# Build Docker image
docker build -t elektro-grand-client .

# Run container
docker run -p 3000:3000 elektro-grand-client
```

## Deployment

The project is configured for automatic deployment via GitHub Actions when pushing to `main` and `dev` branches. The CI/CD pipeline includes:

1. Dependency installation
2. Build verification
3. Automatic VPS deployment (commented out)

## Security

- CSP headers for HTTPS enforcement
- JWT tokens with automatic refresh
- Role-based routing
- Client and server-side data validation
