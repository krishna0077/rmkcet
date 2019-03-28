import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import gym from "./styles/rmkgym.jpg";

class Gym extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />

        <div className="container" style={{ fontFamily: "Crete Round" }}>
          <div className="row">
            <div className="col-md-7 col-sm-6 about-ds-content">
              <div className="section-header03">
                <h2>
                  <br />
                  <span>GYMNASIUM</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />

              <p>
                There are separate gyms for both girls and boys. Both the gyms
                are equipped with latest equipments.
              </p>

              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                alt=""
                src={gym}
                className="img-responsive imgborder"
                style={{ margin: "120psx 0 0 0" }}
              />
            </div>
          </div>
        </div>

        <br />
        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Gym;
