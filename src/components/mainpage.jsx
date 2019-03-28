import React, { Component } from "react";
import NavBar from "./navbar";

import "./mainpage.css";
import Slide from "./slideshow/slide";
import FooterPage from "./footer";
import Cards from "./cards/cards";
import MainpageBody from "./mainPageBody";
import MainpageBody1 from "./mainPageBody1";
class Mainpage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Slide />
        <MainpageBody />
        <Cards />
        <MainpageBody1 />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Mainpage;
