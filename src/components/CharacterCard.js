import React, {useEffect, useState} from "react";
import axios from "axios";


export default function CharacterCard(props) {
  const id = props.match.params.id
  // const shopItem = props.propeties.find(
  //   item => item.id === Number(props.match.params.dataID)
  // );
  const [person, setPerson] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
    
      setPerson(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, []);
  console.log(person)
  return (
    <>
<h3>{person.name}</h3>
    </>
  )
}
