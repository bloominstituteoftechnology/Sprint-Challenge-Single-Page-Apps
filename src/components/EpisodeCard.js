import React from "react";
import {Card} from "semantic-ui-react";

export default function EpisodeCard(props) {
  const {name, air_date, episode, characters} = props.episode;

  return (
    <Card>
      <Card.Content>
        <Card.Header>Episode {episode} - {name}</Card.Header>
        <Card.Meta>
            <div className="date">
                {air_date}
            </div>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
          Number of Characters: {characters.length}
      </Card.Content>
    </Card>

  );
}
