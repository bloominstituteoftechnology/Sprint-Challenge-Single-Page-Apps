import React, { useEffect, useState } from "react";
import axios from 'axios';

import LocationCard from './LocationCard'

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://rickandmortyapi.com/api/location')
      .then(res => {
        setLocations(res.data.results);
        setIsLoading(false);    
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <section className="grid-view">
      {!isLoading ? locations.map(location => <LocationCard location={location} />) : (<p>Content is loading...</p>)}
    </section>
  );
}
