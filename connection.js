var mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/learn-english'

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
	console.log('Mongoose default connection connected to'+ dbURI);
});

mongoose.connection.on('error', function (err) {
	console.log('Mongoose default connection error'+ err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {
	console.log('Mongoose default connection is open');
});

process.on('', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app terminate');
		process.exit(0);
	});
});