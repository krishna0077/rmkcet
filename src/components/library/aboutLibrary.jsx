import React from "react";
import Library from "../styles/rmklibrary.jpg";
import "../styles/common.css";

const AboutLibrary = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ fontFamily: "Crete Round" }}>
        <div className="row">
          <div className="col-md-7 col-sm-6 about-ds-content">
            <div className="section-header03">
              <h2>
                About <span>Library</span>
                <strong>
                  {" "}
                  <hr className="line" />
                </strong>
              </h2>
            </div>
            <br />
            <div className="col-md-5 col-sm-6 about-ds-image" id="image">
              <img
                alt=""
                src={Library}
                className="img-responsive imgborder"
                style={{ maxWidth: "465%" }}
              />
            </div>

            <br />
          </div>
          <p align="justify">
            The College Library and Information Centre has resources
            facilitating the Students with the latest Technology in accordance
            to the International Standards.
          </p>
          <p align="justify">
            The College Library Contains 23872 Volumes of books with 5202 titles
            and 1676 CDs.{" "}
          </p>
          <p align="justify">
            The Library also subscribes to 725 E-Books, 54 National Journals,
            275 International Journals, 35 Magazines and 11 newspapers. and also
            has subscription to access SCIENCE DIRECT, McGRAW HILL, IETE and IEI
            Online Journals and other publications. RMKCET provides the NPTEL
            (National Program Technology Enhanced Learning) through online and
            web video courses in engineering and humanities stream.
          </p>
          <p align="justify">
            To add to the wealth of options, RMKCET also has institutional
            membership in the Libraries of Anna University, British Council,
            DELNET (Developing Library Network, New Delhi), NDL (National
            Digital Library of India), IEI and IETE.
          </p>
          <p align="justify">
            The Library Services are automated through the Standard Library
            Software package called "Autolib 5.2 version". The Circulation
            System is fully Computerised and all the documents are bar-coded.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutLibrary;
