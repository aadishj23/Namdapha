# Heroku Deployment Guide

This guide will help you deploy your Spring Boot application to Heroku.

## Prerequisites

1. Heroku account (sign up at https://www.heroku.com)
2. Heroku CLI installed (download from https://devcenter.heroku.com/articles/heroku-cli)
3. Git installed

## Deployment Steps

### 1. Login to Heroku

```bash
heroku login
```

### 2. Create a Heroku App

Navigate to your backend directory and create a new Heroku app:

```bash
cd namdapha-backend
heroku create your-app-name
```

Or let Heroku generate a random name:
```bash
heroku create
```

### 3. Set Environment Variables

Set the required environment variables in Heroku. Replace `your-app-name` with your actual Heroku app name:

```bash
# MongoDB URI (replace with your actual MongoDB connection string)
heroku config:set MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority" --app your-app-name

# MongoDB Database name
heroku config:set MONGODB_DATABASE="namdaphaDB" --app your-app-name

# Mail configuration
heroku config:set MAIL_HOST="smtp.gmail.com" --app your-app-name
heroku config:set MAIL_PORT="587" --app your-app-name
heroku config:set MAIL_USERNAME="your-email@gmail.com" --app your-app-name
heroku config:set MAIL_PASSWORD="your-app-password" --app your-app-name

# Admin email
heroku config:set ADMIN_EMAIL="your-admin-email@gmail.com" --app your-app-name
```

**Note:** 
- If you're already in a git repository with Heroku remote configured, you can omit the `--app` flag as Heroku will detect it automatically.
- For Gmail, you'll need to use an App Password, not your regular password. Enable 2-factor authentication and generate an app password in your Google Account settings.

### 4. Add MongoDB Add-on (Optional but Recommended)

If you want to use Heroku's MongoDB add-on:

```bash
heroku addons:create mongolab:sandbox --app your-app-name
```

This will automatically set the `MONGODB_URI` environment variable.

### 5. Deploy to Heroku

Make sure your code is committed to git, then deploy:

```bash
git init  # if not already a git repository
git add .
git commit -m "Initial commit for Heroku deployment"
git push heroku main
```

If your default branch is `master` instead of `main`:
```bash
git push heroku master
```

### 6. Verify Deployment

Check if your app is running:

```bash
heroku ps
```

View logs:
```bash
heroku logs --tail
```

Open your app in the browser:
```bash
heroku open
```

## Important Notes

1. **Port Configuration**: The application is configured to use Heroku's `PORT` environment variable automatically. The Procfile handles this.

2. **Database**: Make sure your MongoDB database allows connections from Heroku's IP addresses. If using MongoDB Atlas, add `0.0.0.0/0` to your IP whitelist (or use specific Heroku IPs for better security).

3. **CORS**: If your frontend is hosted elsewhere, make sure your `CorsConfig.java` allows requests from your frontend domain.

4. **Environment Variables**: All sensitive data (MongoDB URI, email credentials) should be set as Heroku config vars, not hardcoded in the application.

## Troubleshooting

### Build fails
- Check logs: `heroku logs --tail`
- Ensure Java 17 is specified in `system.properties` (already done)
- Verify Maven build works locally: `mvn clean package`

### App crashes on startup
- Check logs: `heroku logs --tail`
- Verify all environment variables are set: `heroku config`
- Ensure MongoDB connection string is correct

### Database connection issues
- Verify MongoDB URI is correct
- Check MongoDB Atlas IP whitelist
- Ensure database name matches

## Updating Your App

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push heroku main
```

## Useful Heroku Commands

- `heroku logs --tail` - View real-time logs
- `heroku config` - View all environment variables
- `heroku config:set KEY=value --app your-app-name` - Set an environment variable
- `heroku config:unset KEY` - Remove an environment variable
- `heroku restart` - Restart your app
- `heroku ps:scale web=1` - Scale your app
- `heroku open` - Open your app in browser

