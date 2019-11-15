import React, { useEffect, useState } from "react";
import Axios from "axios";

function CharacterList() {
  const[toons, setToons] = useState([]);
  const[query, setQuery] = useState("");

  useEffect(() => {

    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {

      const toonQuery = res.data.results.filter(search =>
        search.name.toLowerCase().includes(query.toLowerCase())
      );

      setToons(toonQuery);
    })
    .catch(error => {
      console.log(error)
    })
    
  }, [query]);

  const changeHandler = e =>{
    setQuery(e.target.value);
  };

  return(
    <div className="searchForm">
      <form>
        <input
        type="text"
        onChange={changeHandler}
        value={query}
        name="name"
        placeholder="search by name"
        />
      </form>
    


    <section className="character-list">
          {toons.map(toon => {
        return(
          <div>
            <h2>{toon.name} </h2>
            
          </div>
        )
          })}
        </section>
    </div>
  )


}
export default CharacterList;
