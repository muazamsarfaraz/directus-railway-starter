# Tech Context

## Technology Stack

### Backend
- **Directus 11.1.0+**: Headless CMS with admin interface
- **Node.js 18+**: Runtime environment (22+ preferred for Directus)
- **PostgreSQL**: Primary database
- **TypeScript**: Type safety and better DX

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first styling
- **@directus/sdk**: Official Directus client
- **@directus/visual-editing**: Visual editing library

### Deployment & Infrastructure
- **Railway**: Cloud platform for deployment
- **PostgreSQL on Railway**: Managed database
- **GitHub**: Source control and CI/CD trigger
- **Nixpacks**: Build system (Railway default)

## Setup Scripts

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with Directus URL
npm run dev
```

### Full Development Setup
```bash
# Clone repository
git clone <repository-url>
cd directus-railway-starter

# Setup backend
cd backend
npm install
cp .env.example .env
# Configure .env file
npm run dev &

# Setup frontend (in new terminal)
cd ../frontend
npm install
cp .env.example .env.local
# Configure .env.local file
npm run dev

# Validate setup
npm run validate
```

## Environment Details

### Development Environment
- **Node.js**: 18+ (frontend), 22+ (backend)
- **Package Manager**: npm
- **Database**: PostgreSQL (local or cloud)
- **Ports**: 
  - Directus: 8055
  - Next.js: 3000
  - PostgreSQL: 5432

### Production Environment (Railway)
- **Build System**: Nixpacks (automatic detection)
- **Database**: Railway PostgreSQL
- **Scaling**: Automatic based on traffic
- **SSL**: Automatic HTTPS
- **Domains**: Railway-provided or custom

## Configuration Files

### Backend Configuration
```
backend/
├── package.json          # Dependencies and scripts
├── .env.example          # Environment template
├── railway.json          # Railway deployment config
└── Dockerfile           # Container configuration (optional)
```

### Frontend Configuration
```
frontend/
├── package.json          # Dependencies and scripts
├── .env.example          # Environment template
├── railway.json          # Railway deployment config
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
└── jest.config.js        # Testing configuration
```

## Key Environment Variables

### Backend (.env)
```env
# Database
DATABASE_URL=postgresql://user:pass@host:port/db

# Security
SECRET=random-secret-key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure-password

# Server
PORT=8055
HOST=0.0.0.0

# Visual Editor
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC='self' https://*.railway.app
CACHE_AUTO_PURGE=true
WEBSOCKETS_ENABLED=true

# CORS
CORS_ENABLED=true
CORS_ORIGIN=true
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_DIRECTUS_URL=http://localhost:8055
```

## Constraints & Limitations

### Technical Constraints
1. **Node.js Version**: Directus requires Node.js 22+, frontend works with 18+
2. **Database**: PostgreSQL required (SQLite not recommended for production)
3. **Memory**: Minimum 512MB RAM for Directus
4. **Storage**: File uploads require persistent storage

### Railway Constraints
1. **Build Time**: 10-minute build timeout
2. **Memory**: 512MB default, upgradeable
3. **Storage**: Ephemeral filesystem (use database for persistence)
4. **Networking**: HTTP/HTTPS only, no custom ports

### Development Constraints
1. **CORS**: Must configure for visual editing
2. **CSP**: Frame-src must allow frontend domain
3. **Environment**: Separate configs for dev/prod
4. **Dependencies**: Some native modules may require build tools

## Performance Considerations

### Backend Performance
- **Database Indexing**: Index frequently queried fields
- **Caching**: Enable Directus cache with auto-purge
- **File Storage**: Use cloud storage for production
- **Memory**: Monitor memory usage with large datasets

### Frontend Performance
- **Bundle Size**: Monitor with `npm run build`
- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Automatic with App Router
- **ISR**: Use for frequently updated content

### Railway Optimization
- **Health Checks**: Configure for faster deployments
- **Resource Allocation**: Monitor and adjust as needed
- **Region Selection**: Choose closest to users
- **CDN**: Railway provides automatic CDN

## Development Tools

### Required Tools
- **Node.js**: 18+ (frontend), 22+ (backend)
- **npm**: Package management
- **Git**: Version control
- **Code Editor**: VS Code recommended

### Recommended Extensions (VS Code)
- **TypeScript**: Language support
- **Tailwind CSS IntelliSense**: CSS utilities
- **ES7+ React/Redux/React-Native snippets**: React snippets
- **Directus**: Directus-specific support

### Testing Tools
- **Jest**: Unit testing framework
- **Testing Library**: React component testing
- **Playwright**: E2E testing (optional)

## Monitoring & Debugging

### Development Debugging
- **Directus Logs**: Check console for API errors
- **Next.js Dev Tools**: Built-in error overlay
- **Browser DevTools**: Network and console debugging
- **Database Logs**: PostgreSQL query logging

### Production Monitoring
- **Railway Logs**: Application and build logs
- **Health Checks**: Automated endpoint monitoring
- **Performance Metrics**: Railway dashboard
- **Error Tracking**: Consider Sentry integration

## Security Configuration

### Development Security
- **Environment Files**: Never commit .env files
- **Local HTTPS**: Use for visual editor testing
- **Database Access**: Restrict to localhost
- **API Keys**: Use development keys only

### Production Security
- **Environment Variables**: Use Railway's secure storage
- **Database**: Railway-managed with encryption
- **HTTPS**: Automatic SSL certificates
- **CSP**: Restrictive content security policy
- **CORS**: Limit to known domains
