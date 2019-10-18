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
    width: 30%;
    text-align: center;
    margin-bottom: 2%;
  `;

  const [episodeData, setEpisodeData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(response => {
        // console.log(response.data.results);
        setEpisodeData(response.data.results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <CardContainer>
      {episodeData.map(episode => {
        return (
          <CharacterCards key={episode.id}>
            <h3>{episode.name}</h3>
            <p>{episode.episode}</p>
            <p>{episode.air_date}</p>
          </CharacterCards>
        );
      })}
    </CardContainer>
  );
}
