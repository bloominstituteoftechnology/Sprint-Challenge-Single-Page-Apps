import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard'
import {Card, Icon, Image} from 'semantic-ui-react'
import axios from 'axios';

function LocationsList() {

    const [locationList, setLocations] = useState([]);

    useEffect(() => {
        const getLocation = () => {
         axios.get('https://rickandmortyapi.com/api/character/')
         .then(function (response) {
        setLocations(response.data.results);
           console.log('in locations list' ,response.data.results);
         })
        }

       getLocation();
   
     }, [])
   
    
    return <section className='location-list grid-view'>
        {locationList.map( char => (
        <CharDetails key={char.id} char={char}/>
      ))}
      </section>
}


function CharDetails ({ char }) {

    const { image, name, species, origin } = char;

    return (
      <section className='character-list grid-view'>
        <div>
            <Card>
                 <h1>{char.name}</h1>

                <p>{char.location.name}</p> 
            </Card>
        </div>
      </section>
    );
  }
  
  
  export default LocationsList