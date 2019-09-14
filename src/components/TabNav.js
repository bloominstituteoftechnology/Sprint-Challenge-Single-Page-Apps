import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";

function TabNav () {
    const TabNav = () => <TabNav panes={panes} />
    const panes = [
        { menuItem: 'Tab 1', render: () => <TabNav.Pane>Home</TabNav.Pane> },
        { menuItem: 'Tab 2', render: () => <TabNav.Pane>Characters</TabNav.Pane> },
        { menuItem: 'Tab 3', render: () => <TabNav.Pane>Locations</TabNav.Pane> },
        { menuItem: 'Tab 4', render: () => <TabNav.Pane>Episodes</TabNav.Pane> },
    ]

    return (
        <h4></h4>
        
    )
};




export default TabNav;