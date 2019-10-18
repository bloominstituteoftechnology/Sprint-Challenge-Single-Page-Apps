import React from "react";
import styled from "styled-components";

const MainWrap = styled.div`
display: inline-grid;
    padding: 10px;
    width: 200px;
    
`

const CardContainers = styled.div`
  display:flex;
  flex-direction:column;
  flex-flow: wrap;
  width: 200px;

`

const CharacterCard = (props) => {
  return (
    
		<MainWrap>
			<h1>Name : {props.name}</h1>
			<img src={props.url} />
		</MainWrap>
	);
};
export default CharacterCard;