import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <Jumbotron className="jumbotron">
          <h1 className="display-3">
            The Job you are looking for is not found!
          </h1>
          <p className="jumbo-button">
            <Button color="primary">Back Home</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default NotFound;
