import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList.js";



export default function App() {



  return (
    <div>
      <Route 
      path = "/"
      component={Header}
      />

      <Route 
      exact
      path ="/Characters"
      render={props => <CharacterList {...props}
      />}
      />

      
    </div>



  );
}
