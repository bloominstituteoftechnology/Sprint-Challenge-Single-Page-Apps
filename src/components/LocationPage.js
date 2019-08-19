import axios from 'axios';
import React, { useEffect, useState} from 'react';


function LocationPage() {
   const [LocationPage, setLocationPage] = useState([])
   useEffect(() => {
   axios
   .get('https://rickandmortyapi.com/api/location/')
   .then(response => setLocationPage(response.data.results))
   .catch(error => console.error(error))
}, [])
 return (
   <section >
     <div>
       <h1> location to the ultimate fan site!</h1>
      {LocationPage.map(banana => (
<div>{banana.name}</div>
))}
     </div>
   </section>
 );
}
export default LocationPage;
  