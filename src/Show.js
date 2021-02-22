import React, { Component } from 'react';
import{Switch, Route, Link, Redirect} from 'react-router-dom';

export default class Show extends Component {
    render() {
        let parkID = this.props.match.params.id;
        let ParkData = this.props.parks.parks.find(value =>
            value.id === parkID
        )
        return (
            <div>
                {ParkData.name}
            </div>
        );
    }
}