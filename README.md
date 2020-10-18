## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## About this Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This application will be connected firebase for authentication and database. 

For authentication, frontend will connect to firebase directly for login and logout. APIs will validate tokens on users' requests.

For database storage, firestore will be used. Data are retreived from APIs and be returned to frontend.
