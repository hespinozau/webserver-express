const http = require('http');
const { url } = require('inspector');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Heber',
            apellido: 'Espinoza',
            edad: '32',
            url: req.url
        }
        res.write(JSON.stringify(salida, undefined, 2))
            /* res.write('Hola Mundo'); */
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');