import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import atm from "./styles/rmkatm.jpg";

class Atm extends Component {
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
                  <span>ATM</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />

              <p>
                A clinic, with a few beds along with on call Doctor facility for
                24 Hours to take care of, the health requirements of the hostel
                students, is also made available.
              </p>
              <p>Separate sick rooms for both boys and girls are available.</p>

              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                alt=""
                src={atm}
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

export default Atm;
