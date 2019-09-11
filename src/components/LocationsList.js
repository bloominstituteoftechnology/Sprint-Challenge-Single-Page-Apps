import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card} from 'semantic-ui-react';

export default function LocationsList(props) {
    const [locations, setLocation] = useState([])
    const id = 
    useEffect(() => {
        const getLocation = () => {
            axios
                .get('https://rickandmortyapi.com/api/location/')
                .then(res => {
                    console.log(res)
                    setLocation(res.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }
        getLocation();
    }, []);

    return (
        console.log(locations),
        <div className='location-list'>
            {locations.map(location => (
                <LocationDetails key={id} location={location} />
            ))}
        </div>
    );
}

function LocationDetails({location}){
    return(
        <Card className='location-card'>
            <h1>{location.name}</h1>
            <p>{location.type}</p>
        </Card>
    );
}
