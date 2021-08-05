export const serverConfig = {
	'secret': 'shhh, its a secret'
}

//When in development
let db_uri = "mongodb://localhost:27017/";

//When in production
if (process.env.NODE_ENV == 'production') {
	db_uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DATABASE_URI}:${process.env.DATABASE_PORT}/?authSource=admin`;
}

export const dbConfig = {
	'databaseURI': db_uri,
	'databaseOptions': {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	}
	
}
 
export const joiConfig = {
	'validateOptions': {
		keyByField: false
	},
	'joiOptions': {
		abortEarly: false,
		allowUnknown: false
	}
 }
