import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



export default function TabNav() {

    return (

        
<nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
            <NavLink to="/character">Characters</NavLink>
       </li>
       
       <li>
       <NavLink to="/location">Locations</NavLink>
       </li>

       <li>
       <NavLink to="/episode">Episodes</NavLink>
       </li>
       
</nav>
        


     )};

    

 
    

    