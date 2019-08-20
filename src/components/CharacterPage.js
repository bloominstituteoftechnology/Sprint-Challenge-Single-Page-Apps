// import axios from "axios";
// import React, { useEffect, useState} from "react";
// import { Card, Icon, Image } from "semantic-ui-react";

//  function CharacterPage() {
//     const [CharacterPage, setCharacterPage] = useState([])
    
//     useEffect(() => {
//      axios.get ('https://rickandmortyapi.com/api/character/')
//     .then(response => setCharacterPage(response.data.results))
//     .catch(error => console.error(error))
// }, [])

//   return (
//     <section className="character-page">
//       <div>
//         <h1> Characters </h1> 
//        {CharacterPage.map(banana => (
// <div>
//     <Card>
//         <Image src={banana.image} alt= 'Character' />
//         <Card.Content>
//             <Card.Header>{banana.name}</Card.Header>
//             <Card.meta>{banana.status} <br></br> {banana.origin} </Card.meta>
//             <Card.Description>{banana.location.name}</Card.Description>
//         </Card.Content>
//         <Card.Content extra>
//         <a>
//             <Icon name='user' /> Episode
//             {banana.image.episode}
//             </a>
//          </Card.Content>
//     </Card>
// </div>
// ))}
//       </div>
//     </section>
//   );
// }
// export default CharacterPage;



import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
function CharacterPage() {
  const [CharacterPage, setCharacterPage] = useState([])
  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(response => setCharacterPage(response.data.results))
  .catch(error => console.error(error))
}, [])
return (
  <section className='character-page'>
    <div>
      <h1> Character to the ultimate fan site!</h1>
     {CharacterPage.map(banana => (
<div>
 <Card>
   <Image src={banana.image} alt= 'Character' />
    <Card.Content>
     <Card.Header>{banana.name}</Card.Header>
      <Card.Meta>{banana.status} <br></br> {banana.orgin}</Card.Meta>
     <Card.Description>{banana.location.name}</Card.Description>
   </Card.Content>
 <Card.Content extra>
     <a href="./componets/Episode">
       <Icon name='user' /> Episode
       {banana.image.episode}
     </a>
   </Card.Content>
 </Card>
</div>
))}
    </div>
  </section>
);
}
export default CharacterPage;
