import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard"
import axios from "axios"


export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                console.log(res);
                const location = res.data.results
                setLocations(location)
            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <div className="character-list">
            {locations.map(object => {
                return <LocationCard key={object.location} image={object.image} name={object.name} type={object.type} dimension={object.dimension} />;
            })}
        </div>
    );
}
