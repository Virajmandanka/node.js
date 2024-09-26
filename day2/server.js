const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Welcome to the Home Page!\n`);
    } 
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page!\n');
    }
     else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the Contact Page!\n');
    } 
    else {
      
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found\n');
    }
});


const PORT = 8080;


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
