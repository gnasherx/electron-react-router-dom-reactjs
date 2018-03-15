import styled from "styled-components";
import React, { Component } from "react";

const UseDocumentWrapper = styled.div`
  grid-column: 3;
  grid-row: 2;
  background-color: #eaeaea;
`;

class UseDocument extends Component {
  render() {
    return (
      <UseDocumentWrapper>
        <p>UseDocument</p>
      </UseDocumentWrapper>
    );
  }
}

export default UseDocument;
