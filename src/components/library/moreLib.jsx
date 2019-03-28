import React from "react";
const MoreLibrary = () => {
  return (
    <div className="container">
      <div className="panel-group" id="accordion">
        <div className="section-header03">
          <h2>
            <br />
            THE <span> Journals</span>
            <strong>
              {" "}
              <hr className="line" />
            </strong>
          </h2>
        </div>
        <div className="group" style={{ marginLeft: "-12%" }}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                >
                  &nbsp; &nbsp; Free E-books
                </a>
              </h4>
            </div>
            <div id="collapseOne" classNameName="panel-collapse collapse in">
              <div className="panel-body">
                <br />
                <ol>
                  <li>
                    <a href="http://www.gutenberg.org/" target="noopener">
                      Project Gutenberg offers over 38,000 free ebooks
                    </a>
                  </li>{" "}
                  <hr className="line" />
                  <li>
                    <a href="https://www.pdfdrive.com/" target="noopener">
                      eBooks for Free{" "}
                    </a>
                  </li>
                </ol>

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
                  &nbsp; &nbsp; General Engineering
                </a>
              </h4>
            </div>
            <div id="collapseTen" className="panel-collapse collapse">
              <div className="panel-body">
                <br />
                <ol>
                  <li>
                    <a
                      href="http://www.greatachievements.org/"
                      target="noopener"
                    >
                      {" "}
                      Greatest Engineering Achievements
                    </a>
                  </li>
                </ol>

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
                  &nbsp; &nbsp; Patent
                </a>
              </h4>
            </div>
            <div id="collapseEleven" className="panel-collapse collapse">
              <div className="panel-body">
                <br />
                <ol>
                  <li>
                    <a href="http://www.pfc.org.in/db/db.htm" target="noopener">
                      Indian Patent Searchable Database
                    </a>
                  </li>{" "}
                  <hr className="line" />
                  <li>
                    <a href="http://patinfo.nic.in" target="noopener">
                      Govt India Patent Website{" "}
                    </a>
                  </li>{" "}
                  <hr className="line" />
                  <li>
                    <a href="http://www.nipo.in/" target="noopener">
                      National Intellectual Property Organization
                    </a>
                  </li>
                </ol>
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
                  &nbsp; &nbsp; Dictionaries / encyclopedia
                </a>
              </h4>
            </div>
            <div id="collapseFour" className="panel-collapse collapse">
              <div className="panel-body">
                <br />
                <ol>
                  <li>
                    <a href="http://www.onelook.com/" target="noopener">
                      One look Dictionary
                    </a>
                  </li>{" "}
                  <hr className="line" />
                  <li>
                    <a href="http://www.britannica.coms" target="noopener">
                      Encyclopedia Britannica
                    </a>
                  </li>
                </ol>
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
                  &nbsp; &nbsp; Newspaper Directory for the World
                </a>
              </h4>
            </div>

            <div id="collapseFive" className="panel-collapse collapse">
              <div className="panel-body">
                <br />
                <ol>
                  <li>
                    <a
                      href="http://www.onlinenewspapers.com//"
                      target="noopener"
                    >
                      Online Newspaper Directory for the World
                    </a>
                  </li>
                </ol>
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
                  &nbsp; Higher education in India
                </a>
              </h4>
            </div>
            <div id="collapsesix" className="panel-collapse collapse">
              <div className="panel-body">
                <br />
                <ol class="jouls">
                  <li>
                    <a href="http://mhrd.gov.in/" target="noopener">
                      {" "}
                      Ministry of Human Resource Development{" "}
                    </a>
                  </li>{" "}
                  <hr className="line" />
                  <li>
                    <a href="http://www.aicte-india.org/" target="noopener">
                      AICTE
                    </a>{" "}
                    <hr className="line" />
                  </li>
                  <li>
                    <a href="http://www.academics-india.com/" target="noopener">
                      Higher education in India news{" "}
                    </a>
                  </li>
                </ol>

                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />

        <br />
      </div>
    </div>
  );
};

export default MoreLibrary;
