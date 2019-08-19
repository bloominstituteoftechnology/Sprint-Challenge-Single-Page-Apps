import React, { useEffect, useState } from "react";
import axios from  'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios
          .get("https://rickandmortyapi.com/api/location/")
          .then(res => {
            console.log("Location is working:", res.data.results);
            setLocation(res.data.results);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);    
    
    return (
    <section>
        {location.map(location => {
        return (
            <LocationCard
            key = {location.id}
            name = {location.name}
            type = {location.type}
            dimension = {location.dimension}
            />
        );
        })}
    </section>
    );
}
