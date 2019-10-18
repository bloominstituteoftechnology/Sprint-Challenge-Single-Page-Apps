import React, { useEffect, useState } from "react";
import Axios from "axios";

const CharacterList = props => {
  const [data, setData] =useState([]);

  useEffect(() => {
    Axios.get(`https://rick-api.herokuapp.com/api/`).then(response => {
      console.log(response.data);
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

export default CharacterList;
