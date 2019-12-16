import React, { useState } from "react";

function SearchForm(props) {
  const [result, setResult] = useState();
  const handleChanges = event => {
    setResult(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

  const filter = props.character.filter(character => {
    return character.name.indexOf(result) !== -1;
  });
  props.searching(filter)
};

return ( 
  <section>
  <form onSubmit={submitHandler}>
  <input
    onChange={handleChanges}
    type='text'
    name='character'
    id='character'
    placeholder='Search'
  />
  </form>
  </section>
);
}

export default SearchForm;
