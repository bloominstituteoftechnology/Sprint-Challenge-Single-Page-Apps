import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationsCard from './LocationCard';


export default function LocationsList() {

    const [location, setLocation] = useState([])

  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
          console.log('location data:', res.data.results);
          setLocation(res.data.results);
      })
      .catch(err => {
          console.error(err);
    }); 
}, []);

return ( 
    <section className='episode-list grid-view'>
        {location.map(local  => {
            return <LocationsCard key={local.id} local={local} />;
        })}
    </section>
)


}



