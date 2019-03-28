import React, { Component } from "react";
class Research extends Component {
  state = {
    governCouncilMembers: [
      {
        id: 1,
        name: "CSE",
        position: "Dr. D. Paul Raj",
        Category: "Semantic eb Services",
        phd: "Anna University, Chennai",
        scholar: "11"
      },
      {
        id: 2,
        name: "CSE",
        position: "Dr. M. Vigilson Prem",
        Category: "Agent Computing",
        phd: "Anna University, Chennai",
        scholar: "9"
      },
      {
        id: 3,
        name: "ECE",
        position: "Dr. N.Gangatharan",
        Category:
          "Telecommunication engineering, Bio medical signal processing, Digital signal processing",
        phd: "Anna University,St.Peter’s university,Bharath University",
        scholar: "02"
      },
      {
        id: 4,
        name: "ECE",
        position: "Dr.C.Arun",
        Category: "VLSI design and Wireless Communication",
        phd:
          "Anna University, Chennai, St.Peter’s university, Sathyabama University",
        scholar: "14"
      },
      {
        id: 5,
        name: "ECE",
        position: "Dr. T.M.Inbamalar",
        Category: "Digital Signal Processing,Image Processing,Bioinformatics",
        phd: "Anna University, Chennai",
        scholar: "02"
      },
      {
        id: 6,
        name: "EEE",
        position: "Dr. Kalaiarasi",
        Category: "Electrical Drives",
        phd: "Anna University, Chennai",
        scholar: "04"
      },
      {
        id: 7,
        name: "MECH",
        position: "Dr. M.Balasubramanian",
        Category: "Manufacturing",
        phd: "Anna University, Chennai",
        scholar: "06"
      },
      {
        id: 8,
        name: "MECH",
        position: "Dr. P.K.Devan",
        Category: "Thermal Sciences",
        phd: "Anna University, Chennai",
        scholar: "04"
      },
      {
        id: 9,
        name: "S&H(General Engg.)",
        position: "Dr. S. Bhagavathi Perumal",
        Category: "Civil Engineering",
        phd:
          "Anna University, Chennai, Bharath University, Chennai, Dr. M.G.R. Educational and Research Institute, Chennai",
        scholar: "06"
      },
      {
        id: 10,
        name: "S&H (Mathematics)",
        position: "Dr. K.A. Selvakumaran",
        Category:
          "Complex Analysis, Geometric Function Theory, Special Functions",
        phd: "Anna University, Chennai Bharathiar University, Coimbatore",
        scholar: "01"
      }
    ],
    PHD: [
      {
        id: 1,
        name: "Mr. Shanmugasundaram M",
        position: "CSE",
        Category: "Dr. Ravi Kumar G, Anna University",
        phd: "Disaster Management Using Data Mining",
        scholar: "Jan 2012",
        status: "Doing Course Work"
      },
      {
        id: 2,
        name: "Ms. Akila K",
        position: "CSE",
        Category: "Dr.Chitrakala S, Anna University",
        phd: "Image and Video Processing",
        scholar: "Jun 2011",
        status: "Synopsis Submitted"
      },
      {
        id: 3,
        name: "Mr. Naresh Sammeta",
        position: "CSE",
        Category: "Dr Latha Parthiban,Pondicherry University",
        phd: "Cloud Computing",
        scholar: "Dec 2013",
        status: "Coursework Completed"
      },
      {
        id: 4,
        name: "Ms. Indra Priyadharshini S",
        position: "CSE",
        Category: "Dr. Vigilson, RMDEC",
        phd: "Data Mining",
        scholar: "June 2015",
        status: "Confirmation Completed"
      },
      {
        id: 5,
        name: "Ms. Prem Priya P",
        position: "CSE",
        Category: "Dr Jeevaa Katiravan, VEC",
        phd: "Cloud Computing",
        scholar: "Jan 2017",
        status: "Confirmation Completed"
      },
      {
        id: 6,
        name: "Ms.Indra.G",
        position: "CSE",
        Category: "Dr N Duraipandian, VEC",
        phd: "Big Data",
        scholar: "Jan 2017",
        status: "Coursework Completed"
      },
      {
        id: 7,
        name: "Ms. Prianka R.R",
        position: "CSE",
        Category: "Dr Ciline Kavitha A,Veltech Multitech",
        phd: "Data Mining",
        scholar: "Jan 2016",
        status: "Coursework Completed"
      },
      {
        id: 8,
        name: "Mr.B.Hariharan",
        position: "CSE",
        Category: "Dr.D.Paulraj,RMKCET",
        phd: "Cloud Computing",
        scholar: "Jan 2014",
        status: "Confirmation Completed"
      },
      {
        id: 9,
        name: "Mr.M.Arun Manicka Raja",
        position: "CSE",
        Category: "Dr S Swamynathan, Anna university",
        phd: "Semantic Web",
        scholar: "Jan 2015",
        status: "Confirmation Completed"
      },
      {
        id: 10,
        name: "Mr.P.N.Senthil Prakash",
        position: "CSE",
        Category: "Dr PGanesh Kumar,PSNA ",
        phd: "Data Mining",
        scholar: "June 2016",
        status: "Doing Course Work"
      },
      {
        id: 11,
        name: "Ms. Vaishnavi S",
        position: "CSE",
        Category: "Dr T Sethukarasi, RMKEC",
        phd: "IoT",
        scholar: "July 2016",
        status: "Confirmation Completed"
      },
      {
        id: 12,
        name: "Ms. Kavitha C",
        position: "CSE",
        Category: "Dr. Anita.X, Jerusalem Engg College",
        phd: "Big Data",
        scholar: "July 2016",
        status: "Coursework Completed"
      },
      {
        id: 13,
        name: "Ms. Anjana Devi J",
        position: "CSE",
        Category: "Dr.R.Dhaya, Rajalakshmi Engineering College",
        phd: "Data Mining",
        scholar: "July 2016",
        status: "Confirmation Completed"
      },
      {
        id: 14,
        name: "Ms. Kannagi V",
        position: "ECE",
        Category: "Dr. Jawahar A, SSN",
        phd: "Antenna Design",
        scholar: "Jan 2014",
        status: "Doing Course Work"
      },
      {
        id: 15,
        name: "Ms. Sesha Vidhya.S",
        position: "ECE",
        Category: "Dr. Rukumanidevi S, RMDEC",
        phd: "Antenna Design",
        scholar: "Jan 2015",
        status: "Doing Course Work"
      },
      {
        id: 16,
        name: "Ms. Praveena N.G.",
        position: "ECE",
        Category: "Dr. Helenprabha K, RMDEC",
        phd: "Wireless Networks",
        scholar: "Jan 2011",
        status: "Near Completion"
      },
      {
        id: 17,
        name: "Mr. Muthumanickam S",
        position: "ECE",
        Category: "Dr. Arun C, RMKCET",
        phd: "DIP & VLSI",
        scholar: "June 2012",
        status: "Conformation completed"
      },
      {
        id: 18,
        name: "Mr. Kannan K",
        position: "ECE",
        Category: "Dr. Devaraju M",
        phd: "Communication Networks",
        scholar: "Jul 2011",
        status: "Confirmation Done"
      },
      {
        id: 19,
        name: "Mr.R.Vijayananth",
        position: "ECE",
        Category: "Dr.S.Rukmani Devi, RMDEC",
        phd: "Image & Video Processing",
        scholar: "June 2015",
        status: "Doing Course Work"
      },
      {
        id: 20,
        name: "Mr. Manikandan A",
        position: "ECE",
        Category: "Dr. Balasubhadra K, RMDEC",
        phd: "Cross layer design",
        scholar: "Jan 2011",
        status: "Conformation completed"
      },
      {
        id: 21,
        name: "Mr. Sathiyaraj P",
        position: "ECE",
        Category: "Dr.C.Srinivasan, RMDEC",
        phd: "Cognitive Radio networks",
        scholar: "June 2015",
        status: "Doing Course Work"
      },
      {
        id: 22,
        name: "Mr.M.Babu",
        position: "ECE",
        Category: "Dr.G.A.Sathishkumar, SVCE",
        phd: "Cryptography & VLSI",
        scholar: "June 2015",
        status: "Doing Course Work"
      },
      {
        id: 23,
        name: "Mr. Gunalan K",
        position: "EEE",
        Category: "Dr. Sharmeela C, Anna University",
        phd: "Study and Analysis of LVRT Capability of Wind Turbine",
        scholar: "June 2012",
        status: "Waiting for confirmation"
      },
      {
        id: 24,
        name: "Ms. Catherine T. J",
        position: "EEE",
        Category: "Dr. Ramkumar S, SKIT, Coimbatore",
        phd: "Modelling and Simulation of UPFC",
        scholar: "Jun 2011",
        status: "Confirmation Completed"
      },
      {
        id: 25,
        name: "Mr. Umashankar L",
        position: "EEE",
        Category: "Dr. Kalaiarasi N, RMKCET",
        phd: "Fault Diagnosis in High Voltage Apparatus",
        scholar: "Jan 2011",
        status: "Waiting for synopsis meeting"
      },
      {
        id: 26,
        name: "Ms. Bindu K V",
        position: "EEE",
        Category: "Dr. Justus Rabi B, SAACE",
        phd: "DSP based Three Phase Current Injection Rectifier",
        scholar: "Jan 2011",
        status: "Waiting for synopsis meeting"
      },
      {
        id: 27,
        name: "Mr. Dilavar Basha K",
        position: "EEE",
        Category: "Dr. Jamuna K, VIT University, Chennai",
        phd: "Islanding Detection of micro grid using wavelet transform",
        scholar: "July 2013",
        status: "Waiting for confirmation"
      },
      {
        id: 28,
        name: "Ms. B.Nagarani",
        position: "EEE",
        Category: "DR.N.M.Jothi Swaroopan, RMK Engineering College",
        phd: "Battery Energy Storage System in wind Energy conversion system",
        scholar: "June 2015",
        status: "Doing Course Work"
      },
      {
        id: 29,
        name: "N.Hariharan",
        position: "EEE",
        Category: "Dr.N.Kalaiarasi, Professor/Head, RMKCET",
        phd: "New power factor correction topology",
        scholar: "June 2015",
        status: "Doing Course Work"
      },
      {
        id: 30,
        name: "Dr. Loganathan T G",
        position: "MECH",
        Category: "Dr. K. Chandrasekaran, Prof/RMK Engg College",
        phd:
          "Experimental Investigation on Flexural response of GFRP composite laminate",
        scholar: "July 2009",
        status: "Completed"
      },
      {
        id: 31,
        name: "Dr. Senthil Kumar S",
        position: "MECH",
        Category: "Dr. K.Purushothaman, St.Peter’s Engg College",
        phd:
          "An Experimental Investigation on Diesel Engine using Rubber Seed Oil as an Alternate Fuel",
        scholar: "Jan 2011",
        status: "Completed"
      },
      {
        id: 32,
        name: "Mr. Senthil Gavaskar S",
        position: "MECH",
        Category: "Dr. Uma Chandrasekar, Pondicherry University",
        phd: "Online Buying Behavior of Customers",
        scholar: "Dec 2010",
        status: "Course work completed"
      },
      {
        id: 33,
        name: "Mr. Bibin C",
        position: "MECH",
        Category: "Dr. Seenikannan P, Sethu Institute of Technology",
        phd:
          "Experimental Investigation on Exhaust Waste Heat Recovery From IC Engines",
        scholar: "Feb 2011",
        status: "Confirmation Completed"
      },
      {
        id: 34,
        name: "Mr. Saravanan M",
        position: "MECH",
        Category: "Dr. Sureshbabu A, Anna University",
        phd:
          "A Micromechanical Model for Predicting Thermal Propertiesof Knitted Fabrics Used in Heating Elements",
        scholar: "Dec 2013",
        status: "Course work completed"
      },
      {
        id: 35,
        name: "Mr. K. Vinothkumar",
        position: "MECH",
        Category: "Dr.R.Pavendhan, Govt Engg College Villupuram",
        phd: "Friction and Wear behavior of Cu based Composites",
        scholar: "June 2014",
        status: "Course work completed"
      },
      {
        id: 36,
        name: "Mr. R.Ashokkumar",
        position: "MECH",
        Category: "Dr.A.Devaraju, Adhi Engineering College",
        phd: "Tribological properties Aluminium based composites",
        scholar: "June 2015",
        status: "Course work is in progress"
      },
      {
        id: 37,
        name: "Mr. S. Arunkumar",
        position: "MECH",
        Category: "Dr. Senthil, Sethu Institute of Technology",
        phd: "Tribological properties Aluminium based composites",
        scholar: "June 2015",
        status: "Course work is in progress"
      },
      {
        id: 38,
        name: "Mr. S. Gopinath",
        position: "MECH",
        Category: "Dr.P.K.Devan, Prof/Mech, RMKCET",
        phd: "Alternate fuel for DI Diesel Engines",
        scholar: "June 2015",
        status: "Course work is in progress"
      },
      {
        id: 39,
        name: "Ms. Durgadevi P",
        position: "S&H (General Engineering)",
        Category: "Dr. Srinivasan S, RMD",
        phd: "Cloud Computing",
        scholar: "Jul 2011",
        status: "Finished Course Work"
      },
      {
        id: 40,
        name: "Ms. A. Ramadevi",
        position: "S&H (English)",
        Category: "Dr. Sita, Pondicherry University",
        phd:
          "Marrital Disharmony and Family Disintegration in the select novels of Shashi Deshpande, Gita Hariharan and Anita Nair",
        scholar: "Aug 2008",
        status: "Abstract submitted"
      },
      {
        id: 41,
        name: "Mr. J. Leo Amalraj",
        position: "S&H (Mathematics) ",
        Category: "Dr.M.Maria Susai Manuel, RMD Engineering college",
        phd: "Qualitative Properties of difference equations",
        scholar: "Nov 2013",
        status: "Course work Completed"
      },
      {
        id: 42,
        name: "Dr. T. Harikrishnan",
        position: "S&H (Mathematics)",
        Category: "Dr. A. Rafi, Quid-e-Millath Govt. College for Men, Chennai",
        phd: "Statistical Methods and Management",
        scholar: "July 2013",
        status: "Confirmation Completed"
      },
      {
        id: 43,
        name: "Ms. P. Hema",
        position: "S&H (Mathematics)",
        Category: "Dr. V. Vinoba, K. N. Govt. Arts College",
        phd: "Analysis of Network security using Game theory In WSN",
        scholar: "July 2013",
        status: "Course work Completed"
      },
      {
        id: 44,
        name: "Mr. K. Sudhakar",
        position: "S&H (Chemistry)",
        Category: "Dr. R. Nanthini",
        phd: "Biomedical Applications of Nano polyesters",
        scholar: "May 2013",
        status: "Confirmation Completed"
      },
      {
        id: 45,
        name: "Ms. N. Saikumari",
        position: "S&H (Chemistry)",
        Category: "Dr. G. R. Rajarajeswari, CEG, Chennai",
        phd: "Photo catalytic degradation of organic pollutants in water",
        scholar: "Jan 2011",
        status: "Confirmation Completed"
      },
      {
        id: 46,
        name: "Ms. G. Vasukidevi",
        position: "S&H (General Engineering)",
        Category: "Dr. R.Sethukkarasi, R.M.K. Engineering College",
        phd: "Faster Algorithm for Matrix Multiplication",
        scholar: "Jan 2014",
        status: "Course work Completed"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-md-9 col-sm-8">
          <div className="forum-wrapper section-header03">
            <h2>
              Academic <span>Research</span>
            </h2>
            <hr className="line" style={{ borderColor: "gray" }} />
            <div className="forum-content about-ds-content">
              <h5>
                Faculty Members who have been recognized as a Ph.D supervisor
                with Anna University Chennai and/or other Universities
              </h5>
            </div>
            <br />
            <br />
            <table
              className="table table-responsive-sm table-bordered"
              style={{ width: "80%", marginLeft: "0%" }}
            >
              <thead>
                <tr>
                  <th scope="col">SL.No</th>
                  <th scope="col">Department</th>
                  <th scope="col">Name of the Supervisor</th>
                  <th scope="col">Area of Specialization of Supervisor</th>
                  <th scope="col">Recognized as PhD Supervisor</th>
                  <th scope="col">No.of Research Scholar Guiding</th>
                </tr>
              </thead>
              <tbody>
                {this.state.governCouncilMembers.map(council => (
                  <tr key={council.id}>
                    <th scope="row">{council.id}</th>
                    <td>{council.name}</td>
                    <td>{council.position}</td>
                    <td>{council.Category}</td>
                    <td>{council.phd}</td>
                    <td>{council.scholar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <h5>FACULTY MEMBERS DOING PH.D :</h5> <br />
            <table
              className="table table-responsive-sm table-bordered"
              style={{ width: "100%", marginLeft: "0%" }}
            >
              <thead>
                <tr>
                  <th scope="col">SL.No</th>
                  <th scope="col">Name of the Faculty Member</th>
                  <th scope="col">Department</th>
                  <th scope="col">Name of the Supervisor/Institution</th>
                  <th scope="col">Research Title</th>
                  <th scope="col">Research Commencement Date</th>
                  <th scope="col"> Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.PHD.map(council => (
                  <tr key={council.id}>
                    <th scope="row">{council.id}</th>
                    <td>{council.name}</td>
                    <td>{council.position}</td>
                    <td>{council.Category}</td>
                    <td>{council.phd}</td>
                    <td>{council.scholar}</td>
                    <td>{council.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Research;
