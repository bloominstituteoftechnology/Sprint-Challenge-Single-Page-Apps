import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function SearchForm() {

  const [ search, setSearch ] = useState("");
 
  return (
    <section className="search-form">
      <TextField
      id="search"
      label="Search Characters"
      type="search"
      margin="normal"
      variant="outlined"
      value={search}
      onChange={event => setSearch(event.target.value)}
      />
      <Button>Submit</Button>

    </section>
  );
}



