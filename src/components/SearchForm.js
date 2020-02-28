import React, { useState } from "react";
import { FormGroup, Form, Button, Label, Input  } from "reactstrap";


export default function SearchForm({handleInputChange, query}) {


  return (
  
    <Form >
      <FormGroup>
         <Label for='Search'></Label>
        <Input type='search' name='search' id='search' value={query} onChange={handleInputChange} placeholder='Search for a Name'/>
      </FormGroup>
    </Form>

  );
}
