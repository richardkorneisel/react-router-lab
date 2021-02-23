import React, { Component } from 'react';
import './App.css';
import{Switch, Route, Link, Redirect, Router} from 'react-router-dom'; //Added
import Homepage from "./Homepage";
import Show from "./Show";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {    //Set state to be equal to parks
    super(props)
    this.state = { 
      parks: []   //this.props.parks  // have to have props in super to be able to use later in app
    }                           // 
  }
  componentDidMount = () => {
    axios.get("https://developer.nps.gov/api/v1/parks?api_key=pxxExebMZYJ9U9ixr6pNnkAapS0xdTenwgfcOw8b", {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        this.setState({
          parks: response.data.data
        })
      })
  }
  render() {
    // console.log(this.props.parks)  // shows array objects from data parks.json
    console.log(this.state.parks)  // pulling from this.state = to get list of objects
    return (
      <div>
        
        <Link to='/'>
          <h2>National Parks List</h2>
        </Link>
        {/* <Route path="/" component={Homepage} {...this.state}>  
        </Route> */}
        <Switch>
          <Route exact path='/' render={(routerProps) =>
            <Homepage {...this.state} {...routerProps} />
          }>
          </Route>
          <Route path='/park/:id' render={(routerProps) =>  // use router not component to get all attributes
            <Show {...this.state} {...routerProps} />
          }>
          </Route>
        </Switch>
        <footer>
          <h6>National Park Service</h6>
          <h3>U.S. Department of the Interior</h3>
        </footer>
      </div>
    );
  }
}


