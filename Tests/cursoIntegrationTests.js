var should = require('should'),
    request = require('supertest'),
    app = require('../app.js'),
    mongoose = require('mongoose'),
    Curso = mongoose.model('Curso'),
    agent = request.agent(app);


describe('Book Crud Test', function(){
    it('Deverá permitir que um curso seja postado e retornar um _id para leitura', function(done){
        
        var cursoPost = {titulo: 'novo curso', autor: 'Autor desconhecido', genero: 'computacao', preco: 50, disponivel: false};

        agent.post('/api/cursos')
            .send(cursoPost)
            .expect(200)
            .end(function(err, results){
                // results.body.read.should.not.equal(false);
                results.body.should.have.property('_id');
                done()
            })
    })

    afterEach(function(done){
        Curso.remove().exec();
        done();
    })
})