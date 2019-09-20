import React, { useState } from "react";
import { withFormik, Field, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function SearchForm({ values, touched, errors }) {
  const [character, setCharacter] = useState();
  return (
    <section className="search-form">
      SEARCH CHARACTERS // Add a search form here
      <Form>
        <Field
          type="text"
          name="username"
          placeholder="Search of a character"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
      </Form>
    </section>
  );
}
const FormikSearchForm = withFormik({
  mapPropsToValues({ username, email, password, terms }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },

  validationSchema: yup.object().shape({
    username: yup
      .string()
      .min(5, "Too Short! Must be at least 5 characters")
      .max(50, "Too Long! Cannot be longer than 50 characters")
      .required("Looks like you forgot the username"),
    email: yup
      .string()
      .email("Whoops ! Looks like that's not a valid email!")
      .required("Whoops, you forgot to enter your email"),
    password: yup
      .string()
      .min(8, "Too Short! Must be at least 8 charachters")
      .max(50, "Too Long! Must be less than 50 characters")
      .required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup.boolean().required("Please confirm you agree with our terms")
  }),
  handleSubmit: (values, { setStatus }) => {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log("res.data: ", res.data);
      })
      .catch(err => console.log(err.res));
    console.log("values: ", values);
  }
})(SearchForm);

export default FormikSearchForm;
