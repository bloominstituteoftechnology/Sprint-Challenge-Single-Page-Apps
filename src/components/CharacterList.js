import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from './CharacterCard';
import styled from "styled-components";

const Input =styled.input`
font-size:2rem;
text-align: center;
border: 2px solid black;
border-radius: 8px;
`;

const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const Button = styled.button`

width: 10%;
font-size: 1.3rem;
color: orange;
background: black;
border-radius: 8px;
border: 2px solid black;
margin: 5px;
&:hover{
  color: black;
background: orange;
}
`;

const Grid = styled.div`
width: 100%;
display: flex;
Justify-content: center;
flex-wrap: wrap;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [info, setInfo] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array! 
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => {
          const name = response.data.results.filter(character => 
            character.name.toLowerCase().includes(query.toLowerCase())
            );
          setInfo(name)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    
  }, [query , page]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <form>
            <Input
              type="text"
              onChange={handleInputChange}
              value={query}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search name"
              autoComplete="off"
            />
        </form>
      <BtnContainer>
          <Button onClick={() => 
          (page > 2) ? setPage(page - 1): setPage(1)}
          >Previous</Button>

        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </BtnContainer>
      
      <Grid>
      {info.map((item, id) => {
            return (
                <Character 
                  key={id} 
                  name={item.name} 
                  status={item.status} 
                  species={item.species} 
                  type={item.type} 
                />
            );
          })}
      </Grid>  
    </section>
  );
}
