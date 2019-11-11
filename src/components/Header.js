import React from "react";
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import SearchForm from './SearchForm'


export default function Header() {
  return (
    <div>
    <nav className="site_nav">
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    <SearchForm />
    </nav>
    <Link to='/'>
      <Button>Home</Button>
    </Link>
    <Link to='./characterlist'>
      <Button style={{marginTop: '1%', marginBottom: '1%'}}>Character List</Button>
    </Link>

    </div>

  );
}
