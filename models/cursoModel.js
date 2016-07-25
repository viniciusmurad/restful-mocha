var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cursoModel = new Schema({
	titulo: String,
	autor: String,
	genero: String,
	preco: Number,
	disponivel: {
		type: Boolean,
		default: false
	}
})

module.exports = mongoose.model('Curso', cursoModel);


