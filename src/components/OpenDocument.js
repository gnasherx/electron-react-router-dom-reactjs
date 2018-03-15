import styled from "styled-components";
import React, { Component } from "react";

const OpenDocumentWrapper = styled.div`
  grid-column: 3;
  grid-row: 2;
`;

class OpenDocument extends Component {
  render() {
    return (
      <OpenDocumentWrapper>
        <p>OpenDocument</p>
      </OpenDocumentWrapper>
    );
  }
}

export default OpenDocument;
