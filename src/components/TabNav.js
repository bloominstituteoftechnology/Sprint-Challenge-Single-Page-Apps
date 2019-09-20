import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



export default function TabNav() {

    return (

        
<nav>
    <h5>
        <NavLink to="/">Home</NavLink>
    </h5>

    <h5>
        <NavLink to="/character">Characters</NavLink>
    </h5>

    <h5>
       <NavLink to="/location">Locations</NavLink>
    </h5>

    <h5>
       <NavLink to="/episode">Episodes</NavLink>
    </h5>

</nav>
        


     )};

    

 
    

    