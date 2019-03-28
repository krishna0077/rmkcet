import React from "react";
import Library from "../styles/rmklibrary.jpg";
import "../styles/common.css";

const Contact = () => {
  return (
    <React.Fragment>

     <div class="row" style={{ marginLeft:"10px" }}>
					<div class="forum-wrapper section-header03 faq-tabs">
						<h3 style={{ fontFamily:"'Roboto Slab', serif" }}>Contact<span> Us</span></h3>
               <p><strong>The Head of the Department</strong><br/>
                  Department of Computer Science and Engineering<br/>
                  R.M.K. College of Engineering and Technology<br/>
                  R.S.M. Nagar, Puduvoyal, Gummidpoondi Taluk<br/>
                  Thiruvallur District, Tamil Nadu<br/>
                  India. Pin Code: 601 206.
                </p>
                <p>
                  <strong>Phone : 044 - 6790 0630</strong><br/>
                  <strong>Email ID: <a href="mailto:hod_cse@rmkcet.ac.in">hod_cse@rmkcet.ac.in</a></strong>
                </p>
					</div>
				</div>
    </React.Fragment>
  );
};

export default Contact;