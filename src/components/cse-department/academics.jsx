import React from "react";
import Library from "../styles/rmklibrary.jpg";
import "../styles/common.css";

const Academics = () => {
  return (
    <React.Fragment>
      <div class="row"  style={{ marginLeft:"10px" }}>
					<div class="forum-wrapper section-header03 faq-tabs">
						<h3  style={{ fontFamily:"'Roboto Slab', serif" }}>Academics</h3>
							<div class="about-ds-content">
							<ul class="list-unstyled">
								<li class="aca1"><a href="cse-time-table.php">Time Table</a></li>
								<li class="aca2"><a href="new_cse/syllabus/curriculum2017regulation.pdf" target="_blank">Curriculum(Reg 2017)</a></li>
								<li class="aca3"><a href="new_cse/syllabus/curriculum2013regulation.pdf" target="_blank">Curriculum(Reg 2013)</a></li>
								<li class="aca4"><a href="cse-microprocessor-lab.php">Resources</a></li>
							</ul>
						</div>

					</div>

				</div>
    </React.Fragment>
  );
};

export default Academics;
