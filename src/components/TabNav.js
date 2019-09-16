import React from "react";
import { Tab, MenuItem, Pane } from "semantic-ui-react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function TabNav () {
    const TabNav = () => <TabNav panes={panes} />
    const panes = [
        { menuItem: 'Tab 1', render: () => <TabNav.Pane>Home</TabNav.Pane> },
        { menuItem: 'Tab 2', render: () => <TabNav.Pane>Characters</TabNav.Pane> },
        { menuItem: 'Tab 3', render: () => <TabNav.Pane>Locations</TabNav.Pane> },
        { menuItem: 'Tab 4', render: () => <TabNav.Pane>Episodes</TabNav.Pane> },
    ]

    return (
        <StyledNav className="navbar">
        <ul className="links">
            <li>
            <NavLink to='/'>Home </NavLink>
            </li> 
                <li>
            <NavLink to='/characters' activeClassName="selected">Characters </NavLink>
                </li>
            <li>
            <NavLink to='/locations' activeClassName="selected">Locations </NavLink>
                </li>
                <li>
            <NavLink to='/episodes' activeClassName="selected">Episodes </NavLink>
                </li>
            </ul>
        </StyledNav>
    )
};

export default TabNav;

const StyledNav = styled.nav`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: flex-end;
padding: 15px;
margin: 0 auto;
list-style: none
`;

// const ul = styled.ul`
// width: 1.5 rem;
// color: #4285f4;
// text-decoration: none;
// padding: 5px;
// `;



