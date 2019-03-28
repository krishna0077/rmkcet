import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import viceprincipal from "./styles/viceprincipal.jpg";
class VicePrincipal extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <div>
          <section className="about-ds" style={{ fontFamily: "Crete Round" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-sm-6 about-ds-content">
                  <div class="section-header03">
                    <h2>
                      Vice <span>Principal</span>
                      <strong>
                        {" "}
                        <hr className="line" style={{ borderColor: "gray" }} />
                      </strong>
                    </h2>
                  </div>
                  <h3>Dr.S.BHAGAVATHI PERUMAL</h3>
                  <p>Vice Principal</p>
                  <h3>Education</h3>
                  <p>
                    Dr.S.BHAGAVATHI PERUMAL obtained his B.E Degree in Civil
                    Engineering with a University Gold Medal and obtained his
                    M.E Degree in Structural Engineering with a University Gold
                    Medal and Ph.D Degree in Civil Engineering from Anna
                    University, Chennai, Tamilnadu.
                  </p>
                  <h3>Experience</h3>
                  <p>
                    He has over 26 years of rich experience in academic arena.
                    He has earlier served as Principal of The Indian Engineering
                    College from 2009 to 2012.
                  </p>
                  <h3>Research</h3>
                  <p>
                    His research interests include Structural Engineering,
                    Concrete Technology, Ground Water Modeling, Sea Water
                    Intrusion, Water Quality Assessment. He has published 36
                    Research articles in International Journals. He has
                    authored, co-authored over 10 scientific articles, Book
                    chapters, Papers in International and National journals and
                    Technical reports. He is supervising research scholars in
                    Anna University, Chennai, Dr M.G.R Research Institute,
                    Chennai, Bharath University, Chennai. He did many PWD
                    consulting projects and Wind mill foundation consulting
                    works.
                  </p>
                  <h3>Professional Activities</h3>
                  <p>
                    He is a distinguished member of Institution of Engineers ,
                    Indian Society of Technical Education, American Society of
                    Civil Engineers, Indian Concrete Institute, International
                    Association of Engineers, Indian Science Congress
                    Association, Environment Net work - Collingwood, Canada,
                    Network of Indian Environment Professionals - Virginia, USA,
                    American Concrete Institute – Indian chapter, World Academy
                    of Science Engineering and Technology, World Council of
                    Civil Engineers - Spain, International Association of
                    Hydrological Sciences, National Association of Environmental
                    Professionals.
                  </p>
                  <h3>Skills</h3>
                  <p>
                    He is a visionary leader and a good administrator. He can
                    make a real difference in student’s lives to fit than in a
                    totally innovative educational setting. His objective is to
                    pursue a challenging career and be a part of a progressive
                    organization that gives scope to enhance his Knowledge,
                    Research, Skill and Hard work.
                  </p>
                </div>

                <div className="col" id="image">
                  <img
                    src={viceprincipal}
                    alt=""
                    className="img-responsive imgborder"
                    style={{ height: "50%" }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default VicePrincipal;
