import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import chairman from "./styles/chairman.jpg";
import chairperson from "./styles/chairperson.jpg";
import rmkdirector from "./styles/rmkdirector.jpg";
import vicechairman from "./styles/vcchair.jpg";
import rmksecretary from "./styles/rmksecretary.jpg";
import rmkviceperson from "./styles/rmkvicechairperson.jpg";
import Trustee from "./styles/rmktrustee.jpg";

class Management extends Component {
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
            <hr />
            <div class="container">
              <h3 style={{ fontFamily: "Roboto" }}>Management Team</h3>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="grid">
                <figure class="effect-oscar">
                  <img src={chairperson} alt="img09" />
                  <figcaption>
                    <h2>
                      Tmt. Manjula Munirathinam
                      <br />
                      <h4>Chairperson</h4>
                    </h2>
                    <p>
                      She was a keen social worker involved with various women
                      forums. She had served the students community.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="grid">
                <figure class="effect-oscar">
                  <img src={rmkdirector} alt="img09" />
                  <figcaption>
                    <h2>
                      Thiru.R. Jothi Naidu
                      <br />
                      <h4>Director</h4>
                    </h2>
                    <p>
                      An industrialist with vast experience in various business
                      lines. He has been involved in the management of the group
                      of institutions for the past 21 years.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="grid">
                <figure class="effect-oscar">
                  <img src={vicechairman} alt="img09" />
                  <figcaption>
                    <h2 style={{ marginTop: "0%" }}>
                      Mr. R.M. Kishore
                      <br />
                      <h4>Vice Chairman</h4>
                    </h2>

                    <p>
                      Shri. R.M.Kishore is a Mechanical Engineer from the
                      University of Madras and has acquired his Masters degree
                      in Business administration from University of
                      Huddersfield, UK. A young member of the team, who has been
                      managing the RMK group of Educational Institutions.
                    </p>
                    <a href="/viceChairman">View more</a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="grid">
                <figure class="effect-oscar">
                  <img src={rmksecretary} alt="img09" />
                  <figcaption>
                    <h2 style={{ marginTop: "-10%" }}>
                      Mr. Yalamanchi Pradeep
                      <h4>Secretary</h4>
                    </h2>

                    <p>
                      Mr. Pradeep Yalamanchi is an Electronics and
                      Communications Engineer from the College of Engineering
                      Guindy, Chennai (Anna University) and Obtained his Masters
                      Degree in Information Systems Management from Carnegie
                      Mellon University, USA.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="grid">
                <figure class="effect-oscar">
                  <img src={rmkviceperson} alt="img09" />
                  <figcaption>
                    <h2>
                      Dr. Durga Devi Pradeep
                      <br />
                      <h4>Vice &nbsp; &nbsp; Chairperson</h4>
                    </h2>

                    <p>
                      She holds a Bachelor’s Degree in Electronics and
                      Communications Engineering from Anna University.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div class="grid">
                <figure class="effect-oscar">
                  <img src={Trustee} alt="img09" />
                  <figcaption>
                    <h2>
                      Tmt. Sowmya Kishore
                      <br />
                      <h4>Trustee</h4>
                    </h2>

                    <p>
                      She holds a Bachelor’s Degree in Electronics and
                      Communications Engineering from Anna University.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Management;
