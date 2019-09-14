import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

const TabNav = () => {
  return(
    <div>
      <div className="navBar">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/Characters'>Characters</Link>
        </div>
        <div>
          <Link to='/Locations'>Locations</Link>
        </div>
        <div>
          <Link to='/Episodes'>Episodes</Link>
        </div>
      </div>
    </div>
  )

};

export default TabNav;
