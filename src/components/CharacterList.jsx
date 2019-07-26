import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characterList, setCharacterList] = useState(undefined);

  const retrieveCharacters = () => {
    (async () => {
      try {
        const response = await Axios.get('https://rickandmortyapi.com/api/character/');
        setCharacterList(response.data.results);
      } catch (e) {
        // console.log(e);
      }
    })();
  };
  useEffect(retrieveCharacters, []);

  return (
    <section className="character-list grid-view">
      {/* {console.log(characterList)} */}
      {
        characterList
          ? characterList.map(character => (<CharacterCard {...character} />))
          // : <h2>Loading Characters...</h2>
          : <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading" />
      }
    </section>
  );
}
