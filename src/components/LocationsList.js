import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard.js";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locations, setlocations] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setlocations(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      {/* <CharacterCard /> */}
      {locations.map(location => {
        return <LocationCard key={location.id} location={location} />;
      })}
    </section>
  );
}
