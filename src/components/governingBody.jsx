import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "jquery/dist/jquery.min.js";
import Background from "./styles/background.jpg";

class GoverningBody extends Component {
  state = {
    governCouncilMembers: [
      {
        id: 1,
        name: "Thiru.Munirathinam R S",
        position: "Chairman",
        qualification: "",
        occupation: "Chairman, RMK College of Engineering and Technology."
      },
      {
        id: 2,
        name: "Thiru.Jothi Naidu R",
        position: "Member(Management Nominee)",
        qualification: "",
        occupation: "Director, RMK College of Engineering and Technology"
      },
      {
        id: 3,
        name: "Thiru.Kishore  R M",
        position: "Vice Chairman",
        qualification: "B.E., M.B.A. (U.K)",
        occupation: "Vice-Chairman,RMK Group of Institutions."
      },
      {
        id: 4,
        name: "Thiru.Yelamanchi Pradeep",
        position: "Secretary",
        qualification: "B.E., M.S",
        occupation: "Secretary,RMK College of Engineering and Technology"
      },
      {
        id: 5,
        name: "Dr. Durgadevi Pradeep R M",
        position: "Vice Chairperson",
        qualification: "B.E., M.B.A., Ph D",
        occupation: "Vice-Chairperson,Lakshmikanthammal Educational Trust"
      },
      {
        id: 6,
        name: "Tmt. Sowmya Kishore",
        position: "Management Trustee",
        qualification: "B.E",
        occupation: "Management Trustee, Lakshmikanthammal Educational Trust"
      },
      {
        id: 7,
        name: "Mr.Yalamanchi Saiji Rao Y",
        position: "Managing Director",
        qualification: "B.E.",
        occupation: "Managing  Director"
      },
      {
        id: 8,
        name: "Thiru. Sampath  M S",
        position: "Member(Industrialist)",
        qualification: "M.Sc",
        occupation:
          " Managing Director, Vishnupriya Paper Mills Pvt. Ltd., Chennai & Director,Sri Venkatachalapathi Paper & Boards Pvt. Ltd"
      },
      {
        id: 9,
        name: "Thiru. Kumar R",
        position: "Member(Engineering Consultant)",
        qualification: "M.E",
        occupation: "Heramba Engineering Consultants Pvt. Ltd. Chennai"
      },
      {
        id: 10,
        name: "Dr. Palanichamy  MS",
        position: "Advisor",
        qualification: "Ph.D",
        occupation: "	Advisor"
      },
      {
        id: 11,
        name: "Mr.Pitchandi T",
        position: "Member",
        qualification: "I.A.S",
        occupation: "Advisor"
      },
      {
        id: 12,
        name: "Ms.Madhumathi S",
        position: "Member",
        qualification: "I.A.S",
        occupation: "The Directorate of Technical Education"
      },
      {
        id: 13,
        name: "Mr.Balamurugan R",
        position: "Member",
        qualification: "M.E",
        occupation: "Regional Officer’ SRO OF AICTE"
      },
      {
        id: 14,
        name: "Nominee of Anna University",
        position: "Member Anna University Nominee",
        qualification: "",
        occupation: "Registrar Anna university"
      },
      {
        id: 15,
        name: "Dr.Chandrasekaran K",
        position: "Member",
        qualification: "Ph.D",
        occupation: "Dean, R.M.K Engineering College"
      },
      {
        id: 16,
        name: "Dr.Anbu Chezhian N",
        position: "Members",
        qualification: "Ph.D",
        occupation: "Principal,R.M.D Engineering College"
      },
      {
        id: 17,
        name: "Dr.Thyagarajan KK",
        position: "Member",
        qualification: "Ph.D",
        occupation: "DEAN,R.M.D Engineering College"
      },
      {
        id: 18,
        name: "Dr.Mohamed Junaid KA",
        position: "Member",
        qualification: "Ph.D",
        occupation: "Principal, R.M.K Engineering College"
      },
      {
        id: 19,
        name: "Dr.Sivaram K",
        position: "Member",
        qualification: "Ph.D",
        occupation: "Dean Research R.M.D Engineering College"
      },
      {
        id: 20,
        name: "Dr.Bhagavathi Perumal  S",
        position: "Member",
        qualification: "Ph.D",
        occupation: "Vice Principal,R.M.K College of Engineering And Technology"
      },
      {
        id: 21,
        name: "Mr.Periyasamy S",
        position: "Member",
        qualification: "M.Sc",
        occupation: "RETD Executive Director, Madras Fertilizers"
      },
      {
        id: 22,
        name: "Dr.Elwin Chandra Mounie E",
        position: "Member",
        qualification: "Ph.D",
        occupation: "Educationalist Dean"
      },
      {
        id: 23,
        name: "Dr. Rengaraja T",
        position: "Member Secretary",
        qualification: "Ph.D",
        occupation: "Principal,R.M.K College of Engineering  and Technology"
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
          {" "}
          <section class="page-header" style={{ color: "white" }}>
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <h1>GOVERNING BODY </h1>
                </div>
              </div>
            </div>
          </section>
          <hr className="line" style={{ borderColor: "white" }} />
          <br />
          <div className="panel panel-primary " style={{ width: "63%" }}>
            <div className="panel-heading">
              <center>GOVERNING BOARD</center>
            </div>
            <div className="panel-body">
              <p>
                &nbsp; The R.M.K. College of Engineering and Technology is
                governed by the
              </p>
              <h4> &nbsp;&nbsp;&nbsp; Lakshmikanthammal Educational Trust</h4>
              <p>
                &nbsp;Plot No.2981, ‘Z’ Block, 1st Street,
                <br />
                &nbsp; 13th Main Road, Anna Nagar,
                <br />
                &nbsp;Chennai-600 040.
                <br />
                &nbsp;Phone:044-26211504, 26266046
                <br />
                &nbsp;Fax No.044-26221641
              </p>
            </div>
          </div>
          <div className="panel panel-primary " style={{ width: "63%" }}>
            <div className="panel-heading">
              <center>COUNCIL MEMBERS</center>
            </div>
          </div>
          <table
            className="table table-responsive-sm table-bordered"
            style={{ width: "63%" }}
          >
            <thead>
              <tr>
                <th scope="col">SL.No</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Qualification</th>
                <th scope="col">
                  Present Professional Position /<br /> Occupation
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.governCouncilMembers.map(council => (
                <tr key={council.id}>
                  <th scope="row">{council.id}</th>
                  <td>{council.name}</td>
                  <td>{council.position}</td>
                  <td>{council.qualification}</td>
                  <td>{council.occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <FooterPage />
        </section>
      </React.Fragment>
    );
  }
}

export default GoverningBody;
