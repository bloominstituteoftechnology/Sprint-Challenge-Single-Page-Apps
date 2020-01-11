import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';


export default function Characters(props) {
  // const [data, setData] = useState([]);
  // const [query, setQuery] = useState('');
  // useEffect(() => {
  //   axios.get('https://rickandmortyapi.com/api/character/').then(response => {
  //     console.log(response);

  //     const characters = props.characters.filter(results =>
  //       results.name.toLowerCase().includes(query.toLowerCase())
  //     );
  //     setData(characters);
  //   });
  // }, [props.characters, query]);
  const handleInputChange = event => {
    props.setQuery(event.target.value);
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          value={props.query}
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
