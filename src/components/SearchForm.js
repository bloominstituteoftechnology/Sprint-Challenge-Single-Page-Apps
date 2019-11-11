import React, { useState } from "react";

export default function SearchForm(props) {
 
  const [results, setResults] = useState()

  const handleChanges = e=>{
    setResults(e.target.value)
    console.log(results)
  }

  const submitHandler = e =>{
    e.preventDefault()
    const filtered = props.characters.find(el=> el.name.includes(results))
    props.search([filtered])
    console.log(filtered)
  }


  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <input
          onChange={handleChanges} 
          type="text"
          name="character"
          id="character"
          placeholder="Search">
          </input>

      </form>
    </section>
  );
}
