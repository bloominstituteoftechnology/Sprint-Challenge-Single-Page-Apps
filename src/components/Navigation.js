import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Header from "./Header";

const Navigation = () => {
  return (
    <div>
      <Header />
      <div className="navigation">
        <div>
          <Link to="/WelcomePage">Home</Link>
        </div>
        <div>
          <Link to="/CharacterList">Character List</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;