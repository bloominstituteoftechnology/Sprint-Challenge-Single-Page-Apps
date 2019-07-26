import React from "react";
import { Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import WelcomePage from "./WelcomePage";

export default function AppRouter() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationsList} />
        <Route exact path="/" component={WelcomePage} />
        {/* <Route path="/episodes" component={} /> */}
      </Switch>
    </div>
  );
}
