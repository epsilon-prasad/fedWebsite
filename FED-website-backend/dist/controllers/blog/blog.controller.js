'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteBlog = exports.updateBlog = exports.postBlog = exports.getBlog = undefined;

var _blog = require('../../models/blog.model');

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @function getBlog
 * @description  function to get blogs
 */
var getBlog = function getBlog(req, res, next) {
    var blogParam = req.params._id === 'all' ? {} : req.params; //To Do
    _blog2.default.find(blogParam).sort({ createdAt: -1 }).exec(function (err, blogs) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            blogs: blogs
        });
    });
};

/**
 * @function postBlog
 * @description  function to post blog
 */
var postBlog = function postBlog(req, res, next) {
    var _req$body = req.body,
        blog_title = _req$body.blog_title,
        blog_date = _req$body.blog_date,
        blog_author = _req$body.blog_author,
        blog_content = _req$body.blog_content,
        blog_views = _req$body.blog_views;


    var blog = new _blog2.default({
        blog_title: blog_title,
        blog_date: blog_date,
        blog_author: blog_author,
        blog_content: blog_content,
        blog_views: blog_views
    });

    blog.save(function (err, data) {
        if (err) {
            next(err);
        }
        res.status(200).json({
            success: true,
            blog_id: data._id,
            message: 'Blog added successfully!'
        });
    });
};

/**
 * @function updateBlog
 * @description  function to update blog
 */
var updateBlog = function updateBlog(req, res, next) {
    _blog2.default.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Blog updated successfully!'
        });
    });
};

/**
 * @function deleteBlog
 * @description  function to delete blog
 */
var deleteBlog = function deleteBlog(req, res, next) {
    _blog2.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully!'
        });
    });
};

exports.getBlog = getBlog;
exports.postBlog = postBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;