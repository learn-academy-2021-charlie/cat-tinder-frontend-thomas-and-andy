import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col, CardImg } from "reactstrap";

class DevIndex extends Component {
  render() {
    return (
      <div className="index">
      <br/>
      <br/>
      <br/>
      <br/>
        <h3 className="index-intro">Dev Jobs</h3>
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
                    textAlign: "center",
                    padding: "95px",
                    margin: "2px",
                  }}
                  body
                  key={job.id}
                >
                  <CardTitle>
                    <NavLink  style={{color:"white", textDecoration:"none", fontFamily:"sans-serif",fontSize:"30px"}} to={`/devshow/${job.id}`}>{job.job_title}</NavLink>
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
