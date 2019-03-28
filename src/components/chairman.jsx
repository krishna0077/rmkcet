import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import chairman from "./styles/chairman.jpg";

class Chairman extends Component {
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
                  Founder <span>Chairman</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />
              <p>
                Thiru.R.S.Munirathinam Founder-Chairman of R.M.K Engineering
                College is well known for his philanthropic attitude and service
                as an elected member of the State Assembly of Tamil Nadu. He
                envisioned a technological revolution and committed himself to
                establish an institution, to foster technical and higher
                education. He is a rare breed of educationalist, for whom
                quality is the way of life.
              </p>{" "}
              <br />
              <p>
                A compassionate and modest person to associate with, he is quite
                undeterred in his conviction in executing to perfection anything
                that is for common good.
              </p>{" "}
              <br />
              <p>
                The lush green environment, the expansive buildings, the
                well-equipped laboratories and the unparalleled discipline of
                the students standout as shining examples of his own unique
                style of management.
              </p>{" "}
              <br />
              <p>
                Thanks to the full time participation of the Management and the
                guidance provided by learned professors, the college has
                achieved great heights. The Management believes that the nation
                needs not just engineers and professionals, but virtuous men and
                women who can be engineers and professionals. Integrity of
                character and discipline are imparted to students to become good
                citizens capable of utilizing their talents for the development
                of our Nation.
              </p>
              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                src={chairman}
                alt=""
                className="img-responsive imgborder"
                style={{ margin: "120psx 0 0 0" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-6 about-ds-content">
              <h3>Awards & Accolades</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; He is currently the Chairman of Consortium of
                  Self-Financing Professional, Arts and Science Colleges in
                  TamilNadu.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; He was awarded "For the Sake of Honour" Award by Rotary
                  Club of Chennai Sun City on 28-01-2013.
                </li>
                <li>
                  {" "}
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; He was awarded Vidya Ratna.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Chairman;
