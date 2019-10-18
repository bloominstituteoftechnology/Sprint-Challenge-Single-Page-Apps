import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import styled from "styled-components";
import bgrnd from "../img/bgrnd.png";

const Container = styled.div`
 background-image: url(${bgrnd});
  background-size: cover;
  height: 100vh;
  background-position: right;
`;

const Grid = styled.div`
width: 100%;
display: flex;
Justify-content: center;
flex-wrap: wrap;
`;

export default function LocationsList() {
    const [location , setLocation] = useState([])
    // const [query, setQuery] = useState("");
    
    useEffect(() => {
    axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
            console.log("Location" , response)
        //   const name = response.data.results.filter(character => 
        //     character.name.toLowerCase().includes(query.toLowerCase())
        //     );
          setLocation(response)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    
  }, []);

//   const handleInputChange = event => {
//     setQuery(event.target.value);
//   };

  return (
    <section className="character-list">
      <Container>
      {/* <form>
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
        </form> */}
      {/* <BtnContainer>
          <Button onClick={() => 
          (page > 2) ? setPage(page - 1): setPage(1)}
          >Previous</Button>

        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </BtnContainer> */}
      
      <Grid>
      {/* {location.map((item, id) => {
            return (
                <LocationCard
                  key={id} 
                  name={item.name} 
                  type={item.type}
                  dimension={item.dimension} 
                  residents={item.residents} 
                />
            );
          })} */}
      </Grid>  


      </Container>
      

    </section>
  );

}
