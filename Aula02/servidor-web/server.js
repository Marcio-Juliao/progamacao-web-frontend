const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    res.write("Olá, mundo!");
    res.end();
}).listen(port);

console.log(".: Servidor rodando na porta 3000 :.");