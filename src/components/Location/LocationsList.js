import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationSearchForm from "./LocationSearchForm";

export default function LocationsList() {
    const [bob, setBob] = useState([]);
    const [search, setSearch] = useState("");
    const handleChangeLoc = event => {
        setSearch(event.target.value);
    }

    useEffect(() => {

        axios
            .get("https://rickandmortyapi.com/api/location/")
            .then(response => {
                console.log(`SUCCESSFUL LOCATION RESPONSE:`, response)
                const planets = response.data.results.filter(planet => {
                    planet.name
                    .toLowerCase()
                    .includes(search.toLowerCase)
                })
                setBob(planets)

            })
            .catch(error => {
                console.log(`SUCCESSFUL LOCATION RESPONSE:`, error)
            })
    }, [search])

    if(!bob){
        return <div>loading...</div>
    } else {
        return (
            <div>
                <h2>Location</h2>
                <LocationSearchForm 
                    bob={bob}
                    handleChange={handleChangeLoc}
                />
            </div>
        );
    }
}
