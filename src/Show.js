import React, { Component } from 'react';
import{Switch, Route, Link, Redirect} from 'react-router-dom';
import './Show.css';

export default class Show extends Component {
    render() {
        let parkID = this.props.match.params.id;
        let ParkData = this.props.parks.find(value =>
            value.id === parkID
        )
        // let parkDataImages = ParkData.images;
        //     parkDataImages.shift()
        //     console.log (parkDataImages)

        const parkImages = ParkData.images.map((value, index) =>  //map over 
            <div key={index}>
                <img src={value.url}></img>
            </div>
        )
        return (
            <div>
                <div>
                    <img className= 'mainImage' src={ParkData.images[0].url}></img>
                    <h5>{ParkData.name}</h5>
                </div>
                <h1>
                    {ParkData.fullName}
                </h1>

                <h3>{ParkData.description}</h3>

                <h2>Address</h2>
                <h4>{ParkData.addresses[0].line1}</h4>
                <h4>{ParkData.addresses[0].city}, {ParkData.addresses[0].line1}  {ParkData.addresses[0].postalCode} </h4>

                <h2>Directions</h2>
                <h4>{ParkData.directionsInfo} </h4>

                <div>
                    {/* <img src={ParkData.images[1].url}></img>
                <img src={ParkData.images[2].url}></img>
                <img src={ParkData.images[3].url}></img> */}
                    {parkImages} 
                </div>

                <div>
                <form action={ParkData.url}>
                    <button type='submit'>Read More</button>
                </form>
                </div>

                 <div>   
                <Link to='/'>
                    <h3>Back to Park List</h3>
                </Link>
                </div>
            </div>
        );
    }
}