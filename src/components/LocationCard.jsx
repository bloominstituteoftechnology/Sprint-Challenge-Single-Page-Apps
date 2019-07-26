import React from 'react';

export default function LocationCard({
  name,
  type,
  dimension,
  residents,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{`${type} - ${dimension}`}</p>
      <div>{`${residents.length} residents`}</div>
    </div>
  );
}
