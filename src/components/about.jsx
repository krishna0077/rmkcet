import React, { Component } from "react";
import NavBar from "./navbar";
import FooterPage from "./footer";
import "./styles/common.css";
import aboutimage from "./styles/aboutimage.jpg";
class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <br />

        <section className="about-ds" style={{ fontFamily: "Crete Round" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-6 about-ds-content">
                <div className="section-header03">
                  <h2>
                    About <span>RMKCET</span>
                    <strong>
                      {" "}
                      <hr className="line" style={{ borderColor: "gray" }} />
                    </strong>
                  </h2>
                </div>

                <p>A Star is Born.......</p>
                <br />
                <p>
                  The RMK group of educational institutions began their
                  educational services in the early nineties and for the past 25
                  years it is their sustained hard work and dedication that has
                  carved on niche in the field of engineering education. RMK
                  College of Engineering and Technology was established in 2008.
                </p>
                <br />
                <p>
                  The motto of the college is very lofty. Safety and security is
                  given top priority, then impeccable discipline. All are
                  provided with good food, when these are made available
                  engineering education becomes a child’s play. Teachers
                  carefully nurture the young ones in the field of engineering
                  and their mode of inspiring the students is available only
                  here.
                </p>
                <br />
              </div>
              <div className="col-md-5 col-sm-6 about-ds-image" id="image">
                <img
                  src={aboutimage}
                  alt="about"
                  className="img-responsive imgborder"
                  style={{ margin: "120psx 0 0 0" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-6 about-ds-content">
                <p>
                  RMK college of engineering spares no effort however tough or
                  small it may be in elevating the educational quality, the
                  bearing and orientation of the engineers that are molded,
                  shaped and polished to be the young visionaries of the future
                  of mankind.
                </p>
                <br />
                <p>
                  The education process is excellent and the placement is
                  enviable. We give training in engineering skills, not only
                  that-we have centers of excellence where the college and top
                  notch companies give training in various fields even before
                  they get their placement. Unmindful of the expenses involved,
                  the management pours millions into the training and placement
                  aspects of the students. This makes the college unique.
                </p>
                <br />
                <p>
                  There are a number of buses to bring the students safely from
                  home to college and leave them home in the evening. The food
                  is very good. The discipline is unparalleled and this creates
                  an educational ambience in the midst of the greenery
                  unequalled. The teachers are well qualified-many are gold
                  medal holders in their branches, and all are dedicated. Not a
                  day passes without some achievement or the other.
                </p>
                <br />
                <p>
                  The college infrastructure, staff, amenities and the ambience
                  and finally the placement record draws the children and the
                  parents to our institution.
                </p>
                <br />
                <p>
                  This college has a focused and clear vision. The missions are
                  made purposefully possible and the quality policy is strictly
                  adhered to. All this makes the students achieve their
                  objective comfortably and with cheer. The cutting edge
                  technology makes the students ready to take on any tough task
                  and finish it with dedication.
                </p>
                <br />
                <p>
                  Awards for the college, staff and students come in great
                  numbers and our college has become one of the engineering
                  colleges in the country to reckon with. We do not rest on our
                  laurels. We know we have miles to go and-Go we will!
                </p>
                <br />
              </div>
            </div>
          </div>
        </section>
        <br />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default About;
