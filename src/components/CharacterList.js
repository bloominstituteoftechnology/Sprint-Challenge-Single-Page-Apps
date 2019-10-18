import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const CharacterList= () => {

  const [ data, setData] = useState([]);

  const [ query, setQuery] = useState([]);

  const [ filteredPoke, setFilteredPoke] = useState([])

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v1/cards")
      .then(response => {
        setData(response.data.cards)
      setFilteredPoke(response.data.cards);
    });
  }, []);

  useEffect( () => {
    setFilteredPoke(data.filter(character => character.name.toLowerCase().includes(query.toLowerCase)))
  }, [query, data],
  );

  const handleInputChange = event => {
    setQuery(event.target.value);
  }


  return (
    <div>
      <form classname="search">
        <input 
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="search by name"
        />
      </form>

      {data.map(char => {
        return ( 
          <div>
            <CharacterCard
            key = {char.id}
            name = {char.name}
            hp = {char.hp}
            url = {char.imageUrl}
            />
            <Link to ="/">
          <Button>Return Home</Button>
          </Link>
          </div>
        )
        })} 




      <div>
        {filteredPoke.map(data => {
          return (
            <div className="character-list" key = {data.id}>
              <h1>Name: {data.name}</h1>
              <p>HP: {data.hp}</p>
              <img src= {data.url} alt="pokemon"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// const CharacterList = () => {
//   const [data, setData] =useState([]);
//   // const [ filteredPoke, setFilteredPoke] = useState([]);
//   // const [ query, setQuery] = useState([]);

  


//   useEffect(() => {
//     axios.get("https://api.pokemontcg.io/v1/cards").then(response => {
//       console.log(response.data.cards);
//       setData(response.data.cards);
//     })
//     .catch(error => {
//       console.error("server error", error);
//     })
//   }, []);

//   // useEffect( () => {
//   //   setFilteredPoke(data.filter(character => character.name.toLowerCase().includes(query.toLowerCase)))
//   // }, [query, data],
//   // );
  
//   // const handleInputChange = event => {
//   //   setQuery(event.target.value);
//   // }

//   return (
//     <>
//       {data.map(char => {
//         return ( 
//           <div>
//             <CharacterCard
//             key = {char.id}
//             name = {char.name}
//             hp = {char.hp}
//             url = {char.imageUrl}
//             />
//             <Link to ="/">
//           <Button>Return Home</Button>
//           </Link>
//           </div>
//         )
//         })} 
      
//     </>
//   );
// }

export default CharacterList;
