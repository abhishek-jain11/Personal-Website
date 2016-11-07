import React, { Component } from 'react';
import Fetch from 'react-fetch'
import logo from './logo.svg';

import './App.css';

var basic_info = {
'name': 'Abhishek Jain',
'address': '2353 Portland Street, #19, LA, CA',
'linkedIn': 'Abhishek-jain11',
'github': 'Abhishek-jain11',
'email': 'jain136@usc.edu'
}


class Header extends Component{

  render() {
    console.log(this.props);
  return (
    <h1>{this.props.name}</h1>
    );
  }
}

class App extends Component {


  getInitialState(){
    return {
      basic_info
    }
  }

onSuccess(obj){
  console.log(obj);
}

  render() {
    // console.log(basic_info.name);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        Test2
        </p>
        <div>
          <Fetch url="http://localhost:3001/data/123" onSuccess={this.onSuccess} >
          <Header />
          </Fetch>
        </div>
      </div>

    );
  }
}


export default App;
