import React from "react";
import styled from 'styled-components';
// import EpisodeList from './components/EpisodeList';
import { NavLink } from 'react-router-dom';

function EpisodeCard (props) {
     const { episode, air_date, name }=props.episode;    
    
    return (

        <div>
            {/* <h4>Name: {name}</h4> */}
            <h4>Air Date: {air_date}</h4>
            <h4>Episode: {episode}</h4>
            <StyledEpisodeCard>Episode Name: {name} </StyledEpisodeCard>
        </div>
    )
}

export default EpisodeCard;

const StyledEpisodeCard = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      padding: 10px 5px;
      margin-bottom: 20px;
      width: 48%;
      height: 200px;
      padding: 15px;
      font-size: 1.4rem;
      line-spacing. 0.8;
      color: orange;
      `;

// ${episode.id + 1}`}>Next Episode