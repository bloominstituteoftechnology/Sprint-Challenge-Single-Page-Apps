import React, { useEffect, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import Axios from "axios";
import { Container, Row } from "reactstrap";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);
  const [episodeQuery, setEpisodeQuery] = useState("");

  const handleChange = event => {
    setEpisodeQuery(event.target.value);
  };

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data);
        const episodes = res.data.results.filter(a =>
          a.name.toLowerCase().includes(episodeQuery.toLowerCase())
        );
        setEpisode(episodes);
        console.log(episodes);
      })
      .catch(err => console.log(err.response));
  }, [episodeQuery]);

  return (
    <Container>
      <form className="searchBar">
        <input
          type="text"
          onChange={handleChange}
          value={episodeQuery}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by episode"
          autoComplete="off"
        />
      </form>

      <Row>
        {episode.map(a => {
          return (
            <EpisodeCard
              name={a.name}
              airDate={a.air_date}
              episode={a.episode}
              id={a.episidode}
            />
          );
        })}
      </Row>
    </Container>
  );
}
