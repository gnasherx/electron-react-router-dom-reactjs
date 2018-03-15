import styled from "styled-components";
import React, { Component } from "react";

const EditDocumentWrapper = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-color: #f8f8f8;
`;

class EditDocument extends Component {
  render() {
    return (
      <EditDocumentWrapper>
        <p>EditDocument</p>
      </EditDocumentWrapper>
    );
  }
}

export default EditDocument;
