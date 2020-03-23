import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function CharacterCard(props) {

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <Link className="main-buttons" to={`/`}>
        Home
      </Link>
      {props.filteredData.map(char => {
        return (
          <div>
            <h1>{char.name}</h1>
          </div>
        );
      })}

    </section>
  );
}