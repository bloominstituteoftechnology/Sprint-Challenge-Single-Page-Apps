import React from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";

import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js";
// import SearchForm from "./SearchForm.js";

export default function AppRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" component={CharacterList} />
        <Route exact path="/locations" component={LocationsList} />
        <Route exact path="/episodes" component={EpisodeList} />
      </Switch>
    </div>
  );
}