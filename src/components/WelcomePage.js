import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/characters"><Button>Characters</Button></Link>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
  );
}
