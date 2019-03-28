import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import Background from "./styles/background.jpg";
import "./styles/common.css";

class Committe extends Component {
  state = {
    governCouncilMembers: [
      {
        id: 1,
        name: "Dr. Rengaraja T",
        position: "Chairman",
        Category: "Principal"
      },
      {
        id: 2,
        name: "Dr. Bhagavathi Perumal S",
        position: "Member",
        Category: "Vice Principal"
      },
      {
        id: 3,
        name: "Dr. Selvakumaran K A",
        position: "Member",
        Category: "HoD-S&H"
      },
      {
        id: 4,
        name: "Dr. Paulraj D",
        position: "Member",
        Category: "HoD-CSE"
      },
      {
        id: 5,
        name: "Dr. Gangatharan N",
        position: "Member",
        Category: "HoD-ECE"
      },
      {
        id: 6,
        name: "Dr. Inbamalar T M",
        position: "Member",
        Category: "Professor of ECE"
      },
      {
        id: 7,
        name: "Dr.  Kalaiarasi N",
        position: "Member",
        Category: "HoD-EEE"
      },
      {
        id: 8,
        name: "Dr. Loganathan T G",
        position: "Member",
        Category: "Asso. Prof. of Mechanical"
      },
      {
        id: 9,
        name: "Mr. Leo Amalraj J",
        position: "Others",
        Category: "Member"
      },
      {
        id: 10,
        name: "Mr. Lakshmipathi D",
        position: "Others",
        Category: "Member"
      }
    ],
    womenEmporement: [
      {
        id: 1,
        name: "Dr. GEETHA  BALACHANDAR",
        position: "S&H",
        Category: "CHAIRPERSON"
      },
      {
        id: 2,
        name: "Ms.AKILA K",
        position: "CSE",
        Category: "MEMBER"
      },
      {
        id: 3,
        name: "Ms.INDRA PRIYSDARSHINI",
        position: "CSE",
        Category: "MEMBER"
      },
      {
        id: 4,
        name: "Dr. INBAMALAR T M",
        position: "ECE",
        Category: "MEMBER"
      },
      {
        id: 5,
        name: "Dr. SHANTHI K G",
        position: "ECE",
        Category: "MEMBER"
      },
      {
        id: 6,
        name: "Dr. KALAIRASI N",
        position: "EEE",
        Category: "MEMBER"
      },
      {
        id: 7,
        name: "Ms. CATHERINE T J",
        position: "EEE",
        Category: "MEMBER"
      },
      {
        id: 8,
        name: "Dr. CHITHRA S M",
        position: "S&H",
        Category: "MEMBER"
      },
      {
        id: 9,
        name: "Ms. HEMA P",
        position: "S&H",
        Category: "MEMBER"
      },
      {
        id: 10,
        name: "Ms. PRIYANKA G S",
        position: "CSE- STUDENT",
        Category: "MEMBER"
      },
      {
        id: 11,
        name: "Ms. LOKITHA",
        position: "ECE- STUDENT",
        Category: "MEMBER"
      },
      {
        id: 12,
        name: "Ms SANDHYA E",
        position: "EEE - STUDENT",
        Category: "MEMBER"
      },
      {
        id: 13,
        name: "Ms. PREETHI T",
        position: "MECH - STUDENT",
        Category: "MEMBER"
      }
    ],
    Harrassment: [
      {
        id: 1,
        name: "Dr. GEETHA  BALACHANDAR",
        position: "SECRETARY"
      },
      {
        id: 2,
        name: "Dr. KALAIARASI  N",
        position: "MEMBER"
      },
      {
        id: 3,
        name: "Dr. PRAVEENA.N.G",
        position: "MEMBER"
      },
      {
        id: 4,
        name: "Dr. PADMAVATHI A",
        position: "MEMBER"
      },
      {
        id: 5,
        name: "Dr. CHITHRA.S.M",
        position: "MEMBERECE"
      },
      {
        id: 6,
        name: "Dr. JESINTHA MARY T",
        position: "MEMBER"
      }
    ],
    scstMembers: [
      {
        id: 1,
        name: "Dr. Rengaraja T",
        position: "Principal/Convenor"
      },
      {
        id: 2,
        name: "Ms. Indrapriyadarshini S",
        position: "Asst. Prof-CSE"
      },
      {
        id: 3,
        name: "Ms, Prem Priya P",
        position: "Asst. Prof-CSE"
      },
      {
        id: 4,
        name: "Ms. Kannagi V",
        position: "Asso. Prof-ECE"
      },
      {
        id: 5,
        name: "Mr. Muthumanickam S",
        position: "Asso. Prof-ECE"
      },
      {
        id: 6,
        name: "Mr. Krishnakumar M",
        position: "Asst. Prof-MECH"
      }
    ],
    HarrassmentMember: [
      {
        id: 1,
        name: "Dr. GEETHA  BALACHANDAR",
        position: "SECRETARY"
      },
      {
        id: 2,
        name: "Dr. KALAIARASI  N",
        position: "MEMBER"
      },
      {
        id: 3,
        name: "Dr. PRAVEENA.N.G",
        position: "MEMBER"
      },
      {
        id: 4,
        name: "Dr. PADMAVATHI A",
        position: "MEMBER"
      },
      {
        id: 5,
        name: "Dr. CHITHRA.S.M",
        position: "MEMBERECE"
      },
      {
        id: 6,
        name: "Dr. JESINTHA MARY T",
        position: "MEMBER"
      }
    ],
    welfareCommittee: [
      {
        id: 1,
        name: "Dr. Bhagavathiperumal S",
        position: "Chairman",
        Category: "Vice Principal"
      },
      {
        id: 2,
        name: "Dr. Inbamalar T M",
        position: "Convener",
        Category: "Professor/ECE"
      },
      {
        id: 3,
        name: "Dr. Paulraj D",
        position: "Member",
        Category: "	HoD/CSE"
      },
      {
        id: 4,
        name: "Dr. Gangatharan N",
        position: "Member",
        Category: "HoD /ECE"
      },
      {
        id: 5,
        name: "Dr. Balasubramanian M",
        position: "Member",
        Category: "HoD /ME"
      },
      {
        id: 6,
        name: "Dr. Shanthi K G",
        position: "Member",
        Category: "Lady  faculty member"
      },
      {
        id: 7,
        name: "Dr. Geetha Balachandar",
        position: "Member",
        Category: "Lady  faculty member"
      },
      {
        id: 8,
        name: "Mrs. Jayalakshmi T",
        position: "Member",
        Category: "Warden of Girls  Hostel"
      },
      {
        id: 9,
        name: "Mr.Lakshmipathi D",
        position: "Member",
        Category: "Warden of Boys  Hostel"
      }
    ],
    PlanningMembers: [
      {
        id: 1,
        name: "Dr. Rengaraja T",
        position: "Chairman"
      },
      {
        id: 2,
        name: "Dr. Bhagavathi Perumal S",
        position: "Member"
      },
      {
        id: 3,
        name: "Dr. Selvakumaran K A",
        position: "Member"
      },
      {
        id: 4,
        name: "Dr. Elvin Chandra Moni",
        position: "Member"
      },
      {
        id: 5,
        name: "Thiru Sampath M S",
        position: "Member"
      },
      {
        id: 6,
        name: "Shri Sridhar K B",
        position: "Member"
      },
      {
        id: 7,
        name: "Thiru Kumar R",
        position: "Member"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <section
          classNameName="blog-wrapper blog all-teachers-wrapper teachers faq-wrapper"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <NavBar />
          <div className="container">
            <div className="panel-group" id="accordion">
              <div className="faqHeader">
                Committee{" "}
                <hr className="line" style={{ borderColor: "white" }} />
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                    >
                      &nbsp; &nbsp; ANTI-RAGGING COMMITTEE
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  classNameName="panel-collapse collapse in"
                >
                  <div className="panel-body">
                    <br />
                    <p>
                      &nbsp; The committee is formed to ensure compliance with
                      the provisions of the Anti-Ragging Regulations as well as
                      the provisions of any laws for the time being in force
                      concerning Ragging. The committee shall also monitor and
                      oversee the performance of the Anti-Ragging squad in
                      prevention of ragging in the institution.
                      <br />
                    </p>
                    <p>
                      &nbsp; The Committee will meet frequently, once in two
                      months or as and when necessity arises and record the
                      proceedings in the minutes books. The circular to be
                      exhibited in all notice boards and acknowledgement for
                      service obtained from the Committee members.
                    </p>
                    <h4>&nbsp;&nbsp;Responsibility and Functions</h4>
                    <ul>
                      <li>
                        Appraise the students about the contents of the
                        anti-ragging act and advise them not to involve in the
                        incidents of ragging
                      </li>
                      <li>
                        Appraise the students about the contents of the
                        anti-ragging act and advise them not to involve in the
                        incidents of ragging
                      </li>
                      <li>
                        Make frequent visits around the campus to prevent any
                        acts of ragging
                      </li>
                      <li>
                        Visit class rooms and explain the students about the
                        severe punishments and the consequences likely to be
                        imposed as per the act
                      </li>
                      <li>
                        Accompany the students in the college buses at the end
                        of the day’s work{" "}
                      </li>
                      <li>Create awareness about ill effects of ragging</li>
                    </ul>
                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Position</th>
                          <th scope="col">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.governCouncilMembers.map(council => (
                          <tr key={council.id}>
                            <th scope="row">{council.id}</th>
                            <td>{council.name}</td>
                            <td>{council.position}</td>
                            <td>{council.Category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTen"
                    >
                      &nbsp; &nbsp;ANTI-RAGGING SQUAD
                    </a>
                  </h4>
                </div>
                <div id="collapseTen" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      <br />
                      Anti-Ragging squad committee members make surprise visits
                      to prevent and curb the menace of ragging. The following
                      table depicts the list of committee members who are
                      empowered to take disciplinary action if any incident
                      arises.
                    </p>
                    <h4>&nbsp;&nbsp;Responsibility and Functions</h4>
                    <ul>
                      <li>
                        Make surprise visits in the campus to prevent any acts
                        of ragging.
                      </li>
                      <li>Nil report is also recorded and maintained</li>
                    </ul>
                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Position</th>
                          <th scope="col">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.governCouncilMembers.map(council => (
                          <tr key={council.id}>
                            <th scope="row">{council.id}</th>
                            <td>{council.name}</td>
                            <td>{council.position}</td>
                            <td>{council.Category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseEleven"
                    >
                      &nbsp; &nbsp; WOMEN EMPOWERMENT CELL (WEC)
                    </a>
                  </h4>
                </div>
                <div id="collapseEleven" className="panel-collapse collapse">
                  <div className="panel-body">
                    <br />
                    <p>
                      {" "}
                      Women Empowerment Cell (WEC)<strong> </strong>has been
                      constituted to empower and safeguard the rights of female
                      members; faculty staff and students of the Institute. The
                      WEC works to promote gender sensitivity in the college and
                      conducts various programmes to educate, sensitize both
                      male and female members and produce harmonious atmosphere
                      in the campus. It works for the welfare of the students
                      and faculty and prepares them to become competent
                      professionals and also to take up greater challenges in
                      the academic sphere.
                    </p>
                    <h4>&nbsp;&nbsp;Responsibility and Functions</h4>
                    <ul>
                      <li>
                        <p>
                          To create awareness of the Women’s Rights and to
                          empower Women.{" "}
                        </p>
                      </li>
                      <li>
                        <p>
                          Identification of strong leader ship and change makers
                          and honing their capabilities.
                        </p>
                      </li>
                      <li>
                        <p>
                          To promote a culture of respect and equality for
                          female gender.
                        </p>
                      </li>
                      <li>
                        <p>
                          To make them fully aware of about the guidelines of
                          Supreme Court and to ensure that sexual harassment is
                          treated as an unacceptable social mis- behavior within
                          the institution and the society.
                        </p>
                      </li>
                      <li>
                        <p>
                          To conduct seminar, workshops to impart knowledge on
                          opportunities and tools available and train the women
                          to reach heights in their career.
                        </p>
                      </li>
                    </ul>
                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name of the Faculty</th>
                          <th scope="col">Department</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.womenEmporement.map(women => (
                          <tr key={women.id}>
                            <th scope="row">{women.id}</th>
                            <td>{women.name}</td>
                            <td>{women.position}</td>
                            <td>{women.Category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading panel-relative">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseFour"
                    >
                      &nbsp; &nbsp;INTERNAL COMPLAINTS COMMITEE
                    </a>
                  </h4>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                  <div className="panel-body">
                    <br />
                    <p>
                      &nbsp;&nbsp;The institution has constituted sexual
                      harassment committee to deal with the women related issues
                      in the campus. It is headed by Dr. N. Kalaiarasi,
                      Professor and Head of the Department of EEE, with Dr. T.M.
                      Inbamalar, Professor of ECE, Dr. Geetha Balachandar,
                      Associate Professor of S&amp;H, Mr. R. Krishnaswamy,
                      Senior Lawyer as members and student members. The forum is
                      not only looking into the highly sensitive issues of any
                      form of harassment, but also emphasizes on the women
                      empowerment. We are fortunate not to have any issues
                      regarding the sexual harassment in the campus so far.
                    </p>

                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.HarrassmentMember.map(wrokPlace => (
                          <tr key={wrokPlace.id}>
                            <th scope="row">{wrokPlace.id}</th>
                            <td>{wrokPlace.name}</td>
                            <td>{wrokPlace.position}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseFive"
                    >
                      &nbsp; &nbsp;SC/ST WELFARE COMMITTEE
                    </a>
                  </h4>
                </div>

                <div id="collapseFive" className="panel-collapse collapse">
                  <div className="panel-body">
                    <br />
                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Designation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.scstMembers.map(scSt => (
                          <tr key={scSt.id}>
                            <th scope="row">{scSt.id}</th>
                            <td>{scSt.name}</td>
                            <td>{scSt.position}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapsesix"
                    >
                      &nbsp;DISCIPLINE & WELFARE COMMITTEE
                    </a>
                  </h4>
                </div>
                <div id="collapsesix" className="panel-collapse collapse">
                  <div className="panel-body">
                    <br />
                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Position (Chairman/ Member)</th>
                          <th scope="col">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.welfareCommittee.map(welfare => (
                          <tr key={welfare.id}>
                            <th scope="row">{welfare.id}</th>
                            <td>{welfare.name}</td>
                            <td>{welfare.position}</td>
                            <td>{welfare.Category}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseSeven"
                    >
                      &nbsp; &nbsp;PLANNING AND MONITORING BOARD
                    </a>
                  </h4>
                </div>
                <div id="collapseSeven" className="panel-collapse collapse">
                  <div className="panel-body">
                    <br />
                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "63%", marginLeft: "7%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Name</th>
                          <th scope="col">Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.PlanningMembers.map(Planning => (
                          <tr key={Planning.id}>
                            <th scope="row">{Planning.id}</th>
                            <td>{Planning.name}</td>
                            <td>{Planning.position}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <br />
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>

        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Committe;
