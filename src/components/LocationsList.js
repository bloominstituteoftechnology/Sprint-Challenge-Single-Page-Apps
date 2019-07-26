import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [location, setLoaction] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log("location data:", res.data.results);
        setLoaction(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      {location.map(local => {
        return <LocationCard key={local.id} local={local} />;
      })}
    </section>
  );
}
