import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";

let NewHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
`;

let Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
justify-content: space-around;
width: 20%;
`;

export default function Header() {
  let history = useHistory();
  let routeHome = () => (
    history.push('/')
  )
  
  return (
    <NewHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Menu>
        <button onClick={routeHome}>Home</button>
        <NavLink to='/character'>
          <button>Character List</button>
        </NavLink>
      </Menu>
    </NewHeader>
  );
}
