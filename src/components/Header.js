import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  width: 95%;
 display: flex;
 justify-content: space-between;

 h1 {
   font-size: 2rem;
 }

 .linkBox {
   width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;

    a{
      text-decoration: none;
      font-size: 1.6rem;
      padding: 2%;
      margin: 2%;
      width: 45%;
      border-radius: 8px;
      color:yellow;
      background-color: green;

        &:hover {
          color:green;
          background-color: yellow;
        }
    }
 }
 
`;

export default function Header() {
  return (
    <header className="ui centered">

       <Box>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <div className="linkBox">
          <Link to="/">Home</Link>
          <Link to="/character-list">Characters</Link>
          <Link to="/location-list">Location</Link>
        </div>
       
      </Box>
    </header>
  );
}

