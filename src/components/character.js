import React, {useState} from 'react'

const Character = (props) => {

  const [click, setClick] = useState(false)

  return (
    <div>
    <article className="card">
      <button className="click"
        onClick={event => {
          setClick(!click)
          event.preventDefault() 
        }}
      >
        <img src={props.result.image} alt={`${props.result.name}`} />

     </button>
      {click && (<>
        <p>Name: {props.result.name}</p>
        <p>Origin: {props.result.origin.name}</p>
        <p>Location: {props.result.location.name}</p>
        <p>Species: {props.result.species}</p>
        <p>Status: {props.result.status}</p>
        <p>Type: {props.result.type}</p>
        </>)}
         
    </article>
    </div>
  )
}

export default Character