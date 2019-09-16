import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LocationsList = () => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(resloc => {
      setLocations(resloc.data.results)
    })
    .catch(error => {
      console.log('Location Error', error)
    })
  }, []);

  return (
    <section className='location-list'>
      {locations.map(location => (
        <div className='locations' key={location.id}>
          <h2>{location.name}</h2>
          <p>{location.type} {location.dimension}</p>
        </div>
      ))}
    </section>
  );
}

export default LocationsList;
