# Deployment Guide

## Quick Deploy to Vercel

**Your code is already on GitHub!** 🎉  
Repository: `git@github.com:jacwalste/jacwalste.com.git`

Now just deploy to Vercel:
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

That's it! Vercel will:
- Auto-detect the Next.js framework
- Use Node.js 20.9.0+ (required for Next.js 16)
- Install dependencies
- Build the project
- Deploy to a production URL

## Environment Variables

No environment variables are currently required. If you add any in the future, configure them in the Vercel dashboard under Settings → Environment Variables.

## Custom Domain

To use jacwalste.com:
1. Go to your Vercel project settings
2. Navigate to Domains
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

## Build Command

The default build command is `npm run build`, which is already configured in `vercel.json`.

## Node Version

The project requires Node.js ≥20.9.0. Vercel will automatically use the correct version. Your local environment may have an older version (20.0.0), but this won't affect deployment.

## Post-Deployment

After deployment:
- Test all pages work correctly
- Verify mobile responsiveness
- Check that MDX changelog entries render properly
- Test the interactive contact terminal

## Adding Content

To add new changelog entries after deployment:
1. Create a new `.mdx` file in `src/content/changelog/`
2. Commit and push to GitHub
3. Vercel will automatically rebuild and deploy

## Monitoring

Vercel provides automatic monitoring:
- Build logs in the Deployments tab
- Analytics in the Analytics tab
- Error tracking in real-time

