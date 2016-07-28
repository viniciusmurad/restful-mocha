var cursoController = function(Curso) {

	var post = function(req,res){
		var curso = new Curso(req.body);
		curso.save();
		res.status(201).send(book);
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