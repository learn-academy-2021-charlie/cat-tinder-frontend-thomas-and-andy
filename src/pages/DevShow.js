import React, { Component } from "react";
import { Card, Button, CardTitle, Col, CardText, CardImg } from "reactstrap";
import { NavLink } from "react-router-dom";

class DevShow extends Component {
  render() {
    let {job} = this.props
    return (
      <div className="page-body">
      <br/>
        <h3 className="show-intro">{this.props.job && this.props.job.job_title}</h3>
        <br/>
        <Col sm="6">
          <Card className="cards">
            <CardImg
              top
              width="100%"
              src={this.props.job && this.props.job.img}
              alt="company picture"
            />
            <CardTitle className="card-title"> {this.props.job && this.props.job.job_title}</CardTitle>
            <CardText className="card-text">
              <h3 className="card-descriptions">Description </h3> {this.props.job && this.props.job.job_description}
              <br />
              <h3 className="card-descriptions">Might enjoy </h3> {this.props.job && this.props.job.might_enjoy}
              <br />
               <h3 className="card-descriptions">Salary</h3> {this.props.job && this.props.job.job_salary}.
            </CardText>
          </Card>
        </Col>
        <NavLink to={`/devedit/${this.props.job && this.props.job.id}`}>
          <Button>Edit Job Profile</Button>
        </NavLink>
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
