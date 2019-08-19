import React, { useState } from "react";
import Axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);

  function onSearch(name) {
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`).then(
      res => {
        setSearch(res.data.results);
        console.log("search", res.data.results);
      }
    );
  }

  const handleInputChange = e => {
    setName(e.target.value);
  };

  return (
    <section className="search-form">
      <form
        onSubmit={event => {
          event.preventDefault();
          onSearch(name);
        }}
      >
        <input
          onChange={event => handleInputChange(event)}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      <div className="character-list grid-view">
        {search.map(search => {
          return (
            // <span>todo: character</span>
            <div>
              <Card>
                <Image src={search.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{search.name}</Card.Header>
                  <Card.Meta>
                    {search.species} {search.status}
                  </Card.Meta>
                  <Card.Description>
                    Location: {search.location.name}
                  </Card.Description>
                  <Card.Description>
                    Origin: {search.origin.name}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link exact to="/episode">
                    <Icon name="user" />
                    Episodes
                  </Link>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
