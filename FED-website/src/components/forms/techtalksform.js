import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useForm } from 'react-hook-form';
import './forms.scss'
function TechTalksForm() {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            <Label for="heading">Heading</Label>
            <input name="heading" ref={register({required:true})} className="form-control"/>
            {errors.heading && 'Please enter Heading.'}
      </FormGroup>
      <FormGroup>
            <Label for="presenterName">Presenter Name</Label>
            <input name="presenterNamen" ref={register({required:true})} className="form-control"/>
            {errors.presenterName && 'Please enter Presenter Name.'}
      </FormGroup>
      <FormGroup>
            <Label for="description">Description</Label>
            <textarea name="description" ref={register({required:true})} className="form-control"></textarea>
            {errors.description && 'Please enter Description.'}
      </FormGroup>
      <FormGroup>
            <Label for="status">Status</Label>
            <select name="status" ref={register({required:true})} className="form-control">
                <option>Completed</option>
                <option>Upcoming</option>
            </select>
            {errors.status && 'Please slect status.'}
      </FormGroup>
      <FormGroup>
            <Label for="courseMaterial">Course Material</Label>
            <input name="courseMaterial" ref={register({required:true})} className="form-control"/>
            {errors.courseMaterial && 'Please enter Heading.'}
      </FormGroup>
      <input type="submit" />
    </form>
  );
}
export default TechTalksForm;