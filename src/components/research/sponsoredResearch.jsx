import React, { Component } from "react";
class Sponsored extends Component {
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
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-md-9 col-sm-9">
          <div className="forum-wrapper section-header03">
            <h2>
              Sponsored <span>Research</span>{" "}
              <hr className="line" style={{ borderColor: "gray" }} />
            </h2>
          </div>
        </div>
        <br />
        <br />
        <div className="col-8">
          <div
            className="container"
            style={{ marginLeft: "-23%", marginTop: "25%" }}
          >
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                    >
                      &nbsp; &nbsp; Projects
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <br />

                    <table
                      className="table table-responsive-sm table-bordered"
                      style={{ width: "100%", marginLeft: "0%" }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">SL.No</th>
                          <th scope="col">Project Title</th>
                          <th scope="col">Dept</th>
                          <th scope="col">Agency</th>
                          <th scope="col">
                            Date of Approval and Reference Number
                          </th>
                          <th scope="col">Period</th>
                          <th scope="col">Year</th>
                          <th scope="col">Amount (in lakhs)</th>
                          <th scope="col">Principal Investigator</th>
                          <th scope="col">Co-Investigator</th>
                          <th scope="col">Status</th>
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
                    Anti-Ragging squad committee members make surprise visits to
                    prevent and curb the menace of ragging. The following table
                    depicts the list of committee members who are empowered to
                    take disciplinary action if any incident arises.
                  </p>
                  <h4>&nbsp;&nbsp;Responsibility and Functions</h4>
                  <ul>
                    <li>
                      Make surprise visits in the campus to prevent any acts of
                      ragging.
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
                    conducts various programmes to educate, sensitize both male
                    and female members and produce harmonious atmosphere in the
                    campus. It works for the welfare of the students and faculty
                    and prepares them to become competent professionals and also
                    to take up greater challenges in the academic sphere.
                  </p>
                  <h4>&nbsp;&nbsp;Responsibility and Functions</h4>
                  <ul>
                    <li>
                      <p>
                        To create awareness of the Women’s Rights and to empower
                        Women.{" "}
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
                        To promote a culture of respect and equality for female
                        gender.
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
                        opportunities and tools available and train the women to
                        reach heights in their career.
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
                    in the campus. It is headed by Dr. N. Kalaiarasi, Professor
                    and Head of the Department of EEE, with Dr. T.M. Inbamalar,
                    Professor of ECE, Dr. Geetha Balachandar, Associate
                    Professor of S&amp;H, Mr. R. Krishnaswamy, Senior Lawyer as
                    members and student members. The forum is not only looking
                    into the highly sensitive issues of any form of harassment,
                    but also emphasizes on the women empowerment. We are
                    fortunate not to have any issues regarding the sexual
                    harassment in the campus so far.
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

            <br />
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sponsored;
