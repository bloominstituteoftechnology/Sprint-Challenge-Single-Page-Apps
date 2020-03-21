import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.potterapi.com/v1/characters/`, {
        params: {
          key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        }
      })
      .then(response => {
        const characters = response.data.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("harry potter characters", response);
        setData(characters);
      });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="spells">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="spell">
        {data.map(data => {
          return (
            <div className="character-list " key={data._id}>
              <h2>
                <span aria-label="witch" role="img">
                  🧙
                </span>
                {data.name}
              </h2>
              <h3 className="capital">Role: {data.role}</h3>
              <h3 className="capital">House: {data.house}</h3>
              <h3 className="capital">Wand: {data.wand}</h3>
              <h3 className="capital">Patronus: {data.patronus}</h3>
              <h3 className="capital">Blood Status: {data.bloodStatus}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
