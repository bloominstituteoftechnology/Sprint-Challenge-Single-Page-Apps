import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios';

import {Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterList({props, char}) {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([])


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
      .get('https://richandmortyapi.com/api/character/')
      .then(function (response) {
        setCharList(response.data.results);
      })
    }
    getChars();
  }, []);


  function CharDetails ({char}) {

    const { image, name, species, origin } = char;

    return (
          <section className = 'character-list grid view'> 
            <div>
              <Card>
                <h2>{char.name}</h2>
                <Image>
                  <img src={char.image} alt="picture"/>
                </Image>
                <p>{char.species} : {char.species}</p>
                <p>{char.origin.name}</p>
              </Card>

            </div>

          </section>
    
    )
  }
  
    return <section className="character-list grid-view">
      {charList.map( char => (
        <CharDetails key = {char.id} char = {char} />
      ))}
    </section>

}

