import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import AuditStatement1718 from "./styles/Audited_Statement_17-18.pdf";
import AuditStatement1617 from "./styles/Audited_Statement_16-17.pdf";
import AuditStatement1516 from "./styles/Audited_Statement_15-16.pdf";

import Background from "./styles/background.jpg";

class Budgets extends Component {
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
                  <h1>AUDITED STATEMENT </h1>
                </div>
                <hr className="line" style={{ borderColor: "white" }} />
                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> &nbsp;
                    <a
                      style={{ color: "white" }}
                      href={AuditStatement1718}
                      target="noopener"
                    >
                      Audited Statement 2017-18
                    </a>
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" />
                    &nbsp;
                    <a
                      style={{ color: "white" }}
                      href={AuditStatement1617}
                      target="noopener"
                    >
                      Audited Statement 2016-17
                    </a>
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-check" aria-hidden="true" /> &nbsp;
                    <a
                      style={{ color: "white" }}
                      href={AuditStatement1516}
                      target="noopener"
                    >
                      Audited Statement 2015-16
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Budgets;
