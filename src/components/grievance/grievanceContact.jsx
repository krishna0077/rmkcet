import React, { Component } from "react";
class GrievanceContact extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <br />
        Email ID:{" "}
        <a href="mailto:grievanceredressal@rmkcet.ac.in">
          grievanceredressal@rmkcet.ac.in
        </a>
        <div class="col-md-9 col-sm-8">
          <div class="col-md-5">
            <p>
              {" "}
              <br />
              <strong>Dr. T. RENGARAJA M.E, Ph.D,</strong>
              <br />
              GRIEVANCE CELL CHAIRMAN,
              <br />
              PRINCIPAL,
              <br />
              RMK College of Engineering & Technology,
              <br />
              Pudhuvoyal, Chennai.
              <br />
              Phone: 044 – 33303555
              <br />
              Email ID:{" "}
              <a href="mailto:principal@rmkcet.ac.in">principal@rmkcet.ac.in</a>
              <br />
              Website:{" "}
              <a href="http://www.rmkcet.ac.in/">http://www.rmkcet.ac.in</a>
            </p>
          </div>

          <div class="col-md-5">
            <p>
              <br />
              <strong>Dr. Bhagavathi Perumal S</strong>
              <br />
              GRIEVANCE CELL CONVENER,
              <br />
              VICE PRINCIPAL,
              <br />
              RMK College of Engineering & Technology,
              <br />
              Pudhuvoyal, Chennai.
              <br />
              Phone: 044 – 33303555
              <br />
              Email ID: <a href="mailto:vp@rmkcet.ac.in">vp@rmkcet.ac.in</a>
              <br />
              Website:{" "}
              <a href="http://www.rmkcet.ac.in/">http://www.rmkcet.ac.in</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GrievanceContact;
