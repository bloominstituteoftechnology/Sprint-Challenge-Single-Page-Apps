import React, { useEffect, useState } from "react";
import axios from "axios"

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log(response);
            const location = response.data.results
            setLocations(location)
        })
        .catch(error => {
            console.log("Wubba Lubba DubDub", error);
        });
    }, []);


    return (
        <div>
            {locations.map(object => {
                return <div key = {object.name} name = {object.name} type = {object.type} dimension = {object.dimension} />;
            })}
        </div>
    );
}
