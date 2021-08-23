import './App.css'
import React, {Component} from 'react'
import Home from './pages/Home'
import Index from './pages/DevIndex'
import Show from './pages/DevShow'
import New from './pages/DevNew'
import Edit from './pages/DevEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
constructor(){
  super()
  this.state={

  }
}
  render(){
  return (
    <div className="App">
      <Header/>

      <Home/>
      <Index/>
      <Show/>
      <New/>
      <Edit/>
      <NotFound/>

      <Footer/>

    </div>
  );
}
}
export default App;
