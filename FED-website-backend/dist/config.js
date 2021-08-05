'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var serverConfig = exports.serverConfig = {
	'secret': 'shhh, its a secret'

	//When in development
};var db_uri = "mongodb://localhost:27017/";

//When in production
if (process.env.NODE_ENV == 'production') {
	db_uri = 'mongodb://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@' + process.env.DATABASE_URI + ':' + process.env.DATABASE_PORT + '/?authSource=admin';
}

var dbConfig = exports.dbConfig = {
	'databaseURI': db_uri,
	'databaseOptions': {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	}

};

var joiConfig = exports.joiConfig = {
	'validateOptions': {
		keyByField: false
	},
	'joiOptions': {
		abortEarly: false,
		allowUnknown: false
	}
};