// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect

//   let [character, setCharacter] = useState([]);

//   useEffect( () =>{
//     axios.get("https://rickandmortyapi.com/api/character/")
//     .then(response =>{
//       // console.log(response)
//       setCharacter(response.data.results)
//     })
//     .catch(error =>{
//       console.log("Error in", error)
//     })
//   },[]);
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//       {character.map(character =>{
//         <CharacterDetails key={character.id} character={character}/>
//       })}
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";

let CharacterList = props => {
  // TODO: Add useState to track data from useEffect

  let [character, setCharacter] = useState([]);

  useEffect( () =>{
    let getCharacter = () =>{

    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      // console.log(response)
      setCharacter(response.data.results)
    })
    .catch(error =>{
      console.log("Error in", error)
    })
  }
  getCharacter();
  },[]);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
    <section className="character-list">
      {character.map(character =>{
        <CharacterDetails key={character.id} character={character}/>
      })}
    </section>
  );
}

function CharacterDetails({character}){
  let {name, species, id} = character;
  return(
    <div>
      <h2>Character</h2>
      <div> Name: <strong>{name}</strong></div>
      <div> Species: <strong>{species}</strong></div>
    </div>
  )
}

export default CharacterList;