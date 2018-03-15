import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainRoutesWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #222222;
`;

const MainRoutesList = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style: none;
`;

const MainRoutesListItem = styled.li`
  height: 26px;
  width: 100%;
  background-color: #676066;
  color: #fff;
  margin: auto;
  display: flex;
  align-items: center;
  jutify-content: center;
  font-size: 16px;
  // &:hover {
  //   background-color: #767676;
  // }
`;

const mainRoutes = () => (
  <MainRoutesWrapper>
    <MainRoutesList>
      <MainRoutesListItem>
        <Link to="/">New</Link>
      </MainRoutesListItem>
      <MainRoutesListItem>
        <Link to="/use">Use</Link>
      </MainRoutesListItem>
      <MainRoutesListItem>
        <Link to="/edit">Edit</Link>
      </MainRoutesListItem>
    </MainRoutesList>
  </MainRoutesWrapper>
);

export default mainRoutes;
