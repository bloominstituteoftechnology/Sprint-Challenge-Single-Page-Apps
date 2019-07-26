import React from 'react';

export default function EpisodesCard({
  air_date,
  characters,
  created,
  episode,
  name,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{`created: ${created}`}</p>
    </div>
  );
}
