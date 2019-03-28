import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
class Rules extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <section className="about-ds">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-6 about-ds-content">
                <div className="section-header03">
                  <h2>
                    Rules and <span>Regulation</span>
                    <strong>
                      {" "}
                      <hr className="line" style={{ borderColor: "gray" }} />
                    </strong>
                  </h2>
                </div>
                <h3>General</h3>
                <p>
                  Parents and visitors are permitted to meet their
                  childrens/wards only after the college working hours and after
                  taking permission from the principal. Students are expected to
                  use courteous and polite language with members of the staff
                  and maintain decorum in the campous and outside. They are
                  expected to conduct themselves in such a way, so as to bring a
                  good name for the college whereever they are.
                </p>
                <br />
                <p>
                  The Indian Overseas Bank, Kavaraipettai(Code no :622) has been
                  providing banking facilities at the college for the benefit of
                  the staff and students. All students are advised to open a
                  savings account in the bank. The parents are advised to carry
                  out all financial transactions to their wards directly through
                  the savings accounts /DDs only.
                </p>
                <br />
                <h4>
                  Ragging in any form is totally banned and any one found
                  indulging in ragging is severely punished including dismissal
                  from the college.
                </h4>
                <br />
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; College will normally work for 8 hours from 8.30 a.m.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Students are required to be regular and punctual to
                    the classes.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Students should be seated in the lecture halls 5
                    minutes before the commencement of the class.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Students should maintain perfect order and strict
                    silence inside the lecture/drawing halls / labs / workshops
                    at all times.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Movement outside the classroom in between lectures
                    should be minimum and for valid reasons only.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; They should bring calculators everyday and drawing
                    instruments and charts whenever needed. They should avoid
                    borrowing them in the college from other students or try to
                    procure them after coming to college. Observation notebooks
                    should be brought to the laboratory classes.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Record of experiments done in a particular class
                    should be submitted in the next laboratory class.
                  </li>
                </ul>
                <br />
                <h3>Academic Standards</h3>

                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Students should attend all tests and show good
                    academic progress.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Absenting from regular classes will be strictly
                    viewed and absentism in the test will be viewed with atmost
                    sternness.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Regularity in writing the test and satisfactory
                    performance of students in test are essential to permit the
                    students to appear for the University examinations at the
                    end of the year.{" "}
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Any student found indulging in malpractice in the
                    Test/Model exams/University exams will be debarred from
                    appearing for the rest of the examinations.{" "}
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; All students should wear clean and appropriate dress.
                    Gentleman should wear trousers with shirts neatly tucked in.
                    Tee shirts, Jeans and other casuals are strictly prohibited
                    in the campus during normal working hours. They are expected
                    to wear shoes. Ladies should wear sarees or churidars. Half
                    sarees, midis are prohibited in the campus.{" "}
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; All students should wear the appropriate uniforms
                    that are stipulated while attending the practical and
                    workshop classes
                  </li>
                </ul>
                <br />
                <h3>Attendance Requirements</h3>

                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp;A minimum of 80% attendance is expected, in each
                    semester, necessarily to enable a student perform better in
                    the University examination.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Students are not allowed to take leave of absence for
                    more than 6 days in a semester.
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp; Students who absent themselves without permission
                    will be deemed to have been absent for 2 days. Continuous
                    absence from class on medical grounds will be permitted only
                    on production of medical certificate and letter from parent.
                    Names of students who are absent continuously for more than
                    12 days on any account with or without permission will be
                    struck off the rolls. They should seek readmission by paying
                    a readmission fee.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Rules;
