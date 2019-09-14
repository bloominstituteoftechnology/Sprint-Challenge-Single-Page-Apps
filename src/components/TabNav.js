import React, {Component} from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <Link to='/'>Home</Link>
        </Menu.Item>

        <Menu.Item
          name='characters'
          active={activeItem === 'characters'}
          onClick={this.handleItemClick}
        >
          <Link to='/Characters'>Characters</Link>
        </Menu.Item>

        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        >
          <Link to='/Locations'>Locations</Link>
        </Menu.Item>

        <Menu.Item
          name='episodes'
          active={activeItem === 'episodes'}
          onClick={this.handleItemClick}
        >
          <Link to='/Episodes'>Episodes</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

// export const TabNav {
//
//   // return(
//   //   <div>
//   //     <div className="navBar">
//   //       <div>
//   //         <Link to='/'>Home</Link>
//   //       </div>
//   //       <div>
//   //         <Link to='/Characters'>Characters</Link>
//   //       </div>
//   //       <div>
//   //         <Link to='/Locations'>Locations</Link>
//   //       </div>
//   //       <div>
//   //         <Link to='/Episodes'>Episodes</Link>
//   //       </div>
//   //     </div>
//   //   </div>
//   // )
//
// };
