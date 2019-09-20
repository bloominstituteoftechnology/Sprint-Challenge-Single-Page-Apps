import React, { useState } from "react";

export default function SearchForm({ placeholder, handleChange }) {
  // console.log(props);
  // const [searchTerm, setSearchTerm] = useState("");
  // // searchResults is used to set the search result.
  // const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const results = props.characters.filter(character =>
  //     character
  //       .toString()
  //       .toLowerCase()
  //       .includes(searchTerm)
  //   );
  //   setSearchResults(results);
  //   console.log(`this is results`, results);
  // }, [searchTerm]);
  // // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  // const handleChange = event => {
  //   console.log(event.target.value);
  //   setSearchTerm(event.target.value);
  // };
  // return (
  //   <div className="App">
  //     <form>
  //       {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
  //       {/* Two-way binding just means that:
  //       When properties in the model get updated, so does the UI.
  //       When UI elements get updated, the changes get propagated back to the model. */}
  //       <label htmlFor="name">Search:</label>
  //       <input
  //         id="name"
  //         type="text"
  //         name="textfield"
  //         placeholder="Search"
  //         value={searchTerm}
  //         onChange={handleChange}
  //       />
  //     </form>
  //     <div>
  //       {searchResults.map(character => (
  //         <ul key={character.id}>
  //           <li>{character.name}</li>
  //         </ul>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <section>
      <form>
        <input
          name="search"
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
