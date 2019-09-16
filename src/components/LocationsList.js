import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';
/* set the locations to the location api data request and render state */
export default function LocationsList() {
    const [locations, setLocation] = useState([]);

    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location')
      .then(response => {
        console.log(response.data.results)
        setLocation(response.data.results)
      })
      .catch(err => {
        console.log(err)
      });
    }, []);
    
/* return div with mapped locations rendered to client route page through card function */  
     return (
      <div className="location-list grid-view">

        {locations.map(location => 
          <LocationCard 
            name={location.name} 
            type={location.type} 
            dimension={location.dimension} 
            residents={location.residents} 
            key={location.id} 
          />
          )}
      </div>
     );
};
