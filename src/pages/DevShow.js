import React, { Component } from "react";
import { Card, CardTitle, Col, CardText, CardImg } from "reactstrap";

class DevShow extends Component {
  render() {
    return (
      <>
      <h3>This is the Show</h3>
        <Col sm="6">
          <Card body>
            <CardTitle> {this.props.job && this.props.job.job_title}</CardTitle>
            <CardText>
              Description {this.props.job && this.props.job.job_description}
              <br />
              Company {this.props.job && this.props.job.job_company}
              <br />
              Salary {this.props.job && this.props.job.job_salary}.
            </CardText>
          </Card>
        </Col>
      </>
    );
  }
}

export default DevShow;
