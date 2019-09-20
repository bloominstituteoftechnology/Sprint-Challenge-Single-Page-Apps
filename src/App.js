import React from "react";
import { Route, Link } from 'react-router-dom'


// import { WelcomePage, Navigation, Header, SearchForm, CharacterList, LocationsList} from './components';
import WelcomePage from "./components/WelcomePage.js"
import Navigation from "./components/Navigation.js"
import Header from "./components/Header.js"
import SearchForm from "./components/SearchForm.js"
import CharacterList from "./components/CharacterList.js"
import LocationsList from "./components/LocationsList.js"



export default function App() {
  return (
    <main>
      <Header />
      <SearchForm/>
      <Navigation/>
      <Route exact path="/" component={WelcomePage}/>
      <Route path = "/characterlist" component={CharacterList}/>
    </main>
  );
}
