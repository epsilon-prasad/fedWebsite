'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _expressValidation = require('express-validation');

var _config = require('./config');

var _db = require('./db.utils');

var _admin = require('./routes/admin.routes');

var _admin2 = _interopRequireDefault(_admin);

var _blog = require('./routes/blog.routes');

var _blog2 = _interopRequireDefault(_blog);

var _fed = require('./routes/fed.routes');

var _fed2 = _interopRequireDefault(_fed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //instantiate express app


// ---------------------------------------------------------
// Routes
// ---------------------------------------------------------

var port = process.env.PORT || 4001; // port

app.set('superSecret', _config.serverConfig.secret); // secret variable
app.disable('etag');
app.disable('x-powered-by');
app.use((0, _morgan2.default)('dev')); //morgan logger
app.use(_express2.default.json()); //Body parser
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use('/uploads', _express2.default.static('uploads'));

app.use((0, _cors2.default)());

app.get('/', function (req, res) {
  var db_type = void 0;

  if (process.env.NODE_ENV == 'production') {
    db_type = "prod";
  }

  var response = {
    'server_status': 'Running',
    'db_status': _db.dbStatus,
    'db_type': db_type || 'local'
  };
  res.status(200).json(response);
});

app.use(_admin2.default);
app.use(_blog2.default);
app.use(_fed2.default);

var logErrors = function logErrors(err, req, res, next) {
  if (err.stack) console.error(err.stack);
  next(err);
};

var clientErrorHandler = function clientErrorHandler(err, req, res, next) {

  //Validation handler => 400
  if (err instanceof _expressValidation.ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  //Parse Error => 400  
  if (err instanceof SyntaxError && err.statusCode === 400 && 'body' in err) {

    var error = {
      name: "ParseError",
      message: "Bad Json Value!",
      statusCode: err.statusCode,
      error: "Bad Request"
    };
    return res.status(err.statusCode).json(error);
  }

  //ISE => 500
  if (req.xhr) {
    return res.status(500).json(err);
  }

  next(err);
};

var errorHandler = function errorHandler(err, req, res, next) {
  return res.status(500).json(err);
};

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(port);
console.log('The server is running at port:' + port);