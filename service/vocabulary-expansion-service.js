var VocabularyExpansionModel = require('./../model/vocabulary-expansion-model');

const callback = function (err, data, res) {
	if(err) return console.log('ERROR: ', err);
	return res.json(data);
}

// O service tem a mesma funcionalidade do Action do Suissa vídeo: 
// Be MEAN: Node.JS+Express.JS (AULA 14)
const Service = {};

Service.listar = (req, res) => {
	const query = {};
	VocabularyExpansionModel.find(query, (err, data) => {
		callback(err, data, res);
	});
}

Service.cadastrar = (req, res) => {
	const body = req.body;
	const vocabularyExpansion = new VocabularyExpansionModel(body);
	vocabularyExpansion.save((err, data) => {
		callback(err, data, res);
	});
}

Service.atualizar = (req, res) => {
	const query = {_id: req.param.id};
	const body = req.body;
	VocabularyExpansionModel.updateOne( body, (err, data) => {
		callback(err, data, res);
	});
}

Service.remover = (req, res) => {
	const id = req.param.id;
	VocabularyExpansionModel.deleteOne(id, (err, data) => {
		callback(err, data, res);
	});
}

module.exports = Service;