import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Router>
    <div>
      <div className="navigation">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/CharacterList">Character List</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
    </Router>
  );
};

export default Navigation;