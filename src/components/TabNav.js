import React from "react";
import { Divider, Tab } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

// const color = 'violet'

// const panes = [
//   {
//     menuItem: 'Home Page',
//     render: () => <Tab.Pane attached={false}><NavLink to='/'>Home Page</NavLink></Tab.Pane>,
//   },
//   {
//     menuItem: 'Characters',
//     render: () => <Tab.Pane attached={false}><NavLink to='/character/'>Characters</NavLink></Tab.Pane>,
//   },
//   {
//     menuItem: 'Locations ',
//     render: () => <Tab.Pane attached={false}><NavLink to='/location/'>Locations</NavLink></Tab.Pane>,
//   },
//   {
//     menuItem: 'Episodes',
//     render: () => <Tab.Pane attached={false}></Tab.Pane>,
//   }
// ]

export default function TabNav() {
  return (
    <div>
      <NavLink to='/'>Home Page</NavLink>
      <NavLink to='/character/'>Characters</NavLink>
      <NavLink to='/location/'>Locations</NavLink>
      <NavLink to='/episode/'>Episodes</NavLink>
    </div>
  )

};
