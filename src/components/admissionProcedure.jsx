import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";

import Background from "./styles/background.jpg";

class Admission extends Component {
  state = {
    governCouncilMembers: [
      {
        id: "Mechanical Engineering",
        name: "120"
      },
      {
        id: "Electrical and Electronics Engineering",
        name: "60"
      },
      {
        id: "Electronics and Communication Engineering",
        name: "180"
      },
      {
        id: "Computer Science and Engineering",
        name: "120"
      }
    ],
    admissionMembers: [
      {
        id: "H.S.C (Academic) or Equivalent",

        SC: "40%",
        MBC: "40%",
        Bc: "45%",
        Oc: "50%"
      },
      {
        id: "H.S.C (Vocational) or Equivalent",

        SC: "40%",
        MBC: "40%",
        Bc: "45%",
        Oc: "50%"
      },
      {
        id: "Diploma Holders",

        SC: "40%",
        MBC: "40%",
        Bc: "45%",
        Oc: "50%"
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
                  <h1>Admission Procedure </h1>
                </div>
              </div>
            </div>
          </section>
          <hr className="line" style={{ borderColor: "white" }} />

          <br />
          <div className="panel panel-primary " style={{ width: "70%" }}>
            <div className="panel-heading">
              <center>COURSES OFFERED</center>
              <br />
            </div>
            <h2 style={{ color: "blue", marginLeft: "2%" }}>
              B.E.Degree Courses
            </h2>

            <table
              className="table table-responsive-sm table-bordered"
              style={{ width: "65%" }}
            >
              <thead>
                <tr>
                  <th scope="col">Courses</th>
                  <th scope="col">Annual Intake</th>
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
          </div>
          <div className="panel panel-primary " style={{ width: "70%" }}>
            <div className="panel-heading">
              <center>COURSES OFFERED</center>

              <br />
            </div>
            <div class="panel-body" style={{ textAlign: "justify" }}>
              <p>
                The candidate should have passed the twelfth standard of Tamil
                Nadu H.S.C. (Academic) or an equivalent examination recognised
                by Anna University with Mathematics, Physics and Chemistry. The
                Candidate should have passed the Diploma Examination in
                Engineering / Technology of the State Board of Technical
                Education and Training, Tamil Nadu or an equivalent examination
                for direct admission to second year (Lateral Entry).
              </p>
              <p>
                Number of appearances, minimum marks and other criteria for
                admissions to B.E / B.Tech courses are as per AICTE and State
                government norms.
              </p>
            </div>
            <table
              className="table table-responsive-sm table-bordered"
              style={{ width: "70%" }}
            >
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">SC/ST</th>
                  <th scope="col">MBC / DNC</th>
                  <th scope="col">BC</th>
                  <th scope="col">OC</th>
                </tr>
              </thead>
              <tbody>
                {this.state.admissionMembers.map(admission => (
                  <tr key={admission.id}>
                    <th scope="row">{admission.id}</th>
                    <td>{admission.SC}</td>
                    <td>{admission.MBC}</td>
                    <td>{admission.Bc}</td>
                    <td>{admission.Oc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
          </div>
          <br />
          <div className="panel panel-primary " style={{ width: "70%" }}>
            <div className="panel-heading">
              <center>COURSES OFFERED</center>
              <br />
            </div>
            <ul>
              <li>
                Candidates from other states will be considered as belonging to
                OC only, irrespective of their community for the purpose of
                considering minimum eligibility marks.
              </li>
              <li>
                Application for admission should be made in the prescribed form
                available along with prospectus. Filled in application forms
                along with a non-refundable registeration fee as stipulated
                should be sent to the office of the Principal, R.M.K.College of
                Engineering and Technology, R.S.M.Nagar, Kavaraipettai,
                Pin-601206, Gummidipoondi Taluk,Thiruvallur District.
              </li>

              <li>
                {" "}
                Tuition and other fees prescribed by the college should be paid
                in full before the stipulated date. Fee once paid will not be
                refunded on any account. If any student wishes to leave the
                course in the middle he/she shall pay the full tuition fee
                prescribed for the course. Students rusticated from the college
                shall forfeit all the fees paid.
              </li>
              <li>
                The decision of the Management will be final in all matters
                relating to admission, training &amp; discipline and will be
                binding on all the parties concerned.
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <FooterPage />
        </section>
      </React.Fragment>
    );
  }
}

export default Admission;
