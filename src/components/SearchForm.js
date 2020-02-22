import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

  const results = props.data.filter(character => {
    return character.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  props.setdata(results)
},[searchTerm])
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
      <form >
        <label htmlFor="name"> Name </label>
        <input
           type="text"
           placeholder="Name"
           id="name"
           name="name"
           value={searchTerm}
           onChange={handleChange}
         />

        </form>
    </section>
    );

}
