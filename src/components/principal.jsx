import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import principal from "./styles/rmkprincipal.jpg";

class Principal extends Component {
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
                  The <span>Principal</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />
              <h3>
                Dr. T. RENGARAJA<span> &nbsp;Principal</span>
              </h3>
              <h4>Education</h4>
              <p>
                Dr. T. Rengaraja obtained his BE degree in Civil Engineering and
                ME in Structural Engineering. His Ph. D was from Anna
                University, Chennai in Civil Engineering (Smart Structures).
              </p>
              <h4>Experience</h4>
              <p>
                He has over 25 years of rich experience in the teaching field.
                He has earlier served as Principal of KCG college of Technology,
                Chennai. He was instrumental in getting accreditation for under
                graduate studies from the National Board of Accreditation. He
                had also served as Dean of our Institution (RMKCET) in 2008-09.
                He is appreciated as the ”Architect of the Organization” by our
                Management for his role in planning and monitoring during the
                initial stages of our college. During his tenure as
                Vice-Principal of RMD Engineering College he was instrumental in
                getting accreditation and ISO certification.{" "}
              </p>
              <p>
                He was one of the Academic Council member of Madras University
                in planning and framing of engineering syllabus, consecutively
                for two terms during his stint as Assistant professor at RMK
                Engineering College.
              </p>
              <h4>Other Interests</h4>
              <p>
                He is well known for his oratorical skills. He presents
                discourses and speeches in our epic ‘The Ramayana’. He has taken
                part in various talk shows over the Television channels on
                academics and spirituality.
              </p>

              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                alt=""
                src={principal}
                className="img-responsive imgborder"
                style={{ margin: "120psx 0 0 0" }}
              />
            </div>
          </div>
        </div>

        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Principal;
