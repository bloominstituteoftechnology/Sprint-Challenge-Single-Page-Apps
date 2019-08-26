import React from "react";
import { Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
  return (
    <div className='ui attached tabular menu'>
      <NavLink exact to='/' className='item'>
        <Icon name='home' />
        Home Page
      </NavLink>
      <NavLink to='/character' className='item'>
        <Icon name='users' />
        Characters
      </NavLink>
      <NavLink to='/location' className='item'>
        <Icon name='map outline' />
        Locations
      </NavLink>
      <NavLink to='/episode' className='item'>
        <Icon name='video' />
        Episodes
      </NavLink>
      <NavLink to='/search' className='item'>
        <Icon name='search' />
        Character Search
      </NavLink>
    </div>
  )}
