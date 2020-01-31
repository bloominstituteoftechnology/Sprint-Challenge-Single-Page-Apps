import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";

export default function LocationsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        console.log(response);
        setData(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="location-list">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Search">
        <button>Search Characters</button>
      </Link>
      {data.map((data, i) => (
        <LocationCard data={data} key={i} />
      ))}
    </section>
  );
}
