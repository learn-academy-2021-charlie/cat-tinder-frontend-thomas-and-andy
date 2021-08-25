import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DevIndex from "./pages/DevIndex";
import DevShow from "./pages/DevShow";
import DevNew from "./pages/DevNew";
import DevEdit from "./pages/DevEdit";
import NotFound from "./pages/NotFound";
import jobs from "./mockJobs";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jobs: jobs,
    };
  }
createDevJob = (newDevJob) =>{
  console.log(newDevJob)
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
              return <DevShow job={job} />;
            }}
          />
          <Route path="/devnew" render={(props) => <DevNew createDevJob={this.createDevJob} />} />
          <Route path="/devedit" component={DevEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
