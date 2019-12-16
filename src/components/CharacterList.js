import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(data => {
      setInfo(data.data.results);
    })
    .catch(error => {console.log("There was an error", error);
  })
}, []);
  console.log(info)

  return (
    <div>
      <section className="character-list">
        {info.map(char => (
        <CharacterCard url={char.image} names={char.name} gender={char.gender} local={char.location.name} species={char.species} status={char.status} />
        ))};
      </section>
    </div>
  );
}




// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import CharacterCard from "./CharacterCard";
// import SearchForm from "./SearchForm"


// function CharacterList() {
//   // TODO: Add useState to track data from useEffect
// const [data, setData]= useState([]);
// const [search, setSearch]=useState('')
//   useEffect(() => {
//     Axios
//     .get(`https://rickandmortyapi.com/api/character/`)
//     .then (res => {
//       console.log(res);
//       const characters= res.data.results;
//       setData(characters);
//     })
//     .catch(err => {
//       console.log('No data return', err);
//     })
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);

//   const handleChange = (event) => {
//     event.preventDefault();
//     setSearch(event.target.value)
//   }
// const handleSubmit = (event) => {
//   event.preventDefault();
  
// }
//   return (
//     <section className="character-list">
//       <h2></h2>
//       <SearchForm
//       placeholder= 'Search characters'
//       value={search}
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//       />
//       {data.map(character => (
//         <CharacterCard
//         key={character.id}
//         name={character.name}
//         image={character.image}
//         species={character.species}
//         />
//       ))}
//     </section>
//   );
// }

// export default CharacterList
