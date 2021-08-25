import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

class DevNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        job_title: "",
        job_description: "",
        job_salary: "",
        might_enjoy: "",
        img: " ",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    let { form } = this.state;
    form[e.target.name] = e.target.value;
    this.setState({ form: form });
  };

  handleSubmit = () => {
    this.props.createDevJob(this.state.form);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="page-body">
        <h3>This is the New</h3>
        <Form>
          <FormGroup>
            <Label for="job_title">Job Title</Label>
            <Input
              type="text"
              name="job_title"
              onChange={this.handleChange}
              value={this.state.form.job_title}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="job_description">Job Description</Label>
            <Input
              type="text"
              name="job_description"
              onChange={this.handleChange}
              value={this.state.form.job_description}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <Label for="job_salary"> Salary</Label>
            <Input
              type="text"
              name="job_salary"
              onChange={this.handleChange}
              value={this.state.form.job_salary}
            />
          </FormGroup>
          <FormGroup>
            <Label for="might_enjoy"> You Might Enjoy If..</Label>
            <Input
              type="text"
              name="might_enjoy"
              onChange={this.handleChange}
              value={this.state.form.might_enjoy}
            />
          </FormGroup>
          <FormGroup>
            <Label for="img"> Related Image</Label>
            <Input
              type="text"
              name="img"
              onChange={this.handleChange}
              value={this.state.form.img}
            />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Add New DevJob
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/devindex" />}
      </div>
    );
  }
}

export default DevNew;
