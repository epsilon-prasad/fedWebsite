import bodyParser from 'body-parser';
import express from 'express'; 
import path from 'path';  
import logger from 'morgan';
import cors from 'cors';
// import multer from 'multer';
import { ValidationError } from 'express-validation';
import { serverConfig } from './config';
import { dbStatus } from './db.utils';

// ---------------------------------------------------------
// Routes
// ---------------------------------------------------------

import adminRoutes from './routes/admin.routes';
import blogRoutes from './routes/blog.routes';
import fedRoutes from './routes/fed.routes';

var app = express(); //instantiate express app
var port = process.env.PORT || 4001; // port

app.set('superSecret', serverConfig.secret); // secret variable
app.disable('etag');  
app.disable('x-powered-by');
app.use(logger('dev')); //morgan logger
app.use(express.json()); //Body parser
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads',express.static('uploads'));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

app.use(cors());

app.get('/', (req, res) => {
  let db_type; 

  if (process.env.NODE_ENV == 'production') {
    db_type = "prod";
  }
   
  const response = {
    'server_status': 'Running',
    'db_status': dbStatus,
    'db_type': db_type || 'local' 
  }
  res.status(200).json(response);
});  

app.use(adminRoutes);
app.use(blogRoutes);
app.use(fedRoutes); 

const logErrors = (err, req, res, next) => {
  if(err.stack)
  console.error(err.stack);
  next(err);
}

const clientErrorHandler = (err, req, res, next) => {
  
  //Validation handler => 400
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  //Parse Error => 400  
  if(err instanceof SyntaxError && err.statusCode === 400 && 'body' in err){
    
    var error = {
      name: "ParseError",
      message: "Bad Json Value!",
      statusCode: err.statusCode,
      error: "Bad Request"
    }
    return res.status(err.statusCode).json(error);
  }

  //ISE => 500
  if (req.xhr) {
    return res.status(500).json(err);
  }

  next(err);
  
}

const errorHandler = (err, req, res, next) => {
  return res.status(500).json(err);
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port);
console.log(`The server is running at port:${port}`);
