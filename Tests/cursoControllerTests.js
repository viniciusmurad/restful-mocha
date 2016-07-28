var should = require('should');
var sinon = require('sinon');

describe('Cursos Controller test', function(){
	describe('Post', function() {
		it('o título não pode estar vazio no post', function() {
			var Curso = function(curso){this.save = function(){}};
			var req = {
				body: {
					autor: 'Autor'
				}
			}

			var res = {
				status: sinon.spy(),
				send: sinon.spy()
			}

			var cursoController = require('../controllers/cursoController')(Curso);
			cursoController.post(req,res);
			
			res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
			res.send.calledWith('Titulo requerido').should.equal(true);
		});
	})
})