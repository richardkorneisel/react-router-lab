import React, { Component } from 'react';
import{Switch, Route, Link, Redirect} from 'react-router-dom'; //Added

export default class Homepage extends Component {
    render() {
        // console.log(this.props) // Array not coming to home page need state or route
        const parksList = this.props.parks.parks.map((value, index) =>  //map over this.props.parks, output = to parksList, pass through two parameters, value(park) and index to keep track off
            <div key={index}>
                <h2>{value.name}</h2>
                <Link to={`/park/${value.id}`}>  
                    <img src={value.images[0].url}></img>
                </Link>
            </div>
        )
        return (
            <div>
                <h1>Homepage</h1>
                {parksList}
            </div>
        );
    }
}