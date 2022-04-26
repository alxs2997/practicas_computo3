var http = require('http');

http.createServer(function (request,response){
    //enviar el header HTTP
    //ESTADO HTTP: 200 : OK
    //Content Type: texte/plain
    response.writeHead(200,{'content-type': 'text/plain'});

    //Enviar la resouesta desntro del body "Programación computacional IV"
    response.end('Programacion Computacional IV');
}).listen(8081);
//La consola imprimirá este mensaje
console.log('Server running at http://127.0.0.1:8081/');