import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setlocations] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                console.log('Yahtzee', res.data.results);
                setlocations(res.data.results)
            })
            .catch(error => {
                console.error('No Go', error)
            })
    },[]);
  return (
    <section className='location-list grid-view'>
     {locations.map(location => (
              <LocationCard 
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              residents={location.residents}/>
              
            ))}
    </section>
  );
     }

