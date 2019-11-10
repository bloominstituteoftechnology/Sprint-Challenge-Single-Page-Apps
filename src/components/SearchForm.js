import React  from "react";
import { Search, Grid } from 'semantic-ui-react';

export default function SearchForm(props) {
 
  return (
    // <section className="search-form">
    //  // Add a search form here
    // </section>
    <Grid>
      <Grid.Column>
        <Search size='large' style={{marginLeft: '40%', marginTop: '1%'}} />
      </Grid.Column>
    </Grid>
  );
}
