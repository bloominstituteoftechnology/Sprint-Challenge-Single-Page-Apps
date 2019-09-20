import React, { useState, useEffect } from "react";

import axios from "axios";

//data.results.name

 export default function SearchForm({ onSearch }) {


  const [char, setChar] = useState({ name: ""});
  const [searchRes, setSearchRes] = useState([]);
  const handleInputChange = e => {
    console.log(e.target.value);
    //setChar({ ...char, [e.target.name]: e.target.value });
    setChar(e.target.value);
  };


  useEffect(() => {
  axios
  .get('https://rickandmortyapi.com/api/character/')
  .then(response => {
    setChar(response.data.results);
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });



}, []);


  // useEffect(() => {
  //   const results = char.filter(person1 =>
  //     person1.toLowerCase().includes(char)
  //   );
  //   setSearchRes(results);
  // }, [char]);
 

  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(char.name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={char.name}
          name="name"
        />
        <button type="submit">Search</button>

        <ul>{searchRes.map(item => (
          <li>{item}</li>
        ))}</ul>
        
      </form>
    </section>
  );

  
}

// handleSubmit(values, { setStatus }) {
//   axios
//     // values = object with all our data.
//     .post("https://rickandmortyapi/character/?name", values)
//     .then(res => {
//       setStatus(res.data);
//     })
//     .catch(err => console.log(err.response));
// }