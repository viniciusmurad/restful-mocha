var express = require('express');

var routes = function(Curso) {

var cursoRouter = express.Router();
cursoRouter.route('/')
	.post(function(req,res){
		Curso.create(req.body, function(err, curso) {
			if (err) {
				console.log(err);
			} else {
				console.log(curso);
				res.status(201).send(curso);
			}
		})
	})
	.get(function(req, res){
		var query = req.query;
		Curso.find(query, function(err,cursos) {
			if(err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				res.json(cursos);
			}
		});
	});

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

		Curso.findOneAndRemove({
		_id: req.params.id
	}, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
			res.status(204);
		}
	})
		// req.book.remove(function(err) {
		// 	if(err) {
		// 		res.status(500).send(err);
		// 	} else {
		// 		res.status(204).send('removido');
		// 	}
		// });
	});

	return cursoRouter;
}

module.exports = routes;