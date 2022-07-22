const http = require('http');
const port = 3000; // default port

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Curso APi NodeJs!');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});