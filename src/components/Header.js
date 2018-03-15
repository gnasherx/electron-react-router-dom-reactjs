import React from "react";
import styled from "styled-components";
import { Header } from "semantic-ui-react";

const HeaderWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  background-color: #e8e8e8;
`;

export default ({ documentName }) => (
  <HeaderWrapper>
    <Header textAlign="center">{documentName}</Header>
  </HeaderWrapper>
);
