import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'application/json');

    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Home page' }));
    } else if (url === '/about' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'About page' }));
    } else if (url === '/contact' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Contact page' }));
    } else if (url === '/api/users' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ users: ['Alice', 'Bob', 'Charlie'] }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});