import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import styled from 'styled-components';

function SearchForm({values, errors, touched}) {
  return (
    <section className="search-form">
      <Form>
        <Field type="text" name="name"></Field>
        {touched.name && errors.name && (
          <p className="errors">{errors.name}</p>
        )}
        <Field type="text" name="species"></Field>
        {touched.species && errors.species && (
          <p className="errors">{errors.species}</p>
        )}
        <Field type="text" name="status"></Field>
        {touched.status && errors.status && (
          <p className="errors">{errors.status}</p>
        )}
        <Field type="text" name="gender"></Field>
        {touched.gender && errors.gender && (
          <p className="errors">{errors.gender}</p>
        )}
        <Form>
        <button type="submit">Submit!</button>
        </Form>
      </Form>
    </section>
  )
}
const FormikSearchForm = withFormik({
  mapPropsToValues({ name, species, status, gender }) {
    return {
      name: name || "",
      species: species || "",
      status: status || "",
      gender: gender || ""
    };
  },
  validationSchema: Yup.object().shape({
    species: Yup.string().required(),
    name: Yup.string().required(),
    status: Yup.string().required(),
    gender: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting! ", values);
    axios
      .post("https://rickandmortyapi.com/api/character/", values)
      .then(res => {
        console.log('success', res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(SearchForm);

export default FormikSearchForm;