import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import canteen from "./styles/rmkcanteen.jpg";

class Canteen extends Component {
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
                  <span>Canteen</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />

              <p>A Sound body is essential for a sound mind.</p>
              <p>
                Healthy and nutritive food is served. The hostel kitchen has
                facilities for steam cooking with gas stoves. There are four
                dining halls covering an area of about 200 sq.m for
                accommodating large number of students at a time.
              </p>

              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                alt=""
                src={canteen}
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

export default Canteen;
