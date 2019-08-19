import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class TabNav extends Component {
  state = { activeItem: 'homepage' }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon='labeled'>
        <Menu.Item name='homepage' active={activeItem === 'homepage'} onClick={this.handleItemClick}>
          <Icon name='home' />
          <NavLink to="/">HomePage</NavLink>
        </Menu.Item>

        <Menu.Item
          name='characters'
          active={activeItem === 'characters'}
          onClick={this.handleItemClick}
        >
          <Icon name='users' />
          <NavLink to="/characters">Characters</NavLink>
        </Menu.Item>

        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        >
          <Icon name='map outline' />
            <NavLink to="/locations">Locations</NavLink>
        </Menu.Item>

        <Menu.Item
            name="episodes"
            active={activeItem === "episodes"}
            onClick={this.handleItemClick}
        >
            <Icon name="video camera" />
            <NavLink to="episodes">Episodes</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}

