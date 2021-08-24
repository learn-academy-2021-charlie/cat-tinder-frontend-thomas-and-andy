import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col } from "reactstrap";

class DevIndex extends Component {
  render() {
    return (
      <>
        <h3>This is the index</h3>
        <br />
        <Col sm="6">
          {this.props.jobs &&
            this.props.jobs.map((job) => {
              return (
                <Card body key={job.id}>
                  <CardTitle>
                    <NavLink to={`/devshow/${job.id}`}>{job.job_title}</NavLink>
                  </CardTitle>
                </Card>
              );
            })}
        </Col>
      </>
    );
  }
}

export default DevIndex;
