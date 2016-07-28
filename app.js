var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var db;
if(process.env.ENV == 'Test') {
	db = mongoose.connect('localhost/restful_test');
}
else {
	db = mongoose.connect('localhost/restful');
} 


var Curso = require('./models/cursoModel');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

cursoRouter = require('./routes/cursoRoutes')(Curso);
app.use('/api/cursos', cursoRouter);

app.get('/', function(req,res) {
	res.send('testando api');
})

app.listen(port, function() {
	console.log('servidor iniciado');
})

module.exports = app;