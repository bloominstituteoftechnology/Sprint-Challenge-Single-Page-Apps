// import React from "react";

import axios from "axios";

import React, { useEffect, useState} from "react";
import { Card } from "semantic-ui-react";

 function LocationPage() {
    const [LocationPage, setLocationPage] = useState([])
    
    useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/location/')
    .then(response => setLocationPage(response.data.results))
    .catch(error => console.error(error))
}, [])
  return (
    <section className="location-page">
      <div>
        <h1> These are the locations! </h1>
       
       {LocationPage.map(banana => (
<div>
<Card>
     <Card.Content>
       <Card.Header>{banana.name}</Card.Header>
       <Card.Meta>{banana.dimension}</Card.Meta>
       <Card.Description>{banana.residents[1]}</Card.Description>
     </Card.Content>
   </Card>
</div>
))}
      </div>
    </section>
  );
}
export default LocationPage;

