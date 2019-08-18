import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  return (
    <div>
      <Menu>
        <Menu.Item>
          <NavLink exact to="/" className="nav-links">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/character" className="nav-links">
            Characters
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/location" className="nav-links">
            Locations
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact to="/episode" className="nav-links">
            Episodes
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
    // <div>
    //   <NavLink exact to="/">
    //     Home
    //   </NavLink>
    //   <NavLink to="/character-list">Characters</NavLink>
    //   <NavLink to="/location-list">Location</NavLink>
    //   <NavLink to="/episode-list">Episodes</NavLink>
    // </div>
  );
}
