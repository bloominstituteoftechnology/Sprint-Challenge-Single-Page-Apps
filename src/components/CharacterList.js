import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard'
import {Card, Icon, Image} from 'semantic-ui-react'
import axios from 'axios';

function CharacterList ({props , char}) {
  const [charList, setCharList] = useState([])
  // TODO: Add useState to track data from useEffect
  useEffect(() => {

     const getChars = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(function (response) {
        setCharList(response.data.results);
        // console.log(response.data.results);
      })
     } 
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    getChars();

  }, [])

  return <section className='character-list grid-view'>
      {/* {console.log('char list', charList)} */}
      {charList.map( char => (
        <CharDetails key={char.id} char={char}/>
      ))}
      
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        
    </section>

}

function CharDetails ({ char }) {

  const { image, name, species, origin } = char;
  // console.log("filled id array", char.id);
  // console.log("filled name array", char.name);
  return (
    <section className='character-list grid-view'>
      <div>
        <Card>
          <h2>{char.name}</h2>
          <Image>
            <img src={char.image} alt="picture"/> 
          </Image>
          <p>{char.species} : {char.status}</p>
          <p>{char.origin.name}</p>
        </Card>

      </div>
    </section>
  );
}


export default CharacterList