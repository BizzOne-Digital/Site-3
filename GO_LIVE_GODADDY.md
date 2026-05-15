# Go-Live Guide: Deploying Merchant Orders to GoDaddy / Domain

This guide provides instructions on how to take the Merchant Orders Next.js application live on `merchantorders.io`.

## 1. Build and Start Commands
Before deployment, ensure the application builds successfully:
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start the production server
npm run start
```

## 2. Environment Variables Needed
Create a `.env.production` file with the following placeholders (update with real values when available):
```env
NEXT_PUBLIC_SITE_URL=https://merchantorders.io
# Add API keys for form integrations here (e.g., Formspree, Resend, etc.)
# CONTACT_FORM_ENDPOINT=
```

## 3. Hosting Options
Next.js Applications require Node.js to run SSR (Server-Side Rendering) or API routes. 

### Option A: Vercel / Netlify (Recommended for Next.js)
The easiest and most performant way to host this Next.js App Router project is on Vercel:
1. Push this repository to GitHub/GitLab.
2. Log into Vercel and import the repository.
3. Add the environment variables.
4. Deploy.

### Option B: GoDaddy cPanel / VPS Hosting
If you must use GoDaddy:
- **Shared cPanel Hosting:** Next.js requires a Node.js server. If your GoDaddy cPanel plan supports "Setup Node.js App", you can deploy the `.next` folder and `package.json` there. Otherwise, you may need to use `output: 'export'` in `next.config.ts` to generate a static site (note: this disables image optimization and SSR).
- **GoDaddy VPS/Dedicated:** You can run `npm run start` using a process manager like PM2 and route traffic using NGINX.

## 4. DNS Configuration for merchantorders.io
Once you have your hosting provider (e.g., Vercel), update your GoDaddy DNS records:

- **A Record:**
  - Host: `@`
  - Points to: `[Hosting Provider IP Address]` (e.g., Vercel IP: `76.76.21.21`)
  
- **CNAME Record:**
  - Host: `www`
  - Points to: `[Hosting Provider CNAME Target]` (e.g., `cname.vercel-dns.com`)

*Note: Do not guess DNS values. Use the exact values provided by your hosting dashboard.*

## 5. Launch Checklist
- [ ] Ensure all placeholder texts, links, and integration logos are updated.
- [ ] Upload the provided `logo.png` and contact images to the `public/` folder.
- [ ] DNS propagation can take 24-48 hours. Use a DNS checker to verify.
- [ ] Confirm SSL/HTTPS is active (Vercel provides this automatically; for GoDaddy, you may need to provision an AutoSSL certificate).
- [ ] Test the contact form submission in the production environment.
- [ ] Test mobile responsiveness and performance using Google Lighthouse.
