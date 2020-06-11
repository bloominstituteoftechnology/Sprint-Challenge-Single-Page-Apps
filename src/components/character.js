import React, {useState} from 'react'

const Character = (props) => {

  const [displayToggle, setDisplayToggle] = useState(false)

  return (
    <article className="card">
      <button
        onClick={(event)=>{
          event.preventDefault()
          setDisplayToggle(!displayToggle)
        }}
      >
        <img src={props.result.image} alt={`${props.result.name}`} />
      </button>
      {displayToggle && (<>
        <p>Name: {props.result.name}</p>
        <p>Origin: {props.result.origin.name}</p>
        <p>Location: {props.result.location.name}</p>
        <p>Species: {props.result.species}</p>
        <p>Status: {props.result.status}</p>
        <p>Type: {props.result.type}</p>
        </>)}
    </article>
  )
}

export default Character