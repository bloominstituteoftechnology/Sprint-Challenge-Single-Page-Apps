import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard.js";

export default function LocationsList(props) {
    const [locations, setLocations] = useState();
    
   useEffect(() => {
       axios
       .get('https://rickandmortyapi.com/api/location/')
       .then(response => {
        //    console.log(response)
           setLocations(response.data.results)
       })
       .catch(error => {
           console.log('Server Error: ', error)
       })
   }, []);

   if (!locations) {
       return(
           <div>Loading...</div>
       )
   }
//    console.log(locations)
   return (
       <div>
           {locations.map(location =>
            <LocationCard key={location.id} location={location} />
            )}
       </div>
   )
}
