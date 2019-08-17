import React  from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import LocationPage from "./components/LocationPage.js";
import CharacterList from "./components/CharacterList.js";



export default function App() {
  
  return (
    <main>
      <div className="App">

      <Header />
      {/* <TabNav /> */}
      {/* <AppRouter /> */}
    <Route path="/" component={WelcomePage} />
    <Route path="./components/LocationPage" component={LocationPage} />
    <Route path="./components/EpisodePage" component={EpisodePage} />
    <Route path="./components/CharacterPage" component={CharacterPage} />
    </div>
    </main>

    
  );
}




// import AppRouter from "./components/AppRouter.js";