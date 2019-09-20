import React, { useState, useEffect } from "react";
import {withFormik, Form, Field} from 'formik';
import axios from "axios";
//import * as Yup from 'yup';


function SearchForm(values, status) {
  const [search, setSearch] = useState([]);
  console.log("search", search);

  useEffect(() => { 
    if(search){
      setSearch([...search, status])
    }
  }, [status]);

  return (
    <section className="search-form">
     Search Form!
     <Form>
       <Field
         type="text"
         name="Name"
         placeholder = "Search Name Here"
       />
     </Form>
     {search.map((items) => ( 
      //  console.log('map items', items.name)
       <ul className = "square" >
         <li key= {items.id}>Name: {items.Name}</li>
       </ul>
     ))}
    </section>
  );
}
const FormikSearchForm = withFormik({
  mapPropsToValues({Name}){
    return {
      Name: Name || ""
    }
  },
  handleSubmit(values, {setStatus}){
    axios.get(`https://rickandmortyapi.com/api/character/?name=${values.Name}`)
      .then(res => {
        console.log('setsearchdata ', res.data.results)
        setStatus(res.data.results);
      })
      .catch(err => {
        console.log('database error', err);
      })
    console.log("values and character", values );
  }
})(SearchForm)
console.log(FormikSearchForm)
export default FormikSearchForm;

// if value == props.name
