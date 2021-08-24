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
  render() {
    console.log(this.state.jobs);
    return (
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/devindex" component={DevIndex} />
          <Route path="/devshow" component={DevShow} />
          <Route path="/devnew" component={DevNew} />
          <Route path="/devedit" component={DevEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
