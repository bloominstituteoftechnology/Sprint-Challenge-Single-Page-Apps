import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard.js'
import axios from 'axios'

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(`https://rickandmortyapi.com/api/location/`)
      .then((res) => {
        setLocations(res.data.results)
      })
      .catch((err) => {
        console.log('Error: ' + err)
      })

  }, [counter]);

  console.log(locations);

/*{ name, type, dimension, residents }*/

  return (
    <div className="locations-container">
      {locations.map(loc =>{
        return <LocationCard name={loc.name} type={loc.type} dimension={loc.dimension} residents={loc.residents.length}/>
      })}
    </div>
  );
}
