// import React, { useEffect, useState } from "react";
// // import CharacterCard from "./CharacterCard";
// import axios from "axios";

// const CharacterList = (props) => {
//   // TODO: Add useState to track data from useEffect
//   const [character, setCharacter] = useState([]);

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//     axios
//       .get('https://rickandmortyapi.com/api/character/')

//       .then(response => {
//         setCharacter(response.data);
//       })
//       .catch(error => {

//       })
//   }, []);

//   return (
//     <section className="character-list">

//       {character.map(characters => {
//         <CharacterDetails key={characters.id} characters={characters} />
//       })}

//     </section>
//   );

//   function CharacterDetails({ characters }) {
//     const { name, status, species, type, gender } = characters
//     return (
//       < div classname="character-name" >
//         Name: <em>{name}</em>
//         <div>
//           Status: <em>{status}</em>
//         </div>
//       </div >
//     )

//   }
// }


// export default CharacterList;