var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _schema = {
	word: String,
	description: String,
	tipo: String,
	mean: String
}

const vocabularyExpansion = new Schema(_schema);
module.exports = mongoose.model('VocabularyExpansion', vocabularyExpansion);