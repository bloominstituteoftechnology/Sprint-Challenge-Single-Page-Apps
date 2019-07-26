import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { Button, Icon } from 'semantic-ui-react'

const StyledButton = styled.button`
  border: 5px solid black;
  background-color: black;
  color: white;
  padding: 15px 32px;
  margin: 5px 10px 10px 5px;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
`;

export default function Buttons (props) {

  return (
    <div className = "buttonWrapper">
      <Button icon labelPosition='left'
        onClick= {() =>
          props.pageDown()}>
        Previous
        <Icon name='left arrow' />
      </Button>
      <Button icon labelPosition='right'
        onClick= {() =>
          props.pageUp()}>
        Next
        <Icon name='right arrow' />
      </Button>
  </div>
  )
}
