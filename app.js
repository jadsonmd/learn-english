var express = require('express');
var bodyParser = require('body-parser');

var conn = require('./connection');
var VocabularyExpansion = require('./routes/vocabulary-expansion-route');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/vocabulary-expansion', VocabularyExpansion);

app.get('/', function(req, res, pro){
	res.send('ok');
});

app.listen(3000, function(){
	console.log('Rodando na porta 3000');
});