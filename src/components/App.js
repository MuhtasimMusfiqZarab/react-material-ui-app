import React, { Component, Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
