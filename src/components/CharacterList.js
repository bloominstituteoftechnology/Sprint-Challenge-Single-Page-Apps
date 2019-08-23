import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

const CharacterList = function (props) {
console.log(props);

  // TODO: Add useState to track data from useEffect

const [characters, setCharacters] = useState([])

useEffect(() => {

    // TODO: Add AJAX/API Request here - must run in `useEffect`

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

 const getCharacters = () => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
    setCharacters(response.data.results);
})

    .catch(error => {
    console.error('There was a server error', error);
 });

}

  getCharacters();
}, []);

return (
    <section className='character-list grid-view'>
   <div className='card-wrapper'>
   {characters.map(data => (
   
 <CharacterCard key={data.id}
      picture={data.image}
      name={data.name}
      status={data.status}
      species={data.species}
      origin={data.origin.name} />

))}
 </div>
</section>
);
}

export default CharacterList;