import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard.js';

export default function LocationsList() {
    const [locAPI, locAPISet] = useState([])


    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/`)
      //https://rickandmortyapi.com/api/character/&format=json
      //https://swapi.co/api/people/?page=${page}&format=json
      //https://rickandmortyapi.com/api/character/?page=2&format=json
      .then(response => {
        locAPISet(response.data.results)
      })
      .catch(error =>{console.log('error in api request :(')})
    }, [])
  
    console.log(locAPI);
  
    return (
      <section className='location-list grid-view'>
        {locAPI.map((item) => <LocationCard key={item.id} 
                                                {...item}/>
  
        )}
  
      </section>
    );
}






//https://rickandmortyapi.com/api/location/
