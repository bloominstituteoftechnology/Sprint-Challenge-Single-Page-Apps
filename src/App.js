import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import TabNav from "./components/TabNav.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/character' component={CharacterList} />
      <Route path='/location' component={LocationsList} />
    

    </main>
  );
}
















// import React from "react";
// import Header from "./components/Header.js";
// import CharacterCard from './components/CharacterCard'



//  const App= ()=> {


// 	return (
// 		<main>
// 			<Header />
//       <CharacterCard/>
// 		</main>
// 	);
// }
// export default App
