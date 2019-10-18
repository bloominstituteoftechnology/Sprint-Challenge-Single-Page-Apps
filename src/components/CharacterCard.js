import React, {useState, useEffect} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import axios from "axios";


export default function CharacterCard(props) {
  const {id, name, species, status, origin, location, image, gender, episode } = props;
  const [epi, setEpi] = useState([])
  const [world, setWorld] =useState([])

  useEffect(()=>{
      Promise.all(
        episode.map(function(element){
          return axios.get(element)
            .then(res =>{
              return res.data;
            })
        }))
        .then(res1 => {
          setEpi(res1)
        })
  },[])

//   useEffect(()=>{
//     Promise.all(
//       location.map(function(element){
//         return axios.get(element.url)
//           .then(res =>{
//             return res.data;
//           })
//       }))
//       .then(res1 => {
//         console.log(res1)
//         setWorld(res1)
//       })
// },[])

  return (
    <div key={id}>
      <Card>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{species}</CardSubtitle>
          <CardSubtitle>Gender: {gender}</CardSubtitle>
          <CardSubtitle>Status: {status}</CardSubtitle>
        </CardBody>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Origin: {origin.name}</CardSubtitle>
          <CardText>
            Location: {location.name}
          </CardText>
          <CardText>
              Episodes: {epi.map(episode => (
                <div>
                  <span>{episode.name}:{episode.episode}</span>
                </div>
              ))}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

