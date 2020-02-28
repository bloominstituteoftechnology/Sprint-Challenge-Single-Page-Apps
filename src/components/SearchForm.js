import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import CharacterList from "./CharacterList";
import styled from 'styled-components';

function SearchForm(status) {

  const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  `;

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm(status);
  }, [status]);

  let errorStyle = {
    color: "red"
  };

  return (
    <div>
      <StyledDiv>
        <Form>
          <Field type="text" name="search" placeholder="Search..." />
        </Form>
      </StyledDiv>
      <StyledDiv>
        <CharacterList searchArg={searchTerm} />
      </StyledDiv>
    </div>
  );
}

const FormikSearchForm = withFormik({
  mapPropsToValues({ search }) {
    return {
      search: search || "",
    };
  },

  handleSubmit(values, { setStatus }) {
    setStatus(values);
  }

})(SearchForm);

export default FormikSearchForm;