import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, CardImg } from "reactstrap";

class DevIndex extends Component {
  render() {
    return (
      
      <div className="index">
        <h3>This is the index</h3>
        <br />
        <Col sm="6">
          {this.props.jobs &&
            this.props.jobs.map((job) => {
              return (
                <Card
                  className="indexCards"
                  style={{
                    backgroundColor: "#333",
                    borderColor: "#989",
                    height: "130px",
                    width: "500px",
                    borderRadius: "100px 10px ",
                    fontFamily: "sans-serif",
                    fontSize: "35px",
                    textAlign: "match-parent",
                    padding: "100px",
                    margin: "2px",
                  }}
                  body
                  key={job.id}
                >
                  <CardTitle>
                    <NavLink to={`/devshow/${job.id}`}>{job.job_title}</NavLink>
                  </CardTitle>
                </Card>
              );
            })}
        </Col>
      </div>
    );
  }
}

export default DevIndex;
