import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
        const getLocations = () => {
            Axios.get('https://rickandmortyapi.com/api/location')
            .then(res => {
                console.log(res.data.results);
                setLocations(res.data.results);
            }).catch(err => {
                console.log('Server Error: ', err);
            })
        }
        getLocations();
    }, []);

    return(
        <div className="locations-list grid-view">
            {locations.map(location => (
                <LocationCard
                    key={location.id}
                    location={location}
                />
            ))}
        </div>
    )
}

