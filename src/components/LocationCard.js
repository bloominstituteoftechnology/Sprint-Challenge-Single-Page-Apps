import React from "react";
import {Link} from 'react-router-dom'

export default function LocationCard({ name, type, dimension, residents, id }) {
  
  return( 
  <Link to ={`/location/${id}`}>
  <span>todo: location</span>
  </Link>
  )
}
