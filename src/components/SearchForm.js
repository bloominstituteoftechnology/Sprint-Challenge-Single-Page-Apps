import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

// Export default function SearchForm(props) {
//   console.log(props)

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const results = props.characters.filter(character =>

//       character.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log(results)
//     setSearchResults(results);
//   }, [searchTerm]);
//   const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <section className="search-form">

//      <form>
//         <label htmlFor="name">Search:</label>
//         <input
//           id="name"
//           type="text"
//           name="textfield"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleChange}
//         />
//       </form>
//       <div className="character-list">
//         <ul>
//           {searchResults.map(character => (
//             <li key={character}>{character}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }
export default function Characters(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {
      console.log(response);

      const characters = props.characters.filter(results =>
        results.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
    });
  }, [props.characters, query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
