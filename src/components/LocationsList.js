import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(response => {
       // console.log("DATA:", response.data.results);
      setLocation(response.data.results);
    })
    .catch(error => {
      console.log("ERROR", error);
    });
}, []);

return (
  <section className="location-list grid-view">
    <LocationCard locationData={location} />
  </section>
);