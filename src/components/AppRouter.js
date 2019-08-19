import React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import EpisodesList from "./EpisodesList";
import LocationsList from "./LocationsList";
import WelcomePage from "./WelcomePage";
 
const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />
        <Route path="/episodes" component={EpisodesList} />
      </Switch>
    </div>
  );
}

export default AppRouter;