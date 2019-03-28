import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import busroute from "./styles/busroutes.pdf";
import routemap from "./styles/routemap.swf";
class Busroutes extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />

        <div className="container" style={{ fontFamily: "Crete Round" }}>
          <div className="row">
            <div className="col-md-7 col-sm-6 about-ds-content">
              <div className="section-header03">
                <h3>
                  <br />
                  BUS ROUTE &nbsp;<span>DETAILS</span>
                  <strong>
                    {" "}
                    <hr className="line" style={{ borderColor: "gray" }} />
                  </strong>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div align="center">
          <a href={busroute} rel="_blank">
            CLICK HERE TO KNOW BUS ROUTES &amp; TIMINGS
          </a>
        </div>
        <br />
        <div align="center">
          <object
            classID="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"
            width="400"
            height="570"
          >
            <param name="movie" value="bus/routemap.swf" />
            <param name="quality" value="high" />
            <embed
              src={routemap}
              quality="high"
              pluginspage="http://www.macromedia.com/go/getflashplayer"
              type="application/x-shockwave-flash"
              width="400"
              height="570"
            />
          </object>
        </div>

        <br />
        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Busroutes;
