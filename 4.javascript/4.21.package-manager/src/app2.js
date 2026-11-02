const { createServer } = require('http');
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World 2\n');
});
server.listen(3001, '127.0.0.1', () => console.log('Server running'));