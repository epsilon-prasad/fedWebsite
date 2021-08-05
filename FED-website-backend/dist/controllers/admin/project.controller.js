'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteProject = exports.updateProject = exports.postProject = exports.getProject = undefined;

var _project = require('../../models/project.model');

var _project2 = _interopRequireDefault(_project);

var _generic = require('../../generic.utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getProject = function getProject(req, res, next) {
    _project2.default.find({}, function (err, projects) {
        if (err) {
            return next(err);
        }
        (0, _generic.sendResponse)(res, 200, {
            projects: projects
        });
    });
};

var postProject = function postProject(req, res, next) {
    var _req$body = req.body,
        project_category = _req$body.project_category,
        project_name = _req$body.project_name,
        project_start_date = _req$body.project_start_date,
        project_manager = _req$body.project_manager,
        project_desc = _req$body.project_desc,
        project_architect = _req$body.project_architect,
        brands = _req$body.brands,
        overall_status = _req$body.overall_status,
        tech_stack = _req$body.tech_stack,
        git = _req$body.git,
        jira = _req$body.jira,
        command_line = _req$body.command_line,
        keywords = _req$body.keywords,
        creative = _req$body.creative,
        tech_doc = _req$body.tech_doc,
        useful_links = _req$body.useful_links;


    var project = new _project2.default({
        project_category: project_category,
        project_name: project_name,
        project_start_date: project_start_date,
        project_manager: project_manager,
        project_desc: project_desc,
        project_architect: project_architect,
        brands: brands,
        overall_status: overall_status,
        tech_stack: tech_stack,
        git: git,
        jira: jira,
        command_line: command_line,
        keywords: keywords,
        creative: creative,
        tech_doc: tech_doc,
        useful_links: useful_links
    });
    project.save(function (err, data) {
        if (err) {
            next(err);
        }
        (0, _generic.sendResponse)(res, 200, {
            project_id: data._id,
            message: 'Project is successfully added!'
        });
    });
};

var updateProject = function updateProject(req, res, next) {
    var _req$body2 = req.body,
        _id = _req$body2._id,
        project_category = _req$body2.project_category,
        project_name = _req$body2.project_name,
        project_start_date = _req$body2.project_start_date,
        project_manager = _req$body2.project_manager,
        project_desc = _req$body2.project_desc,
        project_architect = _req$body2.project_architect,
        brands = _req$body2.brands,
        overall_status = _req$body2.overall_status,
        tech_stack = _req$body2.tech_stack,
        git = _req$body2.git,
        jira = _req$body2.jira,
        command_line = _req$body2.command_line,
        keywords = _req$body2.keywords,
        creative = _req$body2.creative,
        tech_doc = _req$body2.tech_doc,
        useful_links = _req$body2.useful_links;


    _project2.default.findById(_id, function (err, project) {
        if (err) {
            return next(err);
        }
        var updatedProject = {
            project_category: project_category,
            project_name: project_name,
            project_start_date: project_start_date,
            project_manager: project_manager,
            project_desc: project_desc,
            project_architect: project_architect,
            brands: brands,
            overall_status: overall_status,
            tech_stack: tech_stack,
            git: git,
            jira: jira,
            command_line: command_line,
            keywords: keywords,
            creative: creative,
            tech_doc: tech_doc,
            useful_links: useful_links

            //Notify mongodb of the changes as it keeps track of modified version
        };Object.keys(updatedProject).map(function (key) {
            project[key] = updatedProject[key];
            project.markModified(key);
        });

        project.save(function (err) {
            if (err) {
                return next(err);
            }
            (0, _generic.sendResponse)(res, 200, {
                message: 'Project updated!'
            });
        });
    });
};

var deleteProject = function deleteProject(req, res, next) {
    var id = req.params.id;


    _project2.default.findByIdAndDelete(id, function (err, project) {
        if (err) {
            return next(err);
        }
        (0, _generic.sendResponse)(res, 200, {
            message: 'Project deleted!'
        });
    });
};

exports.getProject = getProject;
exports.postProject = postProject;
exports.updateProject = updateProject;
exports.deleteProject = deleteProject;