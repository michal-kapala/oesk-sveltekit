# Overview

The app's is a testing environment for SvelteKit's API endpoints efficiency. API exposes standard endpoints and GraphQL Apollo Server endpoint for deeply nested relational data query efficiency measurement.

# Tech

 - Express.js (using SvelteKit's NodeJS adapter and app handler)
 - Apollo Server (GraphQL)
 - Prisma (ORM)
 - SQLite database

# Running

The project contains sample generated data in `prisma/database.sqlite3`. The additional data can be added using `api/populate` endpoint.

The SvelteKit app lives on Express server to resolve issues related to CORS origin within Apollo Server while running in adapter's bare NodeJS. 

Build the project:
```
npm run build
```
Run the Express server:
```
npm run start
```
