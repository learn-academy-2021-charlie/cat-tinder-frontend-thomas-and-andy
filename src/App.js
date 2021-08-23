import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DevIndex from './pages/DevIndex'
import DevShow from './pages/DevShow'
import DevNew from './pages/DevNew'
import DevEdit from './pages/DevEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



class App extends Component {
constructor(){
  super()
  this.state={

  }
}
  render(){
  return (
    <Router>
      <Header/>

<Switch>
      <Home/>
      <DevIndex/>
      <DevShow/>
      <DevNew/>
      <DevEdit/>
      <NotFound/>
      </Switch>
      <Footer/>

      </Router>
  );
}
}
export default App;
