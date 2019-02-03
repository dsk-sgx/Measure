const http = require('http');
const fs = require('fs');
const port = 3001;

const server = http.createServer((request, response) => {
    fs.readFile('./public/mesure.html', 'utf-8', (error, data) => {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(data);
        response.end();
    });
});

server.listen(port);