import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';


export default function Characters(props) {
 
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
          placeholder="search"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </form>
     
      
    </div>
    

    
  );
}
