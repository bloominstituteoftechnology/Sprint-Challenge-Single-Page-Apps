import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard'
import axios from 'axios';
import Buttons from "./Buttons"

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(4)

  const pageUp = () => {
    setPage(page => page + 1);
    console.log('Page Up');
  }
  const pageDown = () => {
    setPage(page => page - 1);
    console.log('Page Down');
  }



  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(results => {
        setCharacters(results.data.results)
      });
  }, [page])

  return <section className='character-list grid-view'>
      { characters.map(character => {
        return <CharacterCard key={character.id} {...character} />;
      })}
      <Buttons
        pageUp={pageUp}
        pageDown={pageDown}
      />
    </section>

}
