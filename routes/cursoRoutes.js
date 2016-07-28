var express = require('express');

var routes = function(Curso) {

var cursoRouter = express.Router();
cursoController = require('../controllers/cursoController')(Curso);
cursoRouter.route('/')
	.post(cursoController.post)
	.get(cursoController.get);
cursoRouter.route('/:id')
	.get(function(req, res){
		Curso.findById(req.params.id, function(err,cursos) {
			if(err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				res.json(cursos);
			}
		});
	})
	.put(function(req, res) {
		Curso.findById(req.params.id, function(err,cursos) {
			if(err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				cursos.titulo = req.body.titulo;
				cursos.genero = req.body.genero;
				cursos.preco = req.body.preco;
				cursos.disponivel = req.body.disponivel;
				cursos.save();
				res.json(cursos);
			}
		})
	})
	.delete(function(req, res) {
		Curso.findOneAndRemove({_id: req.params.id}, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
			res.sendStatus(204);
		}
	})
});

	return cursoRouter;
}

module.exports = routes;