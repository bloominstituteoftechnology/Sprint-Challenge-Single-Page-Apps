import React from "react";
import {
  Jumbotron,
  Container,
} from "reactstrap";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <Jumbotron fluid>
          <Container fluid>
            <h1>Welcome to the ultimate fan site!</h1>
            <img
              className="App-logo"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
          </Container>
        </Jumbotron>
      </header>
    </section>
  );
}
