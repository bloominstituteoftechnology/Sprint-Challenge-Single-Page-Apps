import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import "../index.css";
import { StaticData } from './staticdata';
import { array } from "prop-types";

const apiLink='https://rickandmortyapi.com/api/character/';

export default function SearchForm() {
  const [result, setResult] = useState([]);
  const [apiList, setList] = useState([]);
  const [searchError, setSearchError] = useState('');
  const newResults = [];

  const initialSearchForm = { name: '' };
 

  const Search = (form) => {
    const character=apiList;
    for(let i=character.length-1; i>=0; i--){

      const names = character[i].name.split(' ');
      const fullName = names[0]+' '+names[1];
      const firstName = names[0];
      const lastName = names[1];
      
      //console.log(firstName === form.name);
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

  useEffect(() => {
    axios.get(apiLink).then(res => {
      setList(apiList.concat(res.data.results));
    }).catch(e => console.log(e));
    CheckResult();
  }, [result]);
 
  return (
    <>
      <div>
        {searchError}
      </div>

      <FormComponent onSubmit={Search} />

      <div  className='result'>
      {
        result
          ? result.map(character => (
            <div>
              <Card style={{ width: '18rem', margin: '2%' }}>
                <Card.Img variant="top" src={character.image} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>
                      <p>Status: {character.status}</p>
                      <p>Gender: {character.gender}</p>
                      <p>Species: {character.species}</p>
                    </Card.Text>
                  <Button variant="primary">Look Up!</Button>
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
              style={{ width: '18rem', margin: '2%', height: '3rem', borderRadius: '8px' }}/>
              <ErrorMessage name='name' component='div' className='error' />
            </div>
            <Button 
            variant="primary" 
            type='submit'
            style={{ margin: '1%', height: '3rem', borderRadius: '8px' }}
            >Search</Button>
          </Form>
          );
        }}
      />
  );
}