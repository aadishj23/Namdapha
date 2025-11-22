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

Since your project has both `frontend` and `namdapha-backend` directories, you need to use `git subtree` to push only the backend directory to Heroku.

Make sure your code is committed to git, then deploy:

```bash
# If not already a git repository
git init
git add .
git commit -m "Initial commit for Heroku deployment"

# Deploy using git subtree (pushes only namdapha-backend directory)
git subtree push --prefix namdapha-backend heroku main
```

If your default branch is `master` instead of `main`:
```bash
git subtree push --prefix namdapha-backend heroku master
```

**Note:** The `git subtree` command ensures that only the `namdapha-backend` directory (which contains `pom.xml`) is pushed to Heroku, allowing it to detect the Java buildpack correctly.

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
git subtree push --prefix namdapha-backend heroku main
```

## Automatic Restart Behavior

Heroku automatically restarts your app in the following scenarios:

1. **After Deployment**: Every time you push new code, Heroku restarts the app
2. **After Config Var Changes**: When you set/unset environment variables, the app restarts
3. **After Dyno Crashes**: If the app crashes, Heroku automatically attempts to restart it
4. **After Dyno Restart**: Heroku may restart dynos for maintenance or updates
5. **Manual Restart**: You can manually restart using `heroku restart --app your-app-name`

**Note**: If your app crashes repeatedly (crashes more than 5 times in 5 minutes), Heroku will put it in "crashed" state and stop trying to restart it automatically. You'll need to manually restart it or fix the underlying issue.

## Useful Heroku Commands

- `heroku logs --tail` - View real-time logs
- `heroku logs --tail --num 100` - View last 100 log lines
- `heroku config` - View all environment variables
- `heroku config:set KEY=value --app your-app-name` - Set an environment variable
- `heroku config:unset KEY` - Remove an environment variable
- `heroku restart --app your-app-name` - Manually restart your app
- `heroku ps --app your-app-name` - Check app status and dyno state
- `heroku ps:scale web=1 --app your-app-name` - Scale your app
- `heroku open --app your-app-name` - Open your app in browser

