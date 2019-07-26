import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

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
    function onSearch(query) {
      axios.get(`https://rickandmortyapi.com/api/character/?name=${query.name}`)
        .then(res => {
          setCharacters(res.data.results);
          console.log('Cool Deal', res.data.results)
        })
        .catch(error => {
          console.log('Uh Oh!',error)
        });
    }
    return (
    <section className='character-list grid-view'>
       <SearchForm onSearch={onSearch}/>
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
