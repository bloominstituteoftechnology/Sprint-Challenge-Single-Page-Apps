import React from 'react';
import Card from '@material-ui/core/Card'

export default function CharacterCard({ name, species, status}) {
  return (
    <Card>

      <h3>Name:{name}</h3>
      <p>Species:{species}</p>
      <p>Status:{status}</p>

    </Card>

)}
