import React, { Component } from "react";

import "./styles/mainPageBody1.css";

class MainpageBody1 extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="teachers teachers-style02" id="main-features" style={{marginLeft:"5%",width:"90%"}}>
          <div className="container">
            <div class="row">
              <div class="col-sm-12 section-header">
                <h2>Why Choose <span>RMKCET</span></h2>
                <span><img src={require("./styles/edu-icon.png")}/></span>
              </div>
            </div>
          </div>
          <div className="container-custom">
            <div className="row">
              <div className="col-sm-4">

                <div className="media service-box">
                  <div className="pull-left"> <i className="fa fa-university" aria-hidden="true"></i> </div>
                  <div className="media-body">
                    <h4 className="media-heading">Environment</h4>
                    <p align="justify">Cool, Cozy and Comfortable environment that exudes warmth and imbibes the students in happiness and gets them ready for the best teaching-learning process.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="media service-box">
                  <div className="pull-left"> <i className="fa fa-users" aria-hidden="true"></i></div>
                  <div className="media-body">
                    <h4 className="media-heading">Management</h4>

                    <p align="justify">A willing management team that comes to the aid and to guide everyone at all levels without minding any inconvenience or expense. The deliberations between management and everyone is impartial and transparent that leads to worthy conclusions which causes the blossoming of a mighty relationship among all.</p>
                  </div>
                </div></div>
              <div className="col-sm-4">
                <div className="media service-box">
                  <div className="pull-left"> <i className="fa fas fa-building" aria-hidden="true"></i></div>
                  <div className="media-body">
                    <h4 className="media-heading">Infrastructure</h4>
                    <p>Best in its class. Whatever one needs for learning is provided at a wink of an eye. Buildings are aplenty, equipment is in abundance and 24x7 power supply for all. Right atmosphere for learning and research.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="media service-box">
                  <div className="pull-left"><i className="fa fa-male" aria-hidden="true"></i> </div>
                  <div className="media-body">
                    <h4 className="media-heading">Faculty</h4>
                    <p align="justify">The faculty leaves no stone unturned  in paying  individual attention to students who in turn respond with great enthusiasm. Everyone who is associated with the process of teaching contributes their might conscientiously and willingly, and it reaches a new high.<br /></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="media service-box">
                  <div className="pull-left"> <i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
                  <div className="media-body">
                    <h4 className="media-heading">Placement and Training</h4>
                    <p align="justify">Placement Training is given continuously from the first year itself. Every step of ours takes the students towards academic excellence, social awareness and good placement. The qualities of excellence, compassion, loyalty, and the will to win are infused in them slowly and steadily so that ultimately these qualities are imbibed in their mind and soul.</p>
                  </div>
                </div>

              </div>
              <div className="col-sm-4">

                <div className="media service-box">
                  <div className="pull-left"> <i className="fa fa-bus" aria-hidden="true"></i> </div>
                  <div className="media-body">
                    <h4 className="media-heading">Food &amp; Transport</h4>
                    <p align="justify">The quality of food served is excellent, incomparable and an invite to the taste buds of everyone who walks into the mess hall.</p><p align="justify">The transport network covers the entire city and suburbs, and provides safe and comfortable journey to the college and back home.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div class="col-sm-12 section-header">
                <h2> <span>ACCOLADES</span></h2>
                <span><img src="new_images/edu-icon.png" alt=""/></span>
                </div> */}
            </div>
           <div className="row"> 
              {/*  <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="small_sliderwrap" align="center">
                        <div className="bx-wrapper" style="max-width: 100%;">
                        <div className="bx-viewport" style="width: 100%; overflow: hidden; position: relative; height: 404px;">
                        <ul className="bxslider" data-call="bxslider" data-options="captions: true,	auto: true" style="width: 1015%; position: relative; transition-duration: 0s; transform: translate3d(-3920px, 0px, 0px);">
                        <li style="float: left; list-style: none; position: relative; width: 560px;" className="bx-clone">
                        <img src="new_images/accolades/EUNICE.jpg" style="font-size:8px" title="Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 "/>
                        <div className="bx-caption"><span>Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 </span></div>
                        </li>				
                        <li style="float: left; list-style: none; position: relative; width: 560px;">
                        <img src="new_images/accolades/Eunice2.jpg" style="font-size:8px" title="Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 "/>
                        <div className="bx-caption"><span>Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 </span></div>
                        </li>
                        <li style="float: left; list-style: none; position: relative; width: 560px;">
                        <img src="new_images/accolades/EUNICE.jpg" style="font-size:8px" title="Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 "/>
                        <div className="bx-caption"><span>Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 </span></div>
                        </li>
                          <li style="float: left; list-style: none; position: relative; width: 560px;">
                          <img src="new_images/accolades/swatchha.jpg" style="font-size:8px" title="SWACHHTA 2017"/>
                          <div className="bx-caption"><span>SWACHHTA 2017</span></div>
                          </li>
                          <li style="float: left; list-style: none; position: relative; width: 560px;">
                          <img src="new_images/accolades/nptel_2017.jpg" style="font-size:8px" title="NPTEL A Ratings"/>
                          <div className="bx-caption"><span>NPTEL A Ratings</span></div>
                          </li>
                          <li style="float: left; list-style: none; position: relative; width: 560px;">
                          <img src="new_images/accolades/nptel_selvakumaran_2017.jpg" title="NPTEL - SPoC"/>
                          <div className="bx-caption"><span>NPTEL - SPoC</span></div>
                          </li>
                          <li style="float: left; list-style: none; position: relative; width: 560px;">
                          <img src="new_images/accolades/taekwando_preethi_2017.jpg" style="font-size:8px" title="Preethi T, Second Year Mechanical Engineering, won Gold Medal in Vellore District Taekwando Championships 2017-2018 held on 31.06.2017 &amp; 01.07.2017 at Vellore"/>
                          <div className="bx-caption"><span>Preethi T, Second Year Mechanical Engineering, won Gold Medal in Vellore District Taekwando Championships 2017-2018 held on 31.06.2017 &amp; 01.07.2017 at Vellore</span></div>
                          </li>
                          
                          <li style="float: left; list-style: none; position: relative; width: 560px;">
                          <img src="new_images/accolades/sih_2018_ece.jpg" style="font-size:8px" title="Final Year Students (2014-18) of ECE were 1st Runner Up at Smart India Hackathon (2018) held at JECRC University, Jaipur. They won prize money of Rs. 75,0000."/>
                          <div className="bx-caption"><span>Final Year Students (2014-18) of ECE were 1st Runner Up at Smart India Hackathon (2018) held at JECRC University, Jaipur. They won prize money of Rs. 75,0000.</span></div>
                          </li>
                          <li style="float: left; list-style: none; position: relative; width: 560px;">
                          <img src="new_images/accolades/EUNICE.jpg" style="font-size:8px" title="Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 "/>
                          <div className="bx-caption"><span>Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 </span></div>
                          </li>
                          
                        <li style="float: left; list-style: none; position: relative; width: 560px;" className="bx-clone">
                        <img src="new_images/accolades/Eunice2.jpg" style="font-size:8px" title="Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 "/>
                        <div className="bx-caption"><span>Ms. EUNICE DAPHNE J, ECE Dept secured First rank Gold Medal in Anna University, Batch 2014-2018 </span>
                        </div>
                        </li>
                        </ul>
                        </div>
                        <div className="bx-controls bx-has-pager bx-has-controls-direction">
                        <div className="bx-pager bx-default-pager">
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="0" className="bx-pager-link">1</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="1" className="bx-pager-link">2</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="2" className="bx-pager-link">3</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="3" className="bx-pager-link">4</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="4" className="bx-pager-link">5</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="5" className="bx-pager-link">6</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="6" className="bx-pager-link active">7</a>
                        </div>
                        <div className="bx-pager-item">
                        <a href="" data-slide-index="7" className="bx-pager-link">8</a>
                        </div>
                        </div>
                        <div className="bx-controls-direction">
                        <a className="bx-prev" href="">Prev</a>
                        <a className="bx-next" href="">Next</a>
                        </div>
                        </div>
                        </div>
                    </div>
              </div>
				<div className="col-sm-3"> </div>*/}
			</div>
          </div>
        </section>

      </React.Fragment>
        );
      }
    }
    
export default MainpageBody1;
