'use strict';

var multer = require("multer");

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname.toLowerCase().split(' ').join('-'));
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg' || file.mimetype == "image/jpg" || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

exports.upload = upload;