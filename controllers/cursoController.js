var cursoController = function(Curso) {

	var post = function(req,res){
		var curso = new Curso(req.body);

		if(!req.body.titulo) {
			res.status(400);
			res.send('Titulo requerido');
		} else {
			curso.save();
			res.status(201);
			res.send(curso);
		}
	}

	var get = function(req, res){
		var query = req.query;
		Curso.find(query, function(err,cursos) {
			if(err) {
				console.log(err);
				res.status(500).send(err);
			} else {
				res.json(cursos);
			}
		});
	}

	return {
		post: post,
		get: get
	}
}

module.exports = cursoController;