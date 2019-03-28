import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";

class VisionAndMission extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />

        <section className="about-ds" style={{ fontFamily: "Crete Round" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-6 about-ds-content">
                <div className="section-header03">
                  <h2>
                    Vision and <span>Mission</span>
                    <strong>
                      {" "}
                      <hr className="line" style={{ borderColor: "gray" }} />
                    </strong>
                  </h2>
                </div>
                <h3>Vision</h3>
                <p>
                  To be knowledge hub of providing quality technical education
                  and promoting research for building up of our nation and its
                  contribution for the betterment of humanity.
                </p>

                <h3>Mission</h3>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; To make the best use of state-of-the-art
                    infrastructure to ensure quality technical education.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; To develop industrial collaborations to promote
                    innovation and research capabilities.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp;To inculcate values and ethics to serve humanity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <br />

        <FooterPage />
      </React.Fragment>
    );
  }
}
export default VisionAndMission;
