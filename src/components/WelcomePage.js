import React from "react";
import {Link} from 'react-router-dom';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://images-na.ssl-images-amazon.com/images/I/51XJOFqBREL._SX331_BO1,204,203,200_.jpg"
          alt="rick"
        />
        <Link className="main-buttons" to={'/characters'}>See Characters</Link>
      </header>
    </section>
  );
}