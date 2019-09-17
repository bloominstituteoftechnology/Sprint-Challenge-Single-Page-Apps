import React, { useEffect, useState } from "react";
import axios from 'axios'
import LocationCard from './LocationCard.js'

export default function EpisodeList() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          setLocations([...res.data.results]);
        })
        .catch(error => {
          console.log('error',error)
        })
  }, []);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
    <section className="location-list grid-view">
      {locations.map(location => (
        <LocationCard key={location.id} locations={location}/>
      ))}
    </section>
  );
}

