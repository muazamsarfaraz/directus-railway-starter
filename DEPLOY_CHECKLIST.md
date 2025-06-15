# Railway Deployment Checklist

## Pre-Deployment Checklist ✅

- [x] Project structure complete
- [x] Backend configuration ready
- [x] Frontend configuration ready
- [x] Environment templates created
- [x] Documentation complete
- [x] Railway configs in place

## Deployment Steps

### Step 1: Repository Setup
- [ ] Push code to GitHub repository
- [ ] Verify all files are committed
- [ ] Repository is public or accessible to Railway

### Step 2: Railway Project Creation
- [ ] Create Railway account
- [ ] Create new project
- [ ] Connect GitHub repository

### Step 3: Database Setup
- [ ] Add PostgreSQL service
- [ ] Note database connection details
- [ ] Verify database is running

### Step 4: Backend Deployment (Directus)
- [ ] Create new service from GitHub repo
- [ ] Set root directory to `backend`
- [ ] Configure environment variables:
  - [ ] DATABASE_URL (from PostgreSQL service)
  - [ ] SECRET (generate random key)
  - [ ] ADMIN_EMAIL
  - [ ] ADMIN_PASSWORD
  - [ ] CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC
  - [ ] CACHE_AUTO_PURGE=true
  - [ ] WEBSOCKETS_ENABLED=true
  - [ ] CORS_ENABLED=true
  - [ ] CORS_ORIGIN=true
- [ ] Deploy and verify
- [ ] Note backend URL

### Step 5: Frontend Deployment (Next.js)
- [ ] Create new service from GitHub repo
- [ ] Set root directory to `frontend`
- [ ] Configure environment variables:
  - [ ] NEXT_PUBLIC_DIRECTUS_URL (backend URL from step 4)
- [ ] Deploy and verify
- [ ] Note frontend URL

### Step 6: Visual Editor Configuration
- [ ] Access Directus admin (backend-url/admin)
- [ ] Login with admin credentials
- [ ] Go to Settings > Modules
- [ ] Enable Visual Editor module
- [ ] Go to Settings > Visual Editor
- [ ] Add frontend URL
- [ ] Save configuration

### Step 7: Content Setup
- [ ] Create blog collection
- [ ] Add required fields
- [ ] Create sample blog post
- [ ] Set status to published

### Step 8: Testing
- [ ] Test frontend loads correctly
- [ ] Test blog page shows content
- [ ] Test visual editor functionality
- [ ] Run validation script

## Environment Variables Reference

### Backend Variables
```
DATABASE_URL=${{Postgres.DATABASE_URL}}
SECRET=your-random-secret-here
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=your-secure-password
PORT=8055
HOST=0.0.0.0
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC='self' https://*.railway.app
CACHE_AUTO_PURGE=true
WEBSOCKETS_ENABLED=true
CORS_ENABLED=true
CORS_ORIGIN=true
```

### Frontend Variables
```
NEXT_PUBLIC_DIRECTUS_URL=https://your-backend-url.railway.app
```

## Troubleshooting

### Common Issues
- **Build failures**: Check Node.js version and dependencies
- **Database connection**: Verify DATABASE_URL format
- **CORS errors**: Check CORS_ORIGIN setting
- **Visual editor not working**: Verify CSP and frontend URL configuration

### Quick Fixes
- Redeploy if environment variables changed
- Check Railway logs for detailed error messages
- Verify all environment variables are set correctly
- Test database connection separately
