import React, { useState } from "react";

export default function SearchForm(props) {
 
  const [search, setSearch] = useState("");
  const handleChanges = f => {
      setSearch([f.target.value]);
  }
  
  const submitForm = form => {
      form.preventDefault();
      props.handleQuery(search);
  }

  return (
    <section className="search-form searchbar-wrapper">
        <form onSubmit={submitForm}> 
            <label htmlFor="search">Search</label>
            <input id="search" type="text" name="search" onChange={handleChanges}/>
        </form>
    </section>
  );
}
