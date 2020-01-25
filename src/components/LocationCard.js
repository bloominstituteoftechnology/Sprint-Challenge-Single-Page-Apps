// import React, {useState, useEffect} from "react";
// import {useParams} from 'react-router-dom'


// export default function LocationCard({chars, setChars}) {
//   const {id} = useParams()
//   const [char, setChar] =useState({})
//     useEffect (() => {
//       const acutalchar = chars.filter((char) => {
//         return char.id ==id;
//       })
//       setChar(acutalchar[0])
//     }, [])


//     console.log(char, 'char')

//     if(!char) {
//       return (<h1>character does not exist</h1>)
//     }
    
    
    
  
//   return (
//     <div>
//  <    h1>Name: {char.character.name}</h1>
//       <p>Status: {char.character.status}</p>
//       <p>Species: {char.character.species}</p>
//       <p>Gender: {char.character.gender}</p>
//     </div>
//   );
// }
