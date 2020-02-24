import React from "react";

import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export default function Header() {
  const linkStyle = {
    color: "red"
  };
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Button color="primary" size="sm">
        <Link style={linkStyle} to={"/"}>
          Home Page
        </Link>
      </Button>
      <Button color="primary" size="sm">
        <Link style={linkStyle} to={"/characters"}>
          List Of Characters{" "}
        </Link>
      </Button>
    </header>
  );
}
