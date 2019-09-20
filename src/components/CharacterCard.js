import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";

const Card = styled.div `
  background: grey;
`

const CharacterCard = props => {
  return (
    <Card className = "card" key = {jssPluginPropsSort.id}>
      
    </Card>
  )
}

export default CharacterCard;
