import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
import "./forms.scss";
function JiraBestPractices() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="heading">Heading</Label>
        <input
          name="heading"
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.heading && "Please enter Heading."}
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <textarea
          name="description"
          ref={register({ required: true })}
          className="form-control"
        ></textarea>
        {errors.description && "Please enter Description."}
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
      <input type="submit" />
    </form>
  );
}
export default JiraBestPractices;
