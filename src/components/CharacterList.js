import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
      width: '90%',
      margin: 'auto',
      padding: 30,
  },
}));

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        let allCharacters = response.data.results;
        setCharacters(allCharacters);
    })
  }, []);

  return (
    <section className="character-list">
      <div  className={classes.root}>
            <Grid container spacing={3} justify="center">
      {characters.map(person => {
        return <CharacterCard key={person.id} image={person.image}
          name={person.name}
          species={person.species}
          status={person.status}/>
      })}
        </Grid>
       </div>
    </section>
  );
}
