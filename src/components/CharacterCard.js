import React from "react";

export default function CharacterCard() {
  
  axios
  .get("https://rickandmortyapi.com/api/character/
  ")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return <span>todo: character</span>;
}
