const http = require('http');

const servidor = http.createServer((req,res) =>{
    res.end('servidor HTTP NodeJs esta prendido');
});

servidor.listen(8080);