import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import {NavLink,} from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <Jumbotron className="jumbotron">
          <h1 className="display-3">
            The Job you are looking for is not found!
          </h1>
          <p className="jumbo-button">
          <NavLink href="/">
            <Button color="primary">Back Home</Button>
            </NavLink>
          </p>
        </Jumbotron>
        <body>
      <div class="text-container">
        <h1>Not Found</h1>
      </div>
      </body>
      </div>
    );
  }
}

export default NotFound;
