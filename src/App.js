import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DevIndex from "./pages/DevIndex";
import DevShow from "./pages/DevShow";
import DevNew from "./pages/DevNew";
import DevEdit from "./pages/DevEdit";
import NotFound from "./pages/NotFound";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
    };
  }
  componentDidMount() {
    this.readJob();
  }

  readJob = () => {
    fetch("http://localhost:3000/jobs")
      .then((response) => response.json())
      .then((jobArray) => this.setState({ jobs: jobArray }))
      .catch((errors) => console.log("jobs read errors:", errors));
  };

  createJob = (newJob) => {
    fetch("http://localhost:3000/jobs", {
      body: JSON.stringify(newJob),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((response) =>
      response
        .json()
        .then((payload) => this.readJob())
        .catch((errors) => console.log("job create errors", errors))
    );
  };

  updateJob = (editJob, id) => {
    fetch(`http://localhost:3000/jobs/${id}`, {
      body: JSON.stringify(editJob),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readJob())
    .catch(errors => console.log("job update errors:", errors))
  }

  deleteJob = (id) => {
    fetch(`http://localhost:3000/jobs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readJob())
    .catch(errors => console.log("job delete fetch errors:", errors))
  }

  render() {
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/devindex"
            render={(props) => <DevIndex jobs={this.state.jobs} />}
          />
          <Route
            path="/devshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let job = this.state.jobs.find((job) => job.id === +id);
              return <DevShow job={job} deleteJob={this.deleteJob}/>
            }}/>
          <Route
            path="/devnew"
            render={(props) => <DevNew createJob={this.createJob} />}
          />
          <Route
            path={"/devedit/:id"}
            render={(props) => {
              let id = props.match.params.id;
              let job = this.state.jobs.find((job) => job.id === +id);
              return <DevEdit updateJob={this.updateJob} job={job} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
