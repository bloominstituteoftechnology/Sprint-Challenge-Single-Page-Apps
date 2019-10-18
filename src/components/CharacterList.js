import React, { useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


function CharacterList() {
  // TODO: Add useState to track data from useEffect
// const CharacterList = () => {
//   const [
//     data, setData,
//   ] = useState([]);//api call
//   const [
//     query, setQuery,
//   ] = useState('');//info submitted
//   const [
//     filteredCharacter, setFilteredCharacter,
//   ] = useState([]); //returned/rendered
// }

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log("Characters", response.data.results);
      // setData(response.data.results);
      // setFilteredCharacter(response.data.results);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  // useEffect(
  //   () => {
  //     setFilteredCharacter(data.filter(character => character.name.toLowerCase().includes(query.toLowerCase())));
  //   },
  //   [query, data],
  // );
  // const handleInputChange = event => {
  //     setQuery(event.target.value);
  // };

  return (
    <section className="character-list">

      <h2>TODO: `array.map()` over your state here!</h2>
      <Link to='/searchForm'>
        <h2>Characters</h2>
      </Link>
      <form>
        <input
          type='text'
          // onChange={handleInputChange}
          // value={query}
          name='name'
          placeholder='search by name'
          autoComplete='off'
          />
      </form>
      {/* <div>
        {filteredCharacter.map(data => {
          return(
            <div className='character-list' key={data.id}>
              {console.log(data.url)}
              <h2>{data.name}</h2>
            </div>
          )
        })}
      </div> */}
    </section>
  );
      }
export default CharacterList