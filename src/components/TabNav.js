import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import styled from 'styled-components';

function TabNav () {
    const TabNav = () => <TabNav panes={panes} />
    const panes = [
        { menuItem: 'Tab 1', render: () => <TabNav.Pane>Home</TabNav.Pane> },
        { menuItem: 'Tab 2', render: () => <TabNav.Pane>Characters</TabNav.Pane> },
        { menuItem: 'Tab 3', render: () => <TabNav.Pane>Locations</TabNav.Pane> },
        { menuItem: 'Tab 4', render: () => <TabNav.Pane>Episodes</TabNav.Pane> },
    ]

    return (
        <div className="navbar">
        <h4>Home</h4>
        <h4>Characters</h4>
        <h4>Locations</h4>
        <h4>Episodes</h4>
        </div>
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