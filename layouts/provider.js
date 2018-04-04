import React, { Component } from "react";
import Meta from "../components/meta";
//import Footer from "../components/footer";
import { Fragment } from "react";

import { initStore } from "../store/index";
import withRedux from "next-redux-wrapper";

class Provider extends Component {
  render() {
    return (
      <Fragment>
        <h1>this is the redux provider wrapper {this.props.foo}</h1>
        {this.props.children}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.foo);
  return {
    foo: state.foo,
    children: ownProps.children
  };
};

export default withRedux(initStore, null, mapStateToProps)(Provider);
