import React, { useEffect, useState } from "react";
import axios from 'axios'

function LocationList () {
    const [locationList, setLocationList] = useState([])
    
    useEffect(() => {
        
        const getLocationList = () => {
            axios
                .get("https://rickandmortyapi.com/api/location")
                .then(response => {
                    setLocationList(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        getLocationList();
    }, [name]);


    return (
        <section className="location-list grid-view">
            {locationList.map(location => (
                <LocationCard key={location.name} location={location} />
            ))}
        </section>
    );
}

export default LocationList;