import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api/character/'

export default function CharacterList(props) {
  const [state, setState] = useState([]);
  const [query, setQuery] = useState("");
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    axios
        .get(url)
        .then(response => {
          // console.log(response.data.results)
          const characters= response.data.results
          // const characters = response.results.filter(
          //   character =>
          //   character.name
          //   .toLowerCase()
          //   .includes(query.toLowerCase())
          // );
          setState(characters)
        });

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  // const handleInputChange = event => {
  //   setQuery(event.target.value);
  // };


  return (
    // <div>
    // <form className="search">
    //   <input
    //     type="text"
    //     onChange={handleInputChange}
    //     value={query}
    //     name="name"
    //     tabIndex="0"
    //     className="prompt search-name"
    //     placeholder="search by name"
    //     autoComplete="off"
    //     />
    // </form>
    
    <section className="character-list">
      <h2>Characters</h2>
      {state.map(character => {
        return <CharacterCard
        key={character.id}
        name={character.name}
        species={character.species}
        />
      })}
    </section>
    // </div>
  );
}

// useEffect(() => {
//   axios
//       .get(url)
//       .then(response => {
//         console.log(response.data)
//         const characters = response.data.results;
//         setState(characters)
//       })

//   // TODO: Add API Request here - must run in `useEffect`
//   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
// }, []);

// return (
//   <section className="character-list">
//     <h2>TODO: `array.map()` over your state here!</h2>
//     {state.map(character => {
//       return <CharacterCard
//       key={character.id}
//       name={character.name}
//       species={character.species}
//       />
//     })}
//   </section>
// );
// }