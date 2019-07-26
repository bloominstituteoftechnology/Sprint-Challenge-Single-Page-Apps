import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home Page")
const characterLabel = createLabel("users", "Characters")
const locationsLabel = createLabel("users", "Locations")
const episodesLabel = createLabel("users", "Episodes")

const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationsLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={episodesLabel} /> }
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav
