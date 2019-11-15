import React from "react";
import {Link, NavLink, Route} from "react-router-dom"
export default function Header() {
  return (

     <NavLink to ={`/characters/`}>
        <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>     
            </NavLink>  
    
  );
}
