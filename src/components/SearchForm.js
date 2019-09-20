import React, { useState } from "react";


//data.results.name

 export default function SearchForm({ onSearch }) {


  const [person, setPerson] = useState({ name: ""});
  const handleInputChange = e => {
    console.log(e.target.value);
    setPerson({ ...person, [e.target.name]: e.target.value });
  };


 

  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(person.name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={person.name}
          name="name"
        />
        <button type="submit">Search</button>
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