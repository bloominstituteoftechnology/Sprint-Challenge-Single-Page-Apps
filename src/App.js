import React  from "react";
import Header from "./components/Header.js";
import TabNav from "./components/TabNav.js";
import WelcomePage from "./components/WelcomePage";
import CharacterPage from "./components/CharacterPage.js";
import LocationPage from "./components/LocationPage.js";
import EpisodePage from "./components/EpisodePage";
import { Route } from "react-router-dom";




 function App() {
  
  return (
    <main>
      <div className="App">

      <Header />
      <TabNav />
      
          <Route exact path="/" component={WelcomePage} />
    <Route path="/LocationPage" component={LocationPage} />
    <Route path="/EpisodePage" component={EpisodePage} />
    <Route path="/CharacterPage" component={CharacterPage} />
   
    </div>
   
    </main>

    
  );
}



export default App;
// import AppRouter from "./components/AppRouter.js";