import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import RmkHostel from "./styles/rmkhostel.jpg";

class Hostel extends Component {
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
                  <span>Hostel</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h2>
              </div>
              <br />

              <p>
                &nbsp;&nbsp; Separate hostels are provided for boys and girls.
                Boys Hostel has 100 rooms and can accommodate about 300 students
                and the Girls hostel has 20 rooms, which can accommodate about
                70 students. The hostel rooms are spacious, adequately
                ventilated, well maintained and furnished with necessary
                accessories. The hostel also has a separate gymnasium and beauty
                parlour for the girls and a gymnasium, and air-conditioned
                saloon for the boys. The hostel, in addition, has a general
                store for provisions required by the students.
              </p>
              <br />

              <h4>RULES AND REGULATIONS FOR HOSTEL RESIDENTS</h4>
              <br />

              <ul class="list-unstyled">
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; They have to pay the prescribed fee before joining the
                  hostel; otherwise they will not be &nbsp; &nbsp; &nbsp;
                  permitted to stay in the hostel. Payment in installments is
                  not permitted.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; No student should stay in the hostel when the College
                  is working without specific &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;permission from
                  the Warden.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; The mess timings are:Breakfast: 7.30am – 8.00am Lunch:
                  As mentioned in the college &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  time table Tea: 3.30pm – 4.00pm Dinner: 7.30pm – 8.00pm
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; The study hours in the hostel are 9.00 am and 12.00
                  noon (on holidays) and 8.30 pm to &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;10.30 pm daily. During the study hours the
                  students are expected to stay in their &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; rooms and should avoid group discussions.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Students can entertain the visitors only during
                  visiting hours. The normal visiting hours &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp;are between 4.00 pm and 6.00 pm on working days
                  and between 2.00 pm and 6.00 pm &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp;on Sundays and other holidays.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Permission to go out of the hostel will ordinarily be
                  given once in a month on a holiday. They can leave the hostel
                  after 6.30 am and should return before 6.00 pm.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; No student will be allowed to leave the hostel based on
                  a phone call. Phone calls from outsiders, other than parents
                  of the students, are strictly prohibited.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Parents are requested to give a list of authorized
                  visitors /local guardians who can be permitted to visit the
                  students in the hostel. Visitors other than those given in the
                  list should get an authorization from the parents or the
                  parents should intimate the Principal about the visit in
                  advance.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Students will ordinarily be permitted to go home only
                  if the College is closed continuously for 5 days or more.
                  Students going out of hostel either to the city for a day's
                  visit or to their native places for holidays should enter the
                  date and time of leaving the hostel and the proposed date and
                  time of return to the hostel.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Any student desirous of attending a function in their
                  house, a marriage or any other ceremony will be permitted to
                  go only if the request is made directly by the parents to the
                  Principal.
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true" />
                  &nbsp; Local guardians authorized by parents of the students
                  are expected to take care of the students' welfare and provide
                  moral support. They may visit the students periodically during
                  visiting hours.
                </li>
              </ul>

              <br />
            </div>
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                alt=""
                src={RmkHostel}
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

export default Hostel;
