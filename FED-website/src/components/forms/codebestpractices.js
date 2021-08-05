import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useForm } from "react-hook-form";
import "./forms.scss";
function CodeBestPractices() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="category">Category</Label>
        <select
          name="category"
          ref={register({ required: true })}
          className="form-control"
        >
          <option>HTML</option>
          <option>CSS</option>
          <option>Java Script</option>
        </select>
        {errors.category && "Please slect Category."}
      </FormGroup>
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
        <Label for="code">Code</Label>
        <textarea
          name="code"
          ref={register({ required: true })}
          className="form-control"
        ></textarea>
        {errors.code && "Please enter Code."}
      </FormGroup>
      <input type="submit" />
    </form>
  );
}
export default CodeBestPractices;
