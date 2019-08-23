import React, { useEffect, useState } from "react";

import axios from "axios";

export default function LocationsList() {

const [location, setLocation] = useState([])

useEffect(() => {
axios
.get('https://rickandmortyapi.com/api/location/')
.then(response => {
  setLocation(response.data);
  console.log(response);
})
.catch(error => {
  console.error(error);
});



}, []);

return (
    <section>
        
    </section>
);

}