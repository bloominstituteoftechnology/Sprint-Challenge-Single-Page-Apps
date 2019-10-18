import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function LocationsList(props) {
  const CardContainer = styled.section`
    margin: 2% 0;
    display: flex
    flex-wrap: wrap;
    justify-content: space-around;
`;

  const CharacterCards = styled.div`
    box-shadow: 1px 3px 3px #000;
    width: 40%;
    text-align: center;
    margin-bottom: 2%;
  `;

  const [locationData, setLocationData] = useState([]);
  const [pageControl, setPageControl] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?page=${pageControl}`)
      .then(response => {
        // console.log(response.data.results);
        setLocationData(response.data.results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, [pageControl]);

  return (
    <>
      <CardContainer>
        {locationData.map(location => {
          return (
            <CharacterCards key={location.id}>
              <h3>{location.name}</h3>
              <p>Type: {location.type}</p>
              <p>Dimension: {location.dimension}</p>
            </CharacterCards>
          );
        })}
      </CardContainer>
      <div className="button-container">
        <button onClick={() => setPageControl(pageControl - 1)}>
          Previous
        </button>
        <button onClick={() => setPageControl(pageControl + 1)}>Next</button>
      </div>
    </>
  );
}
