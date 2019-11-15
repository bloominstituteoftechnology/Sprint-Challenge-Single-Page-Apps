import React from "react";
import {Route} from "react-router-dom";
import { WelcomePage, Navigation, CharacterList} from "./components";

export default function App() {
  return (
    <main>
      <Navigation />
      <Route path="/WelcomePage" component={WelcomePage} />
      <Route path="/CharacterList" component={CharacterList} />
    </main>
  );
}
