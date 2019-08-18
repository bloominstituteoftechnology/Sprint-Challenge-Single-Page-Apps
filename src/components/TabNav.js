 import React from "react";
 import { Tab, Menu, Icon } from "semantic-ui-react";
 import { NavLink } from "react-router-dom";

// // TODO: Add missing tabs below
const panes = [
    { menuItem: 'HomePage', render: () => <Tab.Pane>Home Page</Tab.Pane> },
    { menuItem: 'Character', render: () => <Tab.Pane>Character</Tab.Pane> },
    { menuItem: 'Location', render: () => <Tab.Pane>Location</Tab.Pane> },
    { menuItem: 'Episodes', render: () => <Tab.Pane>Episodes</Tab.Pane> },
  ]
  

function TabNav() {

    return(
    <div>
     <Tab panes={panes} />
     </div>

    )
};




// const TabExampleBasic = () => <Tab panes={panes} />

 export default TabNav;