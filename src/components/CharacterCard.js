import React, {useState, useEffect} from "react";
import axios from "axios";


const CharacterCard = props => {
  const [character, setCharacter] = useState();
  useEffect(() => {
    const id = Number(props.match.params.id);
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

   if (!character) {
     return <div>Loading character information...</div>;
   }
  
  const { name, status, gender, image, species, type } = character;
  return (
    <div className="char-card">
      <h2>{name}</h2>
      <div className="char-img">
        <img src={image} alt="Rick and Morty Characters" />
      </div>
      <div className="char-info">
        <p>
          Type: <strong>{type}</strong>
        </p>
        <p>
          Gender: <strong>{gender}</strong>
        </p>
        <p>
          Species: <strong>{species}</strong>
        </p>
        <p>
          Status: <strong>{status}</strong>
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
