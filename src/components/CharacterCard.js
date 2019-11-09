import React, { useState, useEffect } from "react";
import { Container, Card, Image, Icon } from "semantic-ui-react";
import Axios from "axios";

export default function CharacterCard(props) {
  const [rmData, setrmData] = useState([]);
  const [newDataCall, setNewDataCall] = useState({});

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character")
      // .then(res => console.log(res.data.results))
      .then(res => setrmData(res.data.results))
      .catch(res => console.log(res));
  }, []);

  useEffect(() => {
    
  })

  return (
    <div>
      {
        rmData.map((item) => {
        return (
          <Card>
            <Image src={item.image} wrapped ui={false} />
            <Card.Content>
        <Card.Header>{item.name}</Card.Header>
              <Card.Meta>Species:{item.species}</Card.Meta>
              <Card.Description>
                {`Hi I'm from ${item.origin.name}`}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {`I've been in ${item.episode.length} episodes`}
              </a>
            </Card.Content>
          </Card>
        );
      })
    }
    </div>
  );
}
