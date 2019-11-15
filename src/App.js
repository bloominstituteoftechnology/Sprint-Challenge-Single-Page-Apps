import React from "react";
import {Route} from "react-router-dom";
import { WelcomePage, Header, Navigation, CharacterList} from "./components";

export default function App() {
  return (
    <main>
      <Navigation />
      <Header />
      <WelcomePage />
      <Route exact path="WelcomePage" component={WelcomePage} />
      <Route path="CharacterList" component={CharacterList} />

      
      {/* <Route path="Character List" component={CharacterList} /> */}
    </main>
  );
}
