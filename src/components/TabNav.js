import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";



export default function TabNav() {

    return (

        
<nav>

    
        <NavLink className="navlink" to="/">Home</NavLink>
    
        <NavLink className="navlink" to="/character">Characters</NavLink>
    
       <NavLink className="navlink" to="/location">Locations</NavLink>
   
       <NavLink className="navlink" to="/episode">Episodes</NavLink>
    

</nav>
        


     )};

    

 
    

    