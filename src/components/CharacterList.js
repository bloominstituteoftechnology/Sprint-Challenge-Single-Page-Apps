import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from './CharacterCard';
import SearchForm from './SearchForm';
import styled from "styled-components";
import bgrnd from "../img/portal.png";

const Container = styled.div`
 background-image: url(${bgrnd});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;


const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

const Button = styled.button`

width: 15%;
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
  
  const [info, setInfo] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
   
    axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => {
          console.log(response)
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
      
      <Container>
        <SearchForm 
        handleInputChange={handleInputChange}
        query={query}
        />
      
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
                    image={item.image}
                    name={item.name} 
                    origin={item.origin}
                    species={item.species} 
                  />
              );
            })}
      </Grid>  


      </Container>
      

    </section>
  );
}
