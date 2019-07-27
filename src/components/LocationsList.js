import React, { useEffect, useState } from "react";

import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locationList, setLocationList] = useState(null);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
                setLocationList(response.data.results);
                console.log(response.data.results);
            });
    }, []);

    if (!locationList) {
        return (
            <div>
                <h1>Loading List...please wait</h1>
            </div>
        );
    }

    return (
        <section className="character-list grid-view">
            {locationList.map((location, i) => (
                <LocationCard
                key={i} 
                location={location}
                />
            ))}
        </section>
    );
}