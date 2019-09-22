import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import LocationCard from "./LocationCard"
import { Button } from "reactstrap"

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
            }, []);

        return (

            <div className="character-list">
                {locations.map(object => {
                    return <div key={object.name} name={object.name} type={object.type} dimension={object.dimension} />;
                })}
            </div>

        );
    })
}
