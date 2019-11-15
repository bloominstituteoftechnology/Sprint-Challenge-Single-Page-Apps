import React from "react";
import {Route} from "react-router-dom";
import { WelcomePage, Header, Navigation, CharacterList} from "./components";

export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path="Home" component={WelcomePage} />
      <Route exact path="Character_List" component={CharacterList} />

      
      {/* <Route path="Character List" component={CharacterList} /> */}
    </main>
  );
}
