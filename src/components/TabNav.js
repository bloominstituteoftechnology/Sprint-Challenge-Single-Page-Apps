import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import Character from './CharacterPage';
import LocationPage from './LocationPage';
import EpisodePage from './EpisodePage';
import WelcomePage from './WelcomePage';

// // TODO: Add missing tabs below
import { Tab } from 'semantic-ui-react'

// const panes = [
//   { menuItem: 'Home Page', render: () => <Tab.Pane>{WelcomePage}</Tab.Pane>},
//   { menuItem: 'Character', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
//   { menuItem: 'Episodes', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
//   { menuItem: 'Location', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
// ]
//<Tab panes={panes} />


function TabNav() {
   return (
<div>
<ul>

 <li>
   <NavLink exact to="/">
     Home
   </NavLink>
 </li> 
 <li>
   <NavLink to="/Character" key={Character.id}> Character</NavLink>
 </li>
 <li>
   <NavLink to="/Episodes"> Episodes</NavLink>
 </li>
 <li>
   <NavLink to="/Location"> Location </NavLink>
 </li>
</ul>

    

   </div>
 );
}

  


export default TabNav;