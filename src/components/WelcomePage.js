import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function WelcomePage() {
  const Page = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const Img = styled.img`
    margin-top: 10%;
    margin-left: 15%;
  `;
  const classes = useStyles();
  return (
    <Page>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to="/Characters">
            <Button variant="outline" color="primary">
              Characters
            </Button>
          </Link>
          <Link to="/Search">
            <Button variant="outline" color="primary">
              Search
            </Button>
          </Link>
          <Link to="/Locations">
            <Button variant="outlined" color="primary">
              Locations
            </Button>
          </Link>
          <Img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </section>
    </Page>
  );
}
