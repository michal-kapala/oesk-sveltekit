# Overview

The app's is a testing environment for [SvelteKit](https://kit.svelte.dev/) API endpoints efficiency. API exposes standard endpoints and GraphQL Apollo Server endpoint for deeply nested relational data query and mutation efficiency measurement.

# Tech

 - [custom Express.js](https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server) (using SvelteKit's NodeJS adapter and app handler)
 - [Apollo Server for SvelteKit](https://www.npmjs.com/package/apollo-server-svelte-kit) (GraphQL)
 - [Prisma](https://www.prisma.io/) (ORM)
 - [SQLite](https://www.sqlite.org/index.html) database

# Running

The project contains generated sample data in `prisma/database.sqlite3`. Additional data can be created using `api/populate` endpoint.

The SvelteKit app lives on Express server to resolve issues related to CORS origin within Apollo Server while running in adapter's bare NodeJS. 

Install dependencies:
```
npm install
```

Generate [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client):
```
npx prisma generate
```

Build the project:
```
npm run build
```

Run the Express server:
```
npm run start
```
