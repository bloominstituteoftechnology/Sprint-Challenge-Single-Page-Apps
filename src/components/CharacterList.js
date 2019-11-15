import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';



const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
   const getCharacters = () => {
     axios
       .get("https://rickandmortyapi.com/api/character/")
       .then(response => {
         setCharacters(response.data.results);
       })
       .catch(error => {
         console.error("Server Error", error);
       });
   };

   getCharacters();
 }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <div className="char-card">
            <h2>{character.name}</h2>
            <div className="char-img">
              <img src={character.image} alt="Rick and Morty Characters" />
            </div>
            <div className="char-info">
              <p>
                Type: <strong>{character.type}</strong>
              </p>
              <p>
                Gender: <strong>{character.gender}</strong>
              </p>
              <p>
                Species: <strong>{character.species}</strong>
              </p>
              <p>
                Status: <strong>{character.status}</strong>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

{/* <CharacterDetails key={character.id} character={character} />; */}



// function CharacterDetails({ character }) {
//   const { name, status, gender, image, species, type } = character;
//   return (
//     <div className="char-card">
//       <h2>{name}</h2>
//       <div className="char-img">
//         <img src={image} alt='Rick and Morty Characters'/>
//       </div>
//       <div className="char-info">
//         <p>
//           Type: <strong>{type}</strong>
//         </p>
//         <p>
//           Gender: <strong>{gender}</strong>
//         </p>
//         <p>
//           Species: <strong>{species}</strong>
//         </p>
//         <p>
//           Status: <strong>{status}</strong>
//         </p>
//       </div>
//     </div>
//   );
// }

export default CharacterList;




