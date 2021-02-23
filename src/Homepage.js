import React, { Component } from 'react';
import{Switch, Route, Link, Redirect} from 'react-router-dom'; //Added
import './Home.css';

export default class Homepage extends Component {
    render() {
        // console.log(this.props) // Array not coming to home page need state or route
        const parksList = this.props.parks.map((value, index) =>  //map over this.props.parks, output = to parksList, pass through two parameters, value(park) and index to keep track off
            <div key={index}>
                <div class="overlay-image">
                    <p>{value.name}</p>
                </div>
                <Link to={`/park/${value.id}`}>
                    <img src={value.images[0].url}></img>
                </Link>
            </div>
        )
        return (
            <div class="container">
               {parksList}
            </div>
        );
    }
}