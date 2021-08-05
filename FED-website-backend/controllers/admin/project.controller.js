import Projects from '../../models/project.model';
import { sendResponse } from '../../generic.utils';
 
const getProject = (req, res, next) => {
    Projects.find({}, function (err, projects) {
        if(err) { 
            return next(err);
        }
        sendResponse(res, 200, {
            projects
        }); 
    }); 
}

const postProject = (req, res, next) => {
    const {
        project_category,
        project_name,
        project_start_date,
        project_manager,
        project_desc,
        project_architect,
        brands,
        overall_status,
        tech_stack,
        git,
        jira,
        command_line,
        keywords,
        creative,
        tech_doc,
        useful_links
    } = req.body;


    const project = new Projects({
        project_category,
        project_name,
        project_start_date,
        project_manager,
        project_desc,
        project_architect,
        brands,
        overall_status,
        tech_stack,
        git,
        jira,
        command_line,
        keywords,
        creative,
        tech_doc,
        useful_links
    });
    project.save(function (err, data) {
        if (err) {
            next(err); 
        }
        sendResponse(res, 200, {
            project_id: data._id,
            message: 'Project is successfully added!'
        }); 

    });
    
}

const updateProject = (req, res, next) => { 
    
    const {
        _id,
        project_category,
        project_name,
        project_start_date,
        project_manager,
        project_desc,
        project_architect,
        brands,
        overall_status,
        tech_stack,
        git,
        jira,
        command_line,
        keywords,
        creative,
        tech_doc,
        useful_links
    } = req.body;

    Projects.findById(_id, (err, project) => {
        if (err) {
            return next(err); 
        } 
        let updatedProject = {
            project_category,
            project_name,
            project_start_date,
            project_manager,
            project_desc,
            project_architect,
            brands,
            overall_status,
            tech_stack,
            git,
            jira,
            command_line,
            keywords,
            creative,
            tech_doc,
            useful_links
        }
        
        //Notify mongodb of the changes as it keeps track of modified version
        Object.keys(updatedProject).map(key => {
            project[key] = updatedProject[key]; 
            project.markModified(key);
        });

        project.save((err)=>{
            if(err){
                return next(err); 
            }
            sendResponse(res, 200, {
                message: 'Project updated!'
            }); 
        });
        
    })
}

const deleteProject = (req, res, next) => {
    const { id } = req.params;

    Projects.findByIdAndDelete(id, (err, project) => {
        if (err) {
            return next(err); 
        } 
        sendResponse(res, 200, { 
            message: 'Project deleted!'
        }); 
    })
}

export {
    getProject,
    postProject,
    updateProject,
    deleteProject
};