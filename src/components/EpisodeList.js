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

  const [episodeData, setEpisodeData] = useState([]);
  const [pageControl, setPageControl] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${pageControl}`)
      .then(response => {
        // console.log(response.data.results);
        setEpisodeData(response.data.results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, [pageControl]);

  return (
    <>
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
      <div className="button-container">
        <button onClick={() => setPageControl(pageControl - 1)}>
          Previous
        </button>
        <button onClick={() => setPageControl(pageControl + 1)}>Next</button>
      </div>
    </>
  );
}
