import React, { useState } from "react";
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

export default function SearchForm(props) {
 
  return (
    // <section className="search-form">
    //  // Add a search form here
    // </section>
    <Grid>
      <Grid.Column>
        <Search size={4} style={{marginLeft: '40%', marginTop: '1%'}} />
      </Grid.Column>
    </Grid>
  );
}
