import React, { Component } from "react";

// import "./styles/common.css";

class MainpageBody extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-style02">
          <div className="container">
            <br />
            <div className="row">
              <div className="col-sm-3">
                <ul className="highlightLnk">
                  <li
                    className="btn btn-success"
                    style={{ display: "block", boxShadow: "5px 10px #caccce" }}
                  >
                    <a href="#" style={{ color: "white" }}>
                      Career Guidance Cell<span>&nbsp;</span>
                    </a>
                  </li>
                  <br />
                  <li
                    className="btn btn-danger"
                    style={{ display: "block", boxShadow: "5px 10px #caccce" }}
                  >
                    <a href="#" style={{ color: "white" }}>
                      Higher Education Cell<span>&nbsp;</span>
                    </a>
                  </li>
                  <br />
                  <li
                    className="btn btn-primary"
                    style={{ display: "block", boxShadow: "5px 10px #caccce" }}
                  >
                    <a href="#" style={{ color: "white" }}>
                      Sports<span>&nbsp;</span>
                    </a>
                  </li>
                  <br />
                  <li
                    className="btn btn-warning"
                    style={{ display: "block", boxShadow: "5px 10px #caccce" }}
                  >
                    <a href="#" style={{ color: "white" }}>
                      RMK App Store<span>&nbsp;</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about-text col-sm-6">
                <div className="section-header03">
                  <h2>
                    Welcome To <span>RMKCET</span>
                  </h2>
                  <p>
                    The RMK group of educational institutions began their
                    educational services in the early nineties and for the past
                    25 years it is their sustained hard work and dedication that
                    has carved on niche in the field of engineering education.
                    RMK College of Engineering and Technology was established in
                    2008.
                  </p>
                  <p>
                    The motto of the college is very lofty. Safety and security
                    is given top priority, then impeccable discipline. All are
                    provided with good food, when these are made available
                    engineering education becomes a child’s play. Teachers
                    carefully nurture the young ones in the field of engineering
                    and their mode of inspiring the students is available only
                    here...
                  </p>
                  <a href="/about" className="el-btn-regular">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-sm-3 higRig">
                <h3 className="newHea">News and Events</h3>
              </div>
            </div>
          </div>
        </section>
        <br/>

      </React.Fragment>
        );
      }
    }
    
    export default MainpageBody;
