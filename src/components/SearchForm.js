import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm(props) {

  const [char, setChar] = useState([]);

  useEffect(() => {
    const getChars = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setChar(response.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getChars();
  }, []);

  return (
    <div className="search-form">
      <Formik>
        <Form>
          <Field type="text" name="search" placeholder="Search by Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {char.filter(
          <CharacterCard />
      )}
    </div>
  );
}