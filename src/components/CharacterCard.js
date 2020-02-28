import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
flex-direction: row;
// border: 1px solid red;
justify-content: center;
margin: 20px;
text-align: center;
`

const Info = styled.div`
  // border: 1px solid blue;
  width: auto;
  padding: 5px;
`
const Header = styled.h1`
  color: #000099
  text-align: center;
`
const Header3 = styled.h3`
  color: #3333ff
`
export default function CharacterCard(props) {
  // return <span>todo: character</span>;

  console.log(props);

 
  return (
    
    <Card>
      {/* <img alt="character" src={props.character.image} /><br/> */}
      
        <div>
      <img alt="character" src={props.character.image} /></div>
      <Info>
      <Header>{props.character.name}</Header><br/>
      <Header3>{props.character.species}</Header3><br/>
      <Header3>{props.character.gender}</Header3>
      </Info>
      
    </Card>
  );
}
