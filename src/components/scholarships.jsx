import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";

import Background from "./styles/background.jpg";

class Scholarship extends Component {
  state = {
    governCouncilMembers: [
      {
        id: "First",
        name: "	Rs.1,00,000.00"
      },
      {
        id: "Second",
        name: "Rs.75,000.00"
      },
      {
        id: "Third",
        name: "Rs.50,000.00"
      },
      {
        id: "Fourth",
        name: "Rs.25,000.00"
      },
      {
        id: "Fifth to Tenth",
        name: "Rs.15,000.00"
      },
      {
        id: "Eleventh to Fiftieth",
        name: "Rs.10,000.00"
      }
    ],
    admissionMembers: [
      {
        id: "First",

        name: "Rs.20,000"
      },
      {
        id: "Second",

        name: "Rs.15,000"
      },
      {
        id: "Third",

        name: "Rs.10,000"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <section
          className="blog-wrapper blog all-teachers-wrapper teachers faq-wrapper"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <section class="page-header" style={{ color: "white" }}>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <h1>Scholarships </h1>
                </div>
              </div>
            </div>
          </section>
          <hr className="line" style={{ borderColor: "white" }} />

          <br />
          <div className="panel panel-primary " style={{ width: "70%" }}>
            <div className="panel-heading">
              <center>Scholarships</center>
              <br />
            </div>
            <br />
            <h2 style={{ color: "#286090", marginLeft: "2%" }}>
              <h2>
                <span>AWARDS & GOLD MEDALS</span>
              </h2>
            </h2>
            <hr className="line" style={{ borderColor: "gray" }} />
            <ul>
              <li>
                Gold Medals and Cash Prizes are awarded for the best outgoing
                students and the student with best academic performance in every
                academic year:
              </li>
              <li>
                RSM Gold Medal & Pemalah Memorial Cash Prize for the Best
                Outgoing Student among B.E.courses (Instituted by Shri R.S.
                Munirathinam, Founder- Chairman of the College).
              </li>

              <li>
                {" "}
                RSM Gold Medal &Murrittige Srinivasa Murthy Ramachandra Rao Cash
                Prize for the Best Academic Performance of the outgoing B.E.
                student (based on 1st to 7th Semester)(Instituted by Shri R.S.
                Munirathinam, Founder - Chairman of the College).
              </li>
              <li>
                >R.S.M. Gold Medal for the Best Academic Performance of the
                outgoing B.E. student(based on 3rd to 7th Semester) (Instituted
                by Shri R.S. Munirathinam, Founder- Chairman of the College).
              </li>
              <li>
                R.S.M. Gold Medal for the Best Outgoing Hostel Student among
                Boys (Instituted by Shri R.S. Munirathinam, Founder- Chairman of
                the College).
              </li>
              <li>
                R.S.M. Gold Medal for the Best Outgoing Hostel Student among
                Girls (Instituted by Shri R.S. Munirathinam, Founder- Chairman
                of the College).
              </li>
            </ul>
            <h2 style={{ color: "#286090", marginLeft: "2%" }}>
              <h2>
                <span>SCHOLARSHIPS</span>
              </h2>
              <hr className="line" style={{ borderColor: "gray" }} />
            </h2>
            <ul>
              <li>
                To help the deserving and the needy students scholarships are
                instituted by the management. In the name of Shri R S
                Munirathinam, Founder-Chairman RMK Group of Institutions, 32
                students are given Rs. 5,000 each by way of scholarship.
              </li>
            </ul>
            <br />
            <h4>&nbsp;&nbsp;PRLZE AMOUNT FOR UNIVERSITY RANK HOLDERS</h4>
            <br />
            <table
              className="table table-responsive-sm table-bordered"
              style={{ width: "70%", backgroundColor: "aquamarine" }}
            >
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.governCouncilMembers.map(council => (
                  <tr key={council.id}>
                    <th scope="row">{council.id}</th>
                    <td>{council.name}</td>
                  </tr>
                ))}
                <br />
              </tbody>
            </table>
            <br />
            <h4>&nbsp;&nbsp;PRLZE AMOUNT FOR UNIVERSITY RANK HOLDERS</h4>
            <br />
            <table
              className="table table-responsive-sm table-bordered"
              style={{ width: "70%", backgroundColor: "aquamarine" }}
            >
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.admissionMembers.map(council => (
                  <tr key={council.id}>
                    <th scope="row">{council.id}</th>
                    <td>{council.name}</td>
                  </tr>
                ))}
                <br />
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
          </div>

          <br />
          <br />
          <FooterPage />
        </section>
      </React.Fragment>
    );
  }
}

export default Scholarship;
