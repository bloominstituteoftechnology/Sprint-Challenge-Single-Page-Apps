import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => (<NavLink exact {...props} activeClassName="active" /> );


const LabelMaker = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>;


const locLabel = LabelMaker("location arrow", "Locations");

const epLabel = LabelMaker("video play", "Episodes");

const welcomeLabel = LabelMaker("home", "Home Page");

const charLabel = LabelMaker("users", "Characters");

const panes = [


    { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  
    { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={charLabel} /> },
  
    { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locLabel} /> },
  
    { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={epLabel} /> }
  

]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
