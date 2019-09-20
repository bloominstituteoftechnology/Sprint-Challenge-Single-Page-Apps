import React, { useState } from "react";
import {icon} from 'semantic-ui'

const SearchForm =(props) => {
 
  return (
    <section className="search-form">
   <div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="Find a character..."/>
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
</div>
    </section>
  );
}
export default SearchForm

