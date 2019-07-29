import React, { useEffect, useState } from 'react';
import Axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
   const [locations, setLocation] = useState([]);
   
   useEffect(() => {
       Axios.get('https://rickandmortyapi.com/api/location/')
       .then(res => {
           console.log(res.data)
           setLocation(res.data.results);
       })

       .catch(err =>{
           console.log(err);
       });
   }, [locations]);

   return (
       <section className="location-list grid-view">
           {locations.map(location => (
            <LocationCard key={location.id} location={location}/>
           ))}
       </section>
   )

}

