import React, { Component } from "react";
import { Card, Button, CardTitle, Col, CardText, CardImg } from "reactstrap";
import { NavLink } from "react-router-dom";

class DevShow extends Component {
  render() {
    let {job} = this.props
    return (
      <div className="page-body">
        <h3>This is the Show</h3>
        <Col sm="6">
          <Card className="cards">
            <CardImg
              top
              width="100%"
              src={this.props.job && this.props.job.img}
              alt="company picture"
            />
            <CardTitle> {this.props.job && this.props.job.job_title}</CardTitle>
            <CardText>
              Description: {this.props.job && this.props.job.job_description}
              <br />
              Might enjoy {this.props.job && this.props.job.might_enjoy}
              <br />
              Salary: {this.props.job && this.props.job.job_salary}.
            </CardText>
          </Card>
        </Col>
        <NavLink to={`/devedit/${this.props.job && this.props.job.id}`}>
          <Button>Edit Job Profile</Button>
        </NavLink>
        <br/>
        <NavLink to={"/devindex"}> 
        <Button onClick={ () => this.props.deleteJob(job.id) }>
              Delete Job Profile
            </Button>
            </NavLink>
      </div>
    );
  }
}

export default DevShow;
