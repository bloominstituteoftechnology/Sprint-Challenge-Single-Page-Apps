import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function TabNav () {
    const TabNav = () => <TabNav panes={panes} />
    const panes = [
        { menuItem: 'Tab 1', render: () => <TabNav.Pane>Home</TabNav.Pane> },
        { menuItem: 'Tab 2', render: () => <TabNav.Pane>Character</TabNav.Pane> },
        { menuItem: 'Tab 3', render: () => <TabNav.Pane>Location</TabNav.Pane> },
        { menuItem: 'Tab 4', render: () => <TabNav.Pane>Episode</TabNav.Pane> },
    ]
};


export default TabNav;