# [Live demo](https://fix-it-assignment.vercel.app/)

https://github.com/hxdy-1/fiXit-AI-Assignment/assets/115286446/14a03946-ab4c-4301-b9f3-f9e8bc5734fd

### How to run locally: 

Clone the repository to your local machine and go to the created project:
```bash
git clone https://github.com/hxdy-1/fiXit-AI-Assignment.git
cd fiXit-AI-Assignment
```

Create a .env file at the root level:
```bash
touch .env
```

Paste this in your .env and fill it with your own credentials:
```
DATABASE_URL=your own postgres db url (you can get one for free from neon.tech or aiven.io)
NEXTAUTH_URL=http://localhost:3000 (no need to change this jus remove this comment)
NEXTAUTH_SECRET=your own password (a random string would do)
GOOGLE_CLIENT_ID=your own google client ID
GOOGLE_CLIENT_SECRET=your own google client secret
```

Install dependencies
```bash
npm install
```

Run locally
```bash
npm run dev
```
