import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">
          <NavLink exact to="/" activeClassName="nav-links">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/character" activeClassName="nav-links">
            Characters
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/location" activeClassName="nav-links">
            Locations
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/episode" activeClassName="nav-links">
            Episodes
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/search" activeClassName="nav-links">
            Search
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
}
