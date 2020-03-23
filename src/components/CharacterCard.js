import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {

  const Card = styled.div`
    width: 80%;
    padding: 20px;
    border: 2px solid blue;
    border-radius: 10px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    `;

  const CardImg = styled.img`
    width: 250px;
    height: 250px;
    border: 3px lightblue solid;
    border-radius: 5px;
  `;

  const CardInfo = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
  `;

  const Status = styled.div`
  text-align: left;
  background: lightblue;
  height: 30px;
  vertical-align: middle;
  color: darkblue;
  padding: 10px;
  border-radius;
  `;

  return (
    <div className="character-card">
      <Card>
        <CardImg src={props.character.image} />
        <CardInfo>
          <div class='idNumber'>ID: {props.character.id}</div>
          <div class='charName'>Name: {props.character.name}</div>
          <div class='charGender'>Gender: {props.character.gender}</div>
          <div class='charSpecies'>Species: {props.character.species}</div>
          <div class='charOrigin'>Origin: {props.character.origin.name}</div>
        </CardInfo>
        <Status>Status: {props.character.status}</Status>
      </Card>
    </div>
  );
}
