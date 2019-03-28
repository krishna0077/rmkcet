import React from "react";
import "../styles/common.css";

const Resources = () => {
  return (
    <React.Fragment>
      <div class="container" style={{ marginLeft: "10px" }}>
        
        <div class="forum-wrapper section-header03">
          <h2>Placement  <span>Resources</span></h2>
        </div>
        <br/>
        <br/>
        <div className="row">
          <div class="col-sm-4">
            <h4>Learning English</h4>
            <ul class="list-unstyled">
              <li><a href="http://www.thehindu.com/books/know-your-english/" target="_blank">Know Your English - The Hindu</a></li>
              <li><a href="http://learnenglish.britishcouncil.org/en/" target="_blank">LearnEnglish - British Council</a></li>
              <li><a href="http://americanenglish.state.gov/" target="_blank">American English</a></li>
            </ul>
            <h4>Online Programming Practice</h4>
            <ul class="list-unstyled">
              <li><a href="http://www.tutorialspoint.com/codingground.htm" target="_blank">Coding Ground</a></li>
              <li><a href="http://ideone.com/" target="_blank">Idea One</a></li>
              <li><a href="http://codepad.org/" target="_blank">Code Pad</a></li>
              <li><a href="http://jsbin.com/" target="_blank">JS Bin</a></li>
              <li><a href="http://liveweave.com/" target="_blank">Liveweave</a></li>
              <li><a href="http://sqlfiddle.com/" target="_blank">SQL Fiddle</a></li>
            </ul>
            <h4>Online Programming Contests</h4>
            <ul class="list-unstyled">
              <li><a href="https://www.hackerrank.com/" target="_blank">HackerRank</a></li>
              <li><a href="https://www.hackerearth.com/" target="_blank">HackerEarth</a></li>
              <li><a href="http://www.topcoder.com/" target="_blank">Top Coder</a></li>
              <li><a href="http://www.codechef.com/" target="_blank">Code Chef</a></li>
              <li><a href="http://www.spoj.com/" target="_blank">Sphere Online Judge</a></li>
              <li><a href="https://www.kaggle.com/" target="_blank">Kaggle</a></li>
            </ul>
            
          </div>
          <div class="col-sm-4">
            <h4>Interview Preparation</h4>
            <ul class="list-unstyled">
              <li><a href="http://www.careercup.com/" target="_blank">CareerCup</a></li>
              <li><a href="http://www.interviewbit.com/" target="_blank">InterviewBit</a></li>
              <li><a href="https://leetcode.com/" target="_blank">LeetCode Online Judge</a></li>
              <li><a href="http://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a></li>
              <li><a href="http://www.indiabix.com/" target="_blank">IndiaBix</a></li>
              <li><a href="https://www.chalkstreet.com/aptipedia/" target="_blank">Aptipedia</a></li>
              <li><a href="http://www.lofoya.com/" target="_blank">Lofoya</a></li>
              <li><a href="http://www.btechguru.com/" target="_blank">BtechGuru</a></li>
            </ul>
            <h4>Higher Studies</h4>
            <ul class="list-unstyled">
              <li><a href="http://www.gate.iitg.ac.in/" target="_blank">GATE</a></li>
              <li><a href="https://iimcat.ac.in/" target="_blank">CAT</a></li>
              <li><a href="http://www.ets.org/gre" target="_blank">GRE</a></li>
              <li><a href="http://www.mba.com/india" target="_blank">GMAT</a></li>
              <li><a href="http://www.xatonline.net.in/" target="_blank">XAT</a></li>
            </ul>
            <h4>Question and Answer</h4>
            <ul class="list-unstyled">
              <li><a href="http://stackoverflow.com/" target="_blank">Stack Overflow</a></li>
              <li><a href="http://www.quora.com/" target="_blank">Quora</a></li>
            </ul>
          </div>
          <div class="col-sm-4">
            <h4>Industry Interaction</h4>
            <ul class="list-unstyled">
              <li><a href="https://campusconnect.infosys.com/login.aspx" target="_blank">Infosys CampusConnect</a></li>
              <li><a href="https://nextstep.tcs.com/campus/" target="_blank">TCS NextStep</a></li>
            </ul>
            <h4>Internship/Apprenticeship</h4>
            <ul class="list-unstyled">
              <li><a href="https://www.boat-srp.com/boat/" target="_blank">BOAT</a></li>
              <li><a href="http://www.hellointern.com/" target="_blank">Hello Intern</a></li>
              <li><a href="http://www.twenty19.com/" target="_blank">Twenty19</a></li>
              <li><a href="http://www.letsintern.com/" target="_blank">Let's Intern</a></li>
              <li><a href="https://internshala.com/" target="_blank">Internshala</a></li>
            </ul>
          </div>
        </div>

        {/* <div class="row">
				<h3>Books</h3>
				{/* <a href="https://books.google.co.in/books?isbn=067174190X" target="_blank"><img src={require("new_placement/images/wordpower.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=8172242212" target="_blank"><img src={require("new_placement/images/george_summers.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=933920560X" target="_blank"><img src={require("new_placement/images/arun_qa6.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1259063267" target="_blank"><img src={require("new_placement/images/arun_lr.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1259006115" target="_blank"><img src={require("new_placement/images/cracking_it.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1118013158" target="_blank"><img src={require("new_placement/images/google_resume.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1466208686" target="_blank"><img src={require("new_placement/images/cracking_code.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1479274836" target="_blank"><img src={require("new_placement/images/elements_pgm.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1118287207" target="_blank"><img src={require("new_placement/images/pgm_landing.jpg")} alt=""/></a>
				<a href="https://books.google.co.in/books?isbn=1468108867" target="_blank"><img src={require("new_placement/images/ds_madeeasy.jpg")} alt=""/></a>
			</div> */}

      </div>
    </React.Fragment>
  );
};

export default Resources;