import React from "react";
import "./layout.scss";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return <div className="main-content">{children}</div>;
};

export default Layout;
