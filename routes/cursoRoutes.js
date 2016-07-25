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
	});

	return cursoRouter;
}

module.exports = routes;