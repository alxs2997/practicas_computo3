var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Programación computacional 4');
});

app.route('/test').get(function(req,res){
    res.send('pagina de prueba')
})

var server = app.listen(3000, function(){});