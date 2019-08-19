import React from "react";
import { Route } from "react-router-dom";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";
import SearchForm from "./SearchForm";
import SearchData from "./SearchData";
import CharacterCard from "./CharacterCard";

function AppRouter() {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/search" component={SearchForm} />
      <Route exact path="/character" component={CharacterList} />
      <Route exact path="/location" component={LocationsList} />
      <Route exact path="/episode" component={EpisodesList} />
    </div>
  );
}
export default AppRouter;
