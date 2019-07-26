import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu, Tab } from "semantic-ui-react";

// TODO: Add missing tabs below

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Home Page");
const characterLabel = createLabel("users", "Characters");
const locationLabel = createLabel("map", "Locations");
const episodesLabel = createLabel("camera", "Episodes");

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/`} content={welcomeLabel} />
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={Nav}
        to={`/characters`}
        content={characterLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="locations"
        as={Nav}
        to={`/locations`}
        content={locationLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="episodes"
        as={Nav}
        to={`/episodes`}
        content={episodesLabel}
      />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
