import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Card } from 'react-bootstrap';


import "../index.css";

const apiLink='https://rickandmortyapi.com/api/character/';

export default function SearchForm() {
  const [result, setResult] = useState([]);
  const [apiList, setList] = useState([]);
  const [searchingError, setSearchingError] = useState('');
  const newResults = [];

  const Search = (form) => {
    const character=apiList;
    for(let i=character.length-1; i>=0; i--){

      const names = character[i].name.split(' ');
      const fullName = names[0]+' ';
      const firstName = names[0];
      const lastName = names[1];
      
      // console.log();

      if(firstName === form.name || 
         lastName === form.name||
         fullName === form.name){
         newResults.push(character[i]);
      }
      if(i===0)setResult(newResults);
    } 
  }
  const CheckResult = () => {
    return result;
  }
  return (
    <>
      <div>
        {searchingError}
      </div>

      <FormComponent onSubmit={Search} />
      <div  className='result'>
      {
        result
          ? result.map(character => (
            <div>
              <Card >
                <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                      <p>Status: {character.status}</p>
                      <p>Gender: {character.gender}</p>
                      <p>Species: {character.species}</p>
                    </Card.Text>
                  <button>Look Up Character</button>
                </Card.Body>
              </Card>
            </div>
          ))
          : 'No Results Yet!'
      } 
      </div>
    </>
  );
}


function FormComponent({ onSubmit, initialSearchForm }){
  return (
    <Formik 
      initialValues = {initialSearchForm}
      onSubmit = {onSubmit}
      render = {props => {
        return(
          <Form className='search-form' >
            <div>
              <Field 
              name='name' 
              type='text' 
              placeholder='Character Name' 
              style={{ width: '20rem', margin: '3%', height: '4rem', borderRadius: '8px' }}/>
              <ErrorMessage name='name' component='div' className='error' />
            </div>
            <button
            type='submit'
            >Search</button>
          </Form>
          );
        }}
      />
  );
}