import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import Axios from 'axios'
import CharacterCard from './components/CharacterCard'



export default function App() {
  const[toons, setToons] = useState([]);
  const[query, setQuery] = useState("");

  useEffect(() => {

    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {

      const toonQuery = res.data.results.filter(search =>
        search.name.toLowerCase().includes(query.toLowerCase())
      );
        console.log(res.data.results)
      setToons(toonQuery);
    })
      .catch(error => {
      console.log(error)
    })
    
  }, [query]);



  return (
    <div>
      <Route 
      path = "/"
      component={Header}
      />

      <Route 
      exact
      path ="/Characters"
      render={props => <CharacterList {...props}
      toons={toons} 
      setToons={setToons}
      query={query}
      setQuery={setQuery}
      />}
      />

        <Route
               path ='/characters/:id'
               render={props => 
                <CharacterCard 
                {...props}
                toons={toons}
                />
              }
               />

      
    </div>



  );
}
