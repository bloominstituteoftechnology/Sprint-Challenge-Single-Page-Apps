import React from "react";
import CharacterList from "./CharacterList";
import{Link} from "react-router-dom";


 function CharacterCard(props) {
   console.log(props);
   const { name, species, gender, status, id, image } = props.character;
  return (
    <div className ="character-card">
      <Link to={`info/results/${id}`}> <h2>{name}</h2 ></Link>
      <div className="character-image">
        <img src={image} alt={`photo of ${name}`}/>
      </div>
      <div className ="character-species">
        Species: <em>{species}</em>
      </div>
      <div className="character-gender">
        <p> Gender: {gender}</p>
      </div>
      <div className="character-status">
        <p>Status: {status}</p>
      </div>
    </div>

   );  
  }
        
  
export default CharacterCard;