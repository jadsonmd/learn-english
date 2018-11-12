var express = require('express');

var VocabularyExpansionService = require('./../service/vocabulary-expansion-service');

var routes = express.Router();

//POST Para fins didáticos
routes.post('/', function (req, res){
	VocabularyExpansionService.cadastrar(req, res);
});

//GET Para fins didáticos
routes.get('/', function (req, res){
	VocabularyExpansionService.listar(req, res);
});

//PUT com a forma encurtada
routes.put('/:id', VocabularyExpansionService.atualizar);

//DELETE com a forma encurtada
routes.delete('/:id', VocabularyExpansionService.remover);

module.exports = routes;