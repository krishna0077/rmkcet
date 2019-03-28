import React from "react";
import logo from "./logo.png";
import "./footer.css";

const FooterPage = () => {
  return (
    <footer id="myFooter">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div
              className=""
              style={{ border: "none", backgroundColor: "#072846" }}
            >
              <img className="" src={logo} alt="Cardimagecap" />
              <div className="">
                {/* <h5 className="cardtitle" /> */}
                <p className="" style={{ color: "white" }}>
                  &nbsp;&nbsp;&nbsp;I have provided the atmosphere. It is upto
                  you to rise to the ocassion.
                </p>
                <ul>
                  <li className="name">
                    <strong>- R.S Munirathanam</strong>
                  </li>
                  <li className="designation">Founder And Chairman</li>
                </ul>
                <br/>
                <br/>
                <br/>
              </div>
              <ul className="listgrouplistgroupflush">
                <li className="list-group-item" id="detailsGroup">
                  <i className="fa fa-envelope" />
                  &nbsp; principal@rmkcet.ac.in
                </li>
                <li className="list-group-item" id="detailsGroup">
                  <i className="fa fa-phone" />
                  &nbsp; +44 6790 0610
                </li>
                <li className="list-group-item" id="detailsGroup">
                  <i className="fa fa-map-marker" />
                  &nbsp; R.S.M. Nagar, Puduvoyal
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <h5>USEFUL LINKS</h5> <br />
            <ul>
              <li>
                <a href="http://mhrd.gov.in/">
                  <i className="fa fa-angle-double-right" />
                  MHRD
                </a>
              </li>
              <li>
                <a href="https://www.ugc.ac.in/">
                  <i className="fa fa-angle-double-right" />
                  UGC &nbsp;
                </a>
              </li>{" "}
              <li>
                <a href="http://www.aicte-india.org/">
                  <i className="fa fa-angle-double-right" />
                  AICTE &nbsp;
                </a>
              </li>{" "}
              <li>
                <a href="http://www.annauniv.edu/">
                  <i className="fa fa-angle-double-right" />
                  Anna University &nbsp;
                </a>
              </li>{" "}
            </ul>
            <h5>ACCREDITATION</h5>
            <br />
            <ul className="list-unstyled">
              <li>
                <a href={require("./styles/mandatorydisclosure.pdf")}>
                  <i className="fa fa-angle-double-right" />
                  Mandatory Disclosure &nbsp;
                </a>
              </li>

              <li>
                <a href={require("./styles/AnnaUnivMinDisclosure.pdf")}>
                  <i className="fa fa-angle-double-right" />
                  Minimum Disclosure &nbsp;
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  NIRF data &nbsp;
                </a>
              </li>
              <li>
                <a href={require("./styles/SSR2017.pdf")}>
                  <i className="fa fa-angle-double-right" />
                  NAAC SSR &nbsp;
                </a>
                <a href={require("./styles/NAAC_Letter.pdf")}>
                  <i className="fa fa-angle-double-right" />
                  NAAC Certificate &nbsp;
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  IQAC &nbsp;
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>UTILITIES</h5>
            <br />
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  RMKCET Web Mail &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Academic Calendar &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  RMK Apps Store &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Anna University CoE &nbsp;
                </a>
              </li>
            </ul>

            <h5>QUICK LINKS</h5>
            <br />
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Vidhya Lakshmi Portal &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Grievance Redressal Cell &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  RMK Engineering College &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  RMD Engineering College &nbsp;
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  NSS &nbsp;
                </a>
                <a href="#">
                  <i className="fa fa-angle-double-right" />
                  Contact Us&nbsp;
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5>MAPS</h5>
            <br />
            <a href="https://www.google.com/maps/place/RMK+College+of+Engineering+and+Technology+(RMKCET)/@13.32409,80.151201,13z/data=!4m5!3m4!1s0x0:0x61ce593720f3684b!8m2!3d13.32409!4d80.1512006?hl=en-IN">
              <img src={require("./styles/Capture.PNG")} />
            </a>

            <h5>WORKING HOURS</h5>
            <ul>
              <li>
                <p>Monday-Saturday&nbsp; 8:30am-3.05pm</p>
              </li>
              <li>
                sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2018 RMKCET | Designed & Maintained By Department of CSE</p>
      </div>
    </footer>
  );
};

export default FooterPage;
