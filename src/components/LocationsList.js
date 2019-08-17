import React, { useEffect, useState } from 'react';
import LocationCard from "./LocationCard"
import Axios from 'axios';
export default function LocationsList() {

// Location 





 const [theLocation, setTheLocation] = useState();

  useEffect(() => {
    

    Axios // Axios call
      
    .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
       
        setTheLocation(response.data.results);
      
      })
      .catch(error => {
      
        console.error("Another error? Damn.....", error);
      
      });



  }, [])


  //console.log(location)
  

  // Location validation
  if (!theLocation){
    return (<div>Loading......</div>)
  }

  else{
    return    (
    
      <section className='location-list grid-view'>
      <div className='theLocations'>{theLocation.map((onelocation) => <LocationCard tileData = {onelocation}/>)} </div>
    </section> )

  };
  
};
