import Easyviolet from 'easyviolet';
import express from 'express';
import path from 'node:path';
import http from 'node:http';

const server = http.createServer();
const app = express();
const ultraviolet = new Easyviolet();

ultraviolet.httpServer(server);
server.on('request', (req, res) => { if (!ultraviolet.requiresRoute(req)) app(req, res) });
app.use(express.static('static', { extensions: ['html'] }));
app.get('/app', (req, res) => {
  res.sendFile(path.join(process.cwd(), './static/app.html'));
});
app.get('/~', (req, res) => {
  res.sendFile(path.join(process.cwd(), './static/loader.html'));
});
app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile(path.join(process.cwd(), './static/404.html'))
});

server.listen(8080, () => console.log(`Doge Unblocker is running on port ${server.address().port}`));
