import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.div`
  margin: 0 2em;
  padding: 0.25em 1em;
  text-decoration: none;
`

const Nav = () => {

    return(
        <div>
            <NavStyle><NavLink to = "/"> Home </NavLink></NavStyle>
            <NavStyle><NavLink to = "/Header"> Characters List </NavLink></NavStyle>
            <NavStyle><NavLink to = "/Header/SearchForm"> SearchForm </NavLink></NavStyle>
        </div>
    )
}

export default Nav;