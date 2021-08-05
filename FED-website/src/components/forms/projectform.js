import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
import InputField from "../inputField/input";
import TagsInput from "../inputField/tags";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

function ProjectForm() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  const [addState, setState] = useState(false);

  const addInputfield = () => {
    setState(true);
  };

  return (
    <React.Fragment>
      <form>
        <FormGroup>
          <Label for="projectName">Project Name</Label>
          <input
            name="projectName"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.projectName && "Please enter Project Name."}
        </FormGroup>
        <FormGroup>
          <Label for="projectOverview">Project Overview</Label>
          <textarea
            name="projectOverview"
            ref={register({ required: true })}
            className="form-control"
          ></textarea>
          {errors.projectOverview && "Please enter Project Overview."}
        </FormGroup>
        <FormGroup>
          <Label for="projectWorkflow">Project Workflow</Label>
          <SunEditor />
          {errors.projectWorkflow && "Please enter Project Workflow."}
        </FormGroup>
        <FormGroup>
          <Label for="technology">Technology</Label>
          <input
            name="technology"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.technology && "Please enter Technology."}
        </FormGroup>
        <FormGroup>
          <Label for="frontEnd">Front End</Label>
          <TagsInput />
          {errors.frontEnd && "Please enter Front End Technology."}
        </FormGroup>
        <FormGroup>
          <Label for="backEnd">Back End</Label>
          <TagsInput />
          {errors.backEnd && "Please enter Back End Technology."}
        </FormGroup>
        <FormGroup>
          <Label for="others">Others</Label>
          <TagsInput />
          {errors.others && "Please enter Other Technology."}
        </FormGroup>
        <FormGroup>
          <Label for="artifacts">Artifacts</Label>
          <input
            name="artifacts"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.artifacts && "Please enter Artifacts."}
        </FormGroup>
        <FormGroup>
          <Label for="creative">Creative</Label>
          <input
            name="creative"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.creative && "Please enter Creative."}
        </FormGroup>
        <FormGroup>
          <Label for="gitRepo">GitRepo</Label>
          <input
            name="gitRepo"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.gitRepo && "Please enter GitRepo."}
        </FormGroup>
        <FormGroup>
          <Label for="jira">Jira</Label>
          <input
            name="jira"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.jira && "Please enter Jira."}
        </FormGroup>
        <FormGroup>
          <Label for="access">Tools</Label>
          <TagsInput />
          {errors.access && "Please enter Access."}
        </FormGroup>
        <FormGroup>
          <Label for="contactPersonName">Contact Person Name</Label>
          <input
            name="contactPersonName"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.contactPersonName && "Please enter Contact Person Name."}
        </FormGroup>
        <FormGroup>
          <Label for="contactPersonEmail">Contact Person Email</Label>
          <input
            name="contactPersonEmail"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.contactPersonEmail && "Please enter Contact Person Email."}
        </FormGroup>
        <FormGroup>
          <Label for="projectDuration">Project Duration</Label>
          <input
            name="projectDuration"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.projectDuration && "Please enter Project Duration."}
        </FormGroup>
        <FormGroup>
          <Label for="keywords">Keywords</Label>
          <TagsInput />
          {errors.keywords && "Please enter Keywords."}
        </FormGroup>
        <FormGroup>
          <Label for="status">Status</Label>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="onGoing"
                autocomplete="off"
              />{" "}
              On-going
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="completed"
                autocomplete="off"
              />{" "}
              Completed
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="onHold"
                autocomplete="off"
              />{" "}
              On-Hold
            </label>
          </div>
          {errors.status && "Please slect Status."}
        </FormGroup>
        <FormGroup>
          <Label for="projectManager">Project Manager</Label>
          <input
            name="projectManager"
            ref={register({ required: true })}
            className="form-control"
          />
          {errors.projectManager && "Please enter Project Manager."}
        </FormGroup>
        <input type="submit" onClick={handleSubmit(onSubmit)} />
      </form>
    </React.Fragment>
  );
}

export default ProjectForm;
