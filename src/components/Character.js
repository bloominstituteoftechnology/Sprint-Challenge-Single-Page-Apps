import React from "react";
import axios from "axios";


const Character = (props) => {
  const [character, setCharacter] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setMovie(response.results);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  if (!character) {
    return <div>Loading movie information...</div>;
  }

  const { name } = character;


  return (
    <section className="character-list">
    <div className="">
    Name: <strong>{name}</strong>
  </div>
  {/* <h3>Actors</h3>
  {stars.map(star => (
    <div key={star} className="movie-star">
      {star}
    </div> */}
</section>
    
  );

}

export default Character;