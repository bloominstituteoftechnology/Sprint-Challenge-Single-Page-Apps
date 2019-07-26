import axios from "axios";
import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard.js";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(res => {
        console.log("Location is working:", res.data.results);
        setLocation(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <section className="grid-view">
      {location.map((loc, index) => (
        <LocationCard
          key={loc.id}
          name={loc.name}
          type={loc.type}
          dimension={loc.dimension}
        />
      ))}
    </section>
  );
}
