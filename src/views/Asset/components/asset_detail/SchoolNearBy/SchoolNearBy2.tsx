import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { All, Elementary, Middle, High } from "./component/index";

const SchoolNearBy2 = () => {
  return (
    <Router>
      <section style={{ color: "black" }}>
        <Button>
          <Link to={{ pathname: "/", state: { data: "data" } }}>All</Link>
        </Button>
        <Button>
          <Link to="/elementary">Elementary</Link>
        </Button>
        <Button>
          <Link to="/middle">Middle</Link>
        </Button>
        <Button>
          <Link to="/high">High</Link>
        </Button>
      </section>
      <Switch>
        <Route exact path="/" component={All}></Route>
        <Route path="/elementary" component={Elementary}></Route>
        <Route path="/middle" component={Middle}></Route>
        <Route path="/high" component={High}></Route>
      </Switch>
    </Router>
  );
};

const Button = styled.button`
  height: 40px;
  padding: 0 20px;
  background-color: white;
  color: red;
  border-color: lightgray;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 3px;

  &:visited {
    color: blue;
    text-decoration: none;
  }
`;
export default SchoolNearBy2;
