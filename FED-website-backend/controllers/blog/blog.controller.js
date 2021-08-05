import Blogs from '../../models/blog.model';

/**
 * @function getBlog
 * @description  function to get blogs
 */
const getBlog = (req, res, next) => {
    const blogParam = (req.params._id === 'all') ? {} : req.params; //To Do
    Blogs.find(blogParam).sort({ createdAt: -1 }).exec(function (err, blogs) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            blogs: blogs
        });
    });
}

/**
 * @function postBlog
 * @description  function to post blog
 */
const postBlog = (req, res, next) => {
    const {
        blog_title,
        blog_date,
        blog_author,
        blog_content,
        blog_views
    } = req.body;

    const blog = new Blogs({
        blog_title,
        blog_date,
        blog_author,
        blog_content,
        blog_views
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
}

/**
 * @function updateBlog
 * @description  function to update blog
 */
const updateBlog = (req, res, next) => {
    Blogs.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Blog updated successfully!'
        });
    });
}

/**
 * @function deleteBlog
 * @description  function to delete blog
 */
const deleteBlog = (req, res, next) => {
    Blogs.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully!'
        });
    });
}

export {
    getBlog,
    postBlog,
    updateBlog,
    deleteBlog
};