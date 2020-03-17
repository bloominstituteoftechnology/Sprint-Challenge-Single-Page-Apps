import React from "react";
import Header from "./components/Header.js";
import { Route, Link} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm"
import styles from "styled-components";

const Head = styles.h3`
margin: 10px;
display: inline-block;
color: black;
`;

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Link to='/'>
        <Head>Home</Head></Link>
      <Link to='/characters'> 
      <Head>Characters</Head></Link>
      <Link to='/Search'><Head>Search</Head></Link>
      <Route exact path ='/' component={WelcomePage}/>
      <Route path= '/character' component={CharacterList}/>
      <Route exact path ='/Search' component={SearchForm}/>
    </main>
  );
}
