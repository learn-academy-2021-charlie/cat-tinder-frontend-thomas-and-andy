import React, { Component } from "react";
import { Card, CardTitle, Col, CardText, CardImg } from "reactstrap";
import { NavLink } from "react-router-dom";

class DevShow extends Component {
  render() {
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
              Company: {this.props.job && this.props.job.job_company}
              <br />
              Salary: {this.props.job && this.props.job.job_salary}.
            </CardText>
          </Card>
        </Col>

        <NavLink to="/devindex">Index</NavLink>
      </div>
    );
  }
}

export default DevShow;
