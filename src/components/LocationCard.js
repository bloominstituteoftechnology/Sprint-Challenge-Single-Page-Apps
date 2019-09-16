import React from "react";
import styled from 'styled-components'



const StyledH2 = styled.h2`
width: 100%;
background-color: green;`

export default function LocationCard(props) {
  console.log("LC", props)
  return( 
  <div>
   <StyledH2>{props.location.name}</StyledH2>
   {props.location.type}-
   {props.location.dimension}  {props.location.resident}

            

   </div>
 
  )
}
