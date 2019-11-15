import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchForm from './SearchForm'
import {Link, NavLink, Route} from "react-router-dom"
import CharacterCard from "./CharacterCard";
import styled from "styled-components"

function CharacterList(props) {

  const Head = styled.h2 `
  font-size: 300%;
  `
  const Card = styled.div `
    display: flex;
    flex-wrap: wrap;
    background-color: red;
    margin: 5% 30% 5% 30%;
    border: solid 5px black;
    `

  const changeHandler = e =>{
    props.setQuery(e.target.value);



  };

  return(
    <div className="searchPage">
      <Link to= {"/"}>
      <button>Home</button>
      </Link>
      <section className="formSection">
        <SearchForm 
          changeHandler={changeHandler}
          query={props.query}
      />
      </section>
      <section className="character-list">
          {props.toons.map(toon => {
          return(
            
            <Card>
              <section>
               {/* <NavLink to ={`/characters/${toon.name}`}>
              <h2>{toon.name} </h2>
            </NavLink>  */}
            <Head>{toon.name} </Head>
            <p>{toon.location.name}</p>
            <p>{toon.species}</p>
              </section>

            
              
              
            </Card>
            
          )
          })}
        </section>
        <Link to= {"/"}>
      <button>Home</button>
      </Link>
    </div>
  )
}
export default CharacterList;
