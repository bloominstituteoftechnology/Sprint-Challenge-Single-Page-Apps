import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard'
import axios from 'axios';
export default function LocationsList() {
    const [locations, setLocations] = useState([]);


    useEffect(() => {
     axios.get('https://rickandmortyapi.com/api/location/')
       .then(results => {
         console.log('results', results.data.results)
         setLocations(results.data.results)
       })
   }, [])
 
    return <section className='character-list grid-view'>
       { locations.map(location => {
         return <LocationCard key={location.id} {...location} />;
       })}
     </section>
}
