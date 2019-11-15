// import React, { useState, useEffect } from "react";

// export default function SearchForm() {
//     <div className="search-div">
//       <form className="search">
//         <input
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           name="name"
//           tabIndex="0"
//           className="prompt search-name"
//           placeholder="search by name"
//           autoComplete="off"
//         />
//       </form>
//       </div>
// }

//  const [searchTerm, setSearchTerm] = useState("");
//  const [searchResults, setSearchResults] = useState([]);
//  const handleChange = event => {
//    setSearchTerm(event.target.value);
//  };

//  useEffect(() => {
//   const results = props.name.filter(char =>
//     char.toLowerCase().includes(searchTerm)
//   );
//   setSearchResults(results);
// }, [searchTerm]);


//   return (
//     <section className="search-form">
//      <input
//      type="text"
//      placeholder="Search"
//      value={searchTerm}
//      onChange={handleChange}
//      />
//      <ul>
//        {searchResults.map(item => (
//          <li>{item}</li>
//        ))}
//      </ul>

//     </section>
//   );
// }
