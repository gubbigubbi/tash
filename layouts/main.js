import React, { Component } from "react";
import Meta from "../components/meta";
//import Footer from "../components/footer";
import { Fragment } from "react";

export default ({ children }) => (
  <Fragment>
    <Meta />
    {children}
    {/* <Footer /> */}
  </Fragment>
);
