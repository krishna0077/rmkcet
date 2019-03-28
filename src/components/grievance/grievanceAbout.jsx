import React, { Component } from "react";
class GrievanceAbout extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ fontFamily: "Crete Round" }}>
        <div className="row">
          <div className="col-md-9 col-sm-6 about-ds-content">
            <div className="section-header03">
              <h2>
                About the <span>Grievance Redressal Cell</span>
                <strong>
                  {" "}
                  <hr className="line" />
                </strong>
              </h2>
            </div>

            <p align="justify">
              In order to comply with the AICTE Regulations for addressing
              students’ grievances, a <b>"Grievance Redressal Cell"</b> has been
              constituted in RMK College of Engineering and Technology with the
              following objectives
            </p>

            <p align="justify">
              <b>Objectives:</b>
              To provide a support system for the students to express their
              grievances regarding academic and non-academic activities. To
              initiate proactive measures to redress the grievances of the
              students. To examine and scrutinize the complaints and
              representations of aggrieved students and to take up these matters
              with the appropriate authorities for redressal.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GrievanceAbout;
