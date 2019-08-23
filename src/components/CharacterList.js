import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import CharacterCard from './CharacterCard';

export default function CharacterList() { 

const [character, setCharacter] = useState([]);

useEffect(() => { 
  axios 
 .get('https://rickandmortyapi.com/api/character/')
 
 .then(res => { 
    console.log('character data:', res.data.results); 
    setCharacter(res.data.results); 
}) 
.catch(error => { 
console.log(error);

}); 


}, []); 

return ( 
    <section className="character-list grid-view"> 
    {character.map(props => { 
    return <CharacterCard key={props.id} char={props} />; 
      })} 

    </section> 
  ); 

 }


