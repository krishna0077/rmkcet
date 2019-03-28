import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
class Alumini extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />

                <br />
                <br />

                <section className="about-ds" style={{ fontFamily: "Crete Round",marginLeft: "5%",width: "90%" }}>
                    <div class="row">
                        <div class="forum-wrapper section-header03">
                            <h3>About  <span>Alumni association</span></h3>
                        </div>
                        <p align="justify">Alumni association has been a source of inspiration and encouragement to the college and its undergraduate students consistently from its inception. The association has been consistently conducting meets over the past 1 years. At least two meets per academic year, one on-campus along-with the graduation ceremony and the other within city limits to facilitate participation, is being conducted since its inception.</p>
                        <p align="justify">People in Chennai and elsewhere have discovered that the RMK group creates a rock solid foundation for young minds to build a career and face the world boldly and cheerfully. As a result of this the demand for seats in these institutions reached new heights and the management was pressurized into starting one more institution here. As the Lakshmikanthammal Trusts's main objective is to foster quality technical and higher education, research and training in rural areas in various branches of science and technology and simultaneously inculcate among the youth a sense of discipline and pride in their hard work so that they can be moulded into competent technocrats of the century, they decided to have another college of engineering in the vicinity. </p>
                    </div>
                </section>
                <br />
                <br />
                <FooterPage />
            </React.Fragment>
        );
    }
}

export default Alumini;
