import React from 'react';
// import { Tab, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const WrapperDiv = styled.div `
display:flex;
justify-content: space around;
margin-left: 45%;
padding-bottom: 2%;
text-decoration: none;
`

const Navigation = () => {
  return (
    <WrapperDiv className = "NavWrap">
        <div>
          <Link to ="/">Home</Link>
        </div>
      

        <div>
          <Link to ="/characters">  Characters </Link>
        </div>
    </WrapperDiv>
  )};


 export default Navigation;