import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='ui centered'>
      <h1 className='ui center'>
        <Link to='/' className='to-characters'>
          Rick &amp; Morty Fan Page
        </Link>
      </h1>
    </header>
  );
}
