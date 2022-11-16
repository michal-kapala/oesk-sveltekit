// Custom Express server to add CORS for Apollo Server in prod mode (bare Node throws CORS Missing Allow Origin)
// Remember to build your app first!
// https://stackoverflow.com/questions/73214622/how-to-enable-cors-on-a-sveltekit-standalone-endpoint
import { handler } from './build/handler.js';
import express from 'express';
import cors from 'cors';

const app = express();
// Add cors middleware
app.use(cors());

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
