

import axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";
import React, { useEffect, useState} from "react";

 function EpisodePage() {
    const [EpisodePage, setEpisodePage] = useState([])
    
    useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/episode/')
    .then(response => setEpisodePage(response.data.results))
    .catch(error => console.error(error))
}, [])
  return (
    <section className="episode-page">
      <div>
        <h1> Episodes</h1>
       
       {EpisodePage.map(banana => (
        <div>
 <Card>
   {/* <Image src={banana.image} alt= 'Character' /> */}
    <Card.Content>
     <Card.Header>{banana.name}</Card.Header>
      <Card.Meta>{banana.air_date} <br></br> {banana.episode}</Card.Meta>
     {/* <Card.Description>{banana.location.name}</Card.Description> */}
   </Card.Content>
 <Card.Content extra>
     {/* <a href="./componets/Episode">
       <Icon name='user' /> 
       {banana.image.episode}
     </a> */}
   </Card.Content>
 </Card>
</div>

))}
      </div>
    </section>
  );
}
export default EpisodePage;