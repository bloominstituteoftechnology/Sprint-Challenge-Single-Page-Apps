import React from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('%c Error Caught!', 'color: red; font-weight: bold;');
        console.log(err);
      })
  }, [])

  return (
    <section className='character-list grid-view'>
      {characters.map(character => {
        return <CharacterCard character={character} key={character.url} />
      })}
    </section>
  );
};
