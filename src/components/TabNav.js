import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
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
        <NavLink to='/'>Home</NavLink>
            <NavLink to='/characters' activeClassName="selected">Characters</NavLink>
            <NavLink to='/locations' activeClassName="selected">Locations</NavLink>
            <NavLink to='/episodes' activeClassName="selected">Episodes</NavLink>
        </StyledNav>
    )
};

export default TabNav;

const StyledNav = styled.nav`
display: flex;
flex-direction: row;

a {
justify-content: center;
align-items: center;
padding: 15px;
width: 1.5 rem;
}
 `;