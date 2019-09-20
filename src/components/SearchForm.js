import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
export default function SearchForm() {

  const SearchForm = ({ errors, touched, values, status }) => {
    const [character , setCharacter] = useState([]);
    useEffect(() => {
      status && setChar(character => [...character, status]);
    }, [status]);
    
    return (
      <div className="search-form">
        <h1>Search Form</h1>
        <Form>
          <Field type="text" name="Character" placeholder="Character" />
          {touched.species && errors.species && (
            <p className="error">{errors.species}</p>
            )}
            <button type="submit">Submit!</button>
      </Form>
{characters.map(character => (
  <ul key={character.id}>
    <li>Character: {charater.type}</li>
  </ul>
))}
</div>
);
}
handleSubmit(values, { setStatus }); {
  axios
    // values is our object with all our data on it.
    .post("https://rickandmortyapi.com/api/character/", values)
    .then(res => {
      setStatus(res.data);
      console.log(res);
    })
    .catch(err => console.log(err.response));
}
}
(SearchForm); // currying functions in Javascript
console.log("This is the HOC", FormikSearchForm);
export default FormikSearchForm;
