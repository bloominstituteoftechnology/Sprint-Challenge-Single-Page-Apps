import React from "react";
import { Tab, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



// https://react.semantic-ui.com/modules/tab/
/* Semantic UI Icons and Pane menu item array render for Tab function */
const panes = [
    {
     menuItem: { key: 'homepage', icon: 'home', content: <NavLink exact to='/'>Homepage</NavLink> },
    },
    {
     menuItem: { key: 'characters', icon: 'arrow circle down', content: <NavLink to='/characters'>Characters</NavLink> },
    },
    {
     menuItem: { key: 'locations', icon: 'arrow circle down', content: <NavLink to='/locations'>Locations</NavLink> },
    },
    {
      menuItem: { key: 'episodes', icon: 'file video', content: <NavLink to='/episodes'>Episodes</NavLink> },
    },
    {
      menuItem: { key: 'search', icon: 'cog', content: <NavLink to='/search'>Search</NavLink> }
    }
  ];

/* render return semantic ui tab array of menu items via panes in Tab function */
export default function TabNav() {
    return( 
        <Menu>
            <Tab panes={panes} />
        </Menu>
    );
};

