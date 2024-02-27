const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, resp) => {
  const respText = 'Hello Holberton School!';

  resp.setHeader('Content-Type', 'text/plain');
  resp.setHeader('Content-Length', respText.length);
  resp.statusCode = 200;
  resp.write(Buffer.from(respText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
