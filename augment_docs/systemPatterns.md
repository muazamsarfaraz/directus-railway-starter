# System Patterns

## Architecture Overview

The Directus Railway Starter follows a modern headless CMS architecture with clear separation of concerns:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (Directus)    │◄──►│  (PostgreSQL)   │
│   Port: 3000    │    │   Port: 8055    │    │   Port: 5432    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │
         └───────────────────────┘
           Visual Editor Bridge
```

## Key Design Decisions

### 1. Monorepo Structure
- **Decision**: Separate `backend/` and `frontend/` directories
- **Rationale**: Clear separation while maintaining single repository for deployment
- **Benefits**: Independent scaling, clear boundaries, easier maintenance

### 2. TypeScript Throughout
- **Decision**: Full TypeScript implementation
- **Rationale**: Type safety, better developer experience, fewer runtime errors
- **Implementation**: Shared types between frontend and backend via Directus SDK

### 3. Visual Editing Integration
- **Decision**: Client-side visual editing with data attributes
- **Rationale**: Non-intrusive, works with any frontend framework
- **Pattern**: Conditional rendering based on editing mode detection

### 4. Environment-Based Configuration
- **Decision**: Environment variables for all configuration
- **Rationale**: 12-factor app compliance, Railway compatibility
- **Pattern**: `.env.example` files with clear documentation

## Core Patterns

### 1. Data Fetching Pattern
```typescript
// Centralized Directus client
export const directus = createDirectus<Schema>(directusUrl).with(rest());

// Consistent error handling
export const getBlogPosts = async () => {
  try {
    return await directus.request(readItems('blog', { ... }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};
```

### 2. Visual Editing Pattern
```typescript
// Conditional attribute application
{...inVisualEditingMode ? {
  'data-directus': createDirectusAttr({
    collection: 'blog',
    item: post.id,
    fields: 'title',
    mode: 'popover'
  })
} : {}}
```

### 3. Component Structure Pattern
```
components/
├── VisualEditingProvider.tsx    # Global visual editing setup
├── BlogPost.tsx                 # Content components with editing
└── [feature]/                   # Feature-based organization
```

### 4. Configuration Pattern
```
project/
├── backend/
│   ├── .env.example            # Backend environment template
│   ├── railway.json            # Railway deployment config
│   └── Dockerfile              # Container configuration
└── frontend/
    ├── .env.example            # Frontend environment template
    ├── railway.json            # Railway deployment config
    └── src/lib/                # Shared utilities
```

## Data Flow Patterns

### 1. Content Creation Flow
1. Content creator uses Directus admin
2. Content saved to PostgreSQL
3. Frontend fetches via Directus API
4. Static generation at build time (ISR)

### 2. Visual Editing Flow
1. Editor opens visual editor module
2. Frontend loads with visual editing enabled
3. Click triggers edit interface
4. Changes saved directly to Directus
5. Frontend refreshes with new content

### 3. Deployment Flow
1. Code pushed to GitHub
2. Railway detects changes
3. Separate builds for backend/frontend
4. Environment variables injected
5. Services deployed independently

## Security Patterns

### 1. API Security
- CORS configuration for frontend domains
- Environment-based secrets
- Database connection via environment variables

### 2. Content Security Policy
- Frame-src configured for visual editing
- Restrictive CSP for production
- Environment-specific configurations

### 3. Authentication
- Directus handles authentication
- Token-based API access
- Role-based permissions

## Performance Patterns

### 1. Caching Strategy
- Directus cache auto-purge enabled
- Next.js ISR for static generation
- CDN-friendly asset handling

### 2. Database Optimization
- Efficient queries with field selection
- Pagination for large datasets
- Indexed fields for performance

### 3. Frontend Optimization
- Code splitting by route
- Image optimization
- Bundle size monitoring

## Error Handling Patterns

### 1. API Error Handling
- Graceful degradation for failed requests
- Fallback content for missing data
- User-friendly error messages

### 2. Build Error Prevention
- TypeScript for compile-time checks
- Environment validation
- Health check endpoints

### 3. Runtime Error Recovery
- Error boundaries in React
- Retry mechanisms for API calls
- Logging for debugging
