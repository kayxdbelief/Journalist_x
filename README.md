# Journalist X Frontend

This is the Next.js + TypeScript frontend for [Journalist X](../README.md), a platform to manage journalism credentials and submit to agencies like the Associated Press.

## Features

- Secure login/register (with MFA-ready design)
- Dashboard for journalists, editors, and admins
- Credential upload, review, and submission workflow
- Modular structure for easy extension

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Folder Structure

- `src/pages/` - Next.js routes
- `src/styles/` - Tailwind CSS global styles
- `src/components/` - (to be added) Reusable UI components
- `public/` - Static assets

---

**Note:** You must connect the frontend to the backend API (see [../backend](../backend)) by setting up a proxy or using environment variables for the API base URL.