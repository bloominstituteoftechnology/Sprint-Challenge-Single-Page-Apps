import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

 const panes = [
   
    { menuItem: 'Home1', render: () => <Tab.Pane>Home</Tab.Pane> },

    { menuItem: 'Characters', render: () => <Tab.Pane><NavLink to="/character">Characters</NavLink></Tab.Pane> },
    { menuItem: 'Locations', render: () => <Tab.Pane><NavLink to="/location">Locations</NavLink></Tab.Pane> },
    { menuItem: "episode", render: () => <Tab.Pane><NavLink to="/episode">Episodes</NavLink></Tab.Pane> },
    
  ]
 

  const TabExampleBasic = () => <Tab panes={panes} />
  
   export default TabExampleBasic

