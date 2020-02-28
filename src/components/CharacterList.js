import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

//styled components
let CharacterCard = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: rgba(36, 239, 249, 0.2);
// justify-content: center:
// content-align: center;
align-items: center;
// align-self: center;
`;
let NewCharacterCard = styled.div`
width: 50%;
display: flex;
flex-direction: column;
// justify-content: center:
// content-align: center;
// align-items: center;
text-align: center;
border: 20px solid rgba(82, 249, 36, 0.51);
`;
let CharacterImg = styled.img`
width: 50%;
`;

let DivImgContainer = styled.div`
width: 100%;
display: flex;
flex-direction; column;
justify-content: center;
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  let [character, setCharacter] = useState([]);

  useEffect( () =>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      // console.log(response)
      setCharacter(response.data.results)
    })
    .catch(error =>{
      console.log("Error in", error)
    })
  },[]);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
      <CharacterCard>
      {character.map(character =>{
        return (
          <NewCharacterCard key={character.id}className='character-card'>
            <DivImgContainer>
            <CharacterImg src={character.image}/>
            </DivImgContainer>
            <div className='card-info'>
              <h3>Name: {character.name}</h3>
              <h5>Species: {character.species}</h5>
              <h5>Gender: {character.gender}</h5>
              <h5>Origin: {character.origin.name}</h5>
            </div>
          </NewCharacterCard>
        )
      })}
      </CharacterCard>
  );
}
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// let CharacterList = props => {
//   // TODO: Add useState to track data from useEffect

//   let [character, setCharacter] = useState([]);

//   useEffect( () =>{
//     let getCharacter = () =>{

//     axios.get("https://rickandmortyapi.com/api/character/")
//     .then(response =>{
//       // console.log(response)
//       setCharacter(response.data.results)
//     })
//     .catch(error =>{
//       console.log("Error in", error)
//     })
//   }
//   getCharacter
//   },[]);
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


//   return (
//     <section className="character-list">
//       {character.map(character =>{
//         <CharacterDetails key={character.id} character={character}/>
//       })}
//     </section>
//   );
// }

// function CharacterDetails({character}){
//   let {name, species, id} = character;
//   return(
//     <div>
//       <h2>Character</h2>
//       <div> Name: <strong>{name}</strong></div>
//       <div> Species: <strong>{species}</strong></div>
//     </div>
//   )
// }

// export default CharacterList;