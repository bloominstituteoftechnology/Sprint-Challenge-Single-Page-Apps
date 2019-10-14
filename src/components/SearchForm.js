import React, { useState } from "react";

import { Form, Input, Button } from 'reactstrap';

export default function SearchForm( { placeholder, handleChange, handleSubmit }) {
 
  return (
    <section className="search-form">
      <Form onSubmit={handleSubmit}>
        <Input
          name='search'
          type='search'
          placeholder={placeholder}
          onChange={handleChange}
        />
      <Button outline color="primary" block>Submit</Button>
      </Form>
    </section>
  );
}