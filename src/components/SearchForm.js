import React  from "react";
import { Search, Grid } from 'semantic-ui-react';

export default function SearchForm(props) {

  return (

    <Grid>
      <Grid.Column>
        <Search
        style={{marginLeft: '50%', marginTop: '1%'}}
        placeholder="Search..."
        size='large'
         />
      </Grid.Column>
    </Grid>
  );
}
