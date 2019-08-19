 import React from "react";
 import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
//  import { Tab, Menu, Icon } from "semantic-ui-react";
 import CharacterPage from './CharacterPage';
 import LocationPage from './LocationPage';
 import EpisodePage from './EpisodePage'

// // TODO: Add missing tabs below

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
    <NavLink to="/Character" >Character</NavLink>
  </li>
  <li>
    <NavLink to="/Episodes"> Episodes</NavLink>
  </li>
  <li>
    <NavLink to="/Location"> Location </NavLink>
  </li>
</ul>

     {/* <Route exact path="/" component={WelcomePage} /> */}
     <Route exact path="/Character" component={CharacterPage} />
     <Route path="/Location" component={LocationPage} />
     <Route path="/Episodes" component={EpisodePage} />

    </div>
  );
}


 export default TabNav;