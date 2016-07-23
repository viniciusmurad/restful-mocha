var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var frutasRouter = express.Router();

frutasRouter.route('/Frutas')
	.get(function(req, res){
		var responseJson = {hello: 'testando api'};
		res.json(responseJson);
	});


app.use('/api', frutasRouter);

app.get('/', function(req,res) {
	res.send('testando api');
})

app.listen(port, function() {
	console.log('servidor iniciado');
})