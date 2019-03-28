import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import vicechairman from "./styles/vicechairman.jpg";

class ViceChairman extends Component {
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
                  Vice <span>Chairman</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />
              <p>
                Shri. R.M.Kishore is a Mechanical Engineer from the University
                of Madras and has acquired his Masters degree in Business
                administration from University of Huddersfield, UK. A young
                member of the team, who has been managing the RMK group of
                Educational Institutions.
              </p>
              <br />
              <p>
                With the full time participation of the Management and the
                guidance provided by learned professors, the college has
                achieved great heights in the field of technical education.
              </p>
              <br />
              <p>
                The Management believes that the nation needs not just engineers
                and professionals, but virtuous men & women who can be engineers
                and professionals. Integrity of character, and discipline are
                imparted to students to produce good citizens capable of
                utilizing their talents for our Nation.
              </p>

              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                src={vicechairman}
                alt=""
                className="img-responsive imgborder"
                style={{ margin: "100psx 0 0 0", maxWidth: "74%" }}
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

export default ViceChairman;
