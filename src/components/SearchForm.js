import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Card } from 'react-bootstrap';
import "../index.css";
import { StaticData } from './staticdata';
import { array } from "prop-types";

export default function SearchForm() {
  const [result, setResult] = useState();
  const [searchError, setSearchError] = useState('');

  const initialSearchForm = { name: '' };
 

  const Search = (form) => {
    StaticData.results.forEach(character => {
      const names = character.name.split(' ');
      const fullName = names[0]+' '+names[1];
      const firstName = names[0];
      const lastName = names[1];
      
      // console.log(fullName, form.name);
      if(firstName === form.name || 
         lastName === form.name||
         fullName === form.name){
          debugger
          setResult(character);
          //console.log(character);
      }
    });
  }

  const CheckResult = () => {
    console.log(result);
    return result;
  }

  useEffect(() => {
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
          ? <div>
              <Card style={{ width: '18rem', margin: '2%' }}>
                <Card.Img variant="top" src={result.image} />
                  <Card.Body>
                    <Card.Title>{result.name}</Card.Title>
                    <Card.Text>
                      <p>Status: {result.status}</p>
                      <p>Gender: {result.gender}</p>
                      <p>Species: {result.species}</p>
                    </Card.Text>
                  <Button variant="primary">Look Up!</Button>
                </Card.Body>
              </Card>
            </div>
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