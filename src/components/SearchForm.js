import React, { useState } from "react";
import { Input } from 'semantic-ui-react';

// STRETCH TODO: Add stateful logic for query/form data, *Added stretch MODAL component!   
/* export default function SearchForm({ onSearch }) {

  const [name, setName] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/name')
    .then(response => {
      console.log(response.data.results);
      setName(response.data.results);
    })
    .catch(err => {
      console.log('Error', err);
    });
  }, []);

  <form onSubmit={() => onSearch(name)}>
  </form>
*/

export default function SearchForm({ onSearch }) {

  return (
    <section className="search-form">

        <div class="ui focus input">
        <input type="text" placeholder="Search Name..." />
        </div>
        <button class="ui inverted primary button" type="submit">Search</button>

    </section>
  );
}


