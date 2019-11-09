// import React from "react";
// import styled from "styled-components";

// const Cards = styled.div`
//  border: 1px solid black;
//  margin: 2%;
//  background-color: lightblue;
//  border-radius: 10px;
//  padding: 3%;
// `


// export default function CharacterCard({ name, species, status}) {
//   return (
//     <Cards>

//       <h3>Name:{name}</h3>
//       <p>Species:{species}</p>
//       <p>Status:{status}</p>



//       </Cards>

// )}


import React from 'react';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function CharacterCard( { name, imageURL, species, status }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {species}
            <br></br>
            Status: {status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}