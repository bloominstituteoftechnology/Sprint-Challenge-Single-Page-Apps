import React, { useEffect, useState } from "react";

import axios from "axios";
import LocationCard from "./LocationCard";
import {Link} from 'react-router-dom';

export default function LocationsList() {


const [locations, setLocations] = useState([])

useEffect(() => {
axios
.get('https://rickandmortyapi.com/api/location/')
.then(response => {
  setLocations(response.data.results);
  console.log(response);
})
.catch(error => {
  console.error(error);
});



}, []);

 return (
    <section className="Location-list grid-view">


        {locations.map(location => {
         return(
          <Link to={`/components/${location.id}`}>
          <LocationCard key={location.id} locat={location} />
           </Link>
         )
         })} 

    </section>
 );

}