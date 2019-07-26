import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  const [characters, setCharacters ] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(res => {
                console.log('Yahtzee', res.data.results);
                setCharacters(res.data.results)
            })
            .catch(error => {
                console.error('No Go', error)
            })
    },[]);
  return (
    <section className='character-list grid-view'>
     {characters.map(character => (
              <CharacterCard 
              img={character.image}
              species={character.species}
              name={character.name}
              status={character.status}
              number={character.id} />
            ))}
    </section>
  );
     }
