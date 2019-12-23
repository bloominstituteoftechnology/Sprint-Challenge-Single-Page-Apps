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
          alt="book1"
        />
        <img
        className="main-img"
        src="https://prodimage.images-bn.com/pimages/9781620104392_p0_v3_s600x595.jpg"
        alt="book2"
        />
        <img
        className="main-img"
        src="https://prodimage.images-bn.com/pimages/9781620105351_p0_v7_s600x595.jpg"
        alt="book3"
        />
        <img
        className="main-img"
        src="https://images-na.ssl-images-amazon.com/images/I/61ah9PwyV6L._SX327_BO1,204,203,200_.jpg"        
        alt="book4"
        />
        <Link className="main-buttons" to={'/characters'}>See Characters</Link>
      </header>
    </section>
  );
}