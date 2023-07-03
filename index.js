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
app.use((req, res) => {
  res.statusCode = 404;
  res.sendFile(path.join(process.cwd(), './static/404.html'))
});

server.listen(process.env.PORT || 8080, () => console.log(`doge unblocker listening on port ${server.address().port} yessir`));