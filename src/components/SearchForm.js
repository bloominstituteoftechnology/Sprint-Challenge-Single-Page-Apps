import React, { useState } from "react";
import { Form, Field, withFormik } from "formik";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <div className="search-form">
      <Form onSubmit={() => onSearch(name)}>
        <Field
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}

const formikHOC = withFormik({
  mapPropsToValues({ name }) {
    return {
      name: name || ''
    }
  }
})