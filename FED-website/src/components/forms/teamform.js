import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
import "./forms.scss";
function TeamForm() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <input
          name="firstName"
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.firstName && "Please enter First Name."}
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <input
          name="lastName"
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.lastName && "Please enter Last Name."}
      </FormGroup>
      <FormGroup>
        <Label for="designation">Designation</Label>
        <input
          name="designation"
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.designation && "Please enter designation."}
      </FormGroup>
      <FormGroup>
        <Label for="imageUpload">Image Uplaoad</Label>
        <input
          name="imageUpload"
          type="file"
          accept="image/*"
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.imageUpload && "Please uplaod an image."}
      </FormGroup>
      <FormGroup>
        <Label for="award">Award</Label>
        <div class="form-check">
          <label class="form-check-label" for="check1">
            <input
              type="checkbox"
              class="form-check-input"
              id="award1"
              name="award1"
              value="something"
            />
            Award 1
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label" for="check2">
            <input
              type="checkbox"
              class="form-check-input"
              id="award2"
              name="award2"
              value="something"
            />
            Award 2
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              id="award3"
              name="award3"
              value="something"
            />
            Award 3
          </label>
        </div>

        {errors.award && "Please slect Awards."}
      </FormGroup>
      <input type="submit" />
    </form>
  );
}
export default TeamForm;
