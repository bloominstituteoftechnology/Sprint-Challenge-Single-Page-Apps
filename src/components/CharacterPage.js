import axios from 'axios';
import React, { useEffect, useState} from 'react';



function CharacterPage() {
   const [CharacterPage, setCharacterPage] = useState([])
   useEffect(() => {
   axios
   .get('https://rickandmortyapi.com/api/character/')
   .then(response => setCharacterPage(response.data.results))
   .catch(error => console.error(error))
}, [])
 return (
   <section className='character-page'>
     <div>
       <h1> Character to the ultimate fan site!</h1>
      {CharacterPage.map(banana => (
<div>{banana.name}</div>
))}
     </div>
   </section>
 );
}
export default CharacterPage;