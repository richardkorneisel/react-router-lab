import React, { Component } from 'react';
import './App.css';
import{Switch, Route, Link, Redirect, Router} from 'react-router-dom'; //Added
import Homepage from "./Homepage";
import Show from "./Show";

class App extends Component {
  constructor(props) {    //Set state to be equal to parks
    super(props)
    this.state = { 
      parks: this.props.parks  // have to have props in super to be able to use later in app
    }                           // 
  }
  
  render() {
    // console.log(this.props.parks)  // shows array objects from data parks.json
    console.log(this.state)  // pulling from this.state = to get list of objects
    return (
      <div>
        <Link to='/'>
          <h1>National Parks List</h1>
        </Link>
        {/* <Route path="/" component={Homepage} {...this.state}>  
        </Route> */}
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Homepage parks={this.state} {...routerProps} />
          }>
          </Route>
          <Route path='/park/:id' render={(routerProps) =>  // use router not component to get all attributes
            <Show parks={this.state} {...routerProps} />
          }>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
