import React, { useState } from "react";

export default function SearchForm(props) {

  const [query, setQuery]= useState()

  const [data, setData] = useState([])


  const handleChanges = (e) => {
    setQuery(e.target.value)
  }

  const submitForm =e =>{
    e.preventDefault();
    setData(props.data)

  }
 
  return (
    <section className="search-form">
     {/* Add a search form here */}

     <form onSubmit = {submitForm}>
       <label htmlFor = "search">Search here</label>
       <input
       id = "search"
       type ="text"
       name = "search"
       onChange = {handleChanges}
       placeholder = "Type here"
       value = {query} 
       />
       <button type ="submit">Search</button>
     </form>

     




    </section>
  );
}
