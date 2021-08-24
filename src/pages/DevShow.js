import React, { Component } from "react";
import { Card, CardTitle, Col, CardText, CardImg } from "reactstrap";

class DevShow extends Component {
  render() {
    return (
      <div className="showpage">
        <h3>This is the Show</h3>
        <Col sm="6">
          <CardImg
            top
            width="100%"
            src={this.props.job && this.props.job.img}
            alt="company picture"
          />
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
      </div>
    );
  }
}

export default DevShow;
