import React from "react";

import EpisodeCard from "./EpisodeCard";

function EpisodeSearchForm(props) {
  console.log(`this is episodesearchform props; `, props)

  const listStyle = {
    display: "grid", 
    gridGap: "2%",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
    padding: "2%"}
    
  return (
    <section className="search-form">
     <form className="search">
      <input
        type="text"
        onChange={props.handleChange}
        value={props.search}
        name="name"
        placeholder="search..."
        className="prompt search-name"
        autoComplete="off" />
     </form>

     <div style={listStyle}>
        {props.episode.map(ep => {
          return (
            <EpisodeCard 
              name={ep.name}
              key={ep.episode}
              episode={ep.episode}
            />
            );    
          })
        }
      </div>
    </section> 
  );
}

export default EpisodeSearchForm;