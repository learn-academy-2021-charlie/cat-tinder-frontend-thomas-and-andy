import React, { Component } from "react";
import { Jumbotron } from 'reactstrap'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home-intro">WELCOME TO DEV MATCH!</h1>
        <br/>
        <br/>
      <Jumbotron>
       <h1 className="home-text">DevMatch is an app for helping new developers searching for a position that would best fit them, we provide a detailed job description a salary and some attributes for a person who might enjoy the specific job. Entering the world of development can be a very confusing task and we are here to help you through this challenging time! </h1>
      </Jumbotron>
      </div>
    );
  }
}

export default Home;
