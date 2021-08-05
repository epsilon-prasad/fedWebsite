import Helplink from '../../models/helplink.model';

/**
 * @function getHelplink
 * @description  function to get helplinks
 */
const getHelplink = (req, res, next) => {
    const helpLinkLimit = parseInt(req.params._limit);
    Helplink.find().sort({ createdAt: -1 }).limit(helpLinkLimit).exec(function (err, helplinks) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            helplinks: helplinks
        });
    });
}

/**
 * @function postHelplink
 * @description  function to post helplinks
 */
const postHelplink = (req, res, next) => {
    const {
        helplink_title,
        helplink_description,
        helplink_url
    } = req.body;

    const helplink = new Helplink({
        helplink_title,
        helplink_description,
        helplink_url
    });

    helplink.save(function (err, data) {
        if (err) {
            next(err);
        }
        res.status(200).json({
            success: true,
            helplink_id: data._id,
            message: 'Helplink added successfully!'
        });
    });
}

/**
 * @function updateHelplink
 * @description  function to update helplinks
 */
const updateHelplink = (req, res, next) => {
    Helplink.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Helplink updated successfully!'
        });
    });
}

/**
 * @function deleteHelplink
 * @description  function to delete helplinks
 */
const deleteHelplink = (req, res, next) => {
    Helplink.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            success: true,
            message: 'Helplink deleted successfully!'
        });
    });
}

export {
    getHelplink,
    postHelplink,
    updateHelplink,
    deleteHelplink
};