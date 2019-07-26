import React from 'react'
import { Card, Icon, Label } from 'semantic-ui-react'

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (<Card
    header={name}
    description={`${type} - ${dimension}`}
    extra={<Label className="bottom right attached">{residents && residents.length} residents</Label>}
  />
  )
}
