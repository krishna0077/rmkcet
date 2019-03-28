import React, { Component } from "react";
class Patent extends Component {
  state = {
    governCouncilMembers: [
      {
        id: 1,
        name: "Dr. Devan P K",
        position: "MECH",
        Category:
          "New Poon Oil Compositiondiesel Blend as Alternative Fuel for Diesel Engine",
        phd: "253355 (16.07.12)",
        number: "",
        patentG: "Granted",
        academic: "2012-13"
      },
      {
        id: 2,
        name: "Kevin Nappoly Hemanth Kumar Vemula",
        position: "EEE",
        Category:
          "A cognitive resource allocation strategy for cloud gaming as a service",
        phd: "662/CHE/2015",
        number: "Filed",
        patentG: "",
        academic: "2014-15"
      },
      {
        id: 3,
        name: "Dr.Balasubramanian M Professor & Head",
        position: "MECH",
        Category:
          "A novel Methodology for the Placement of Multi diameter interlayer OFC Material in Friction Welding of Dissimilar",
        phd: "CH/1669/2015",
        number: "Filed",
        patentG: "",
        academic: "2014-15"
      },
      {
        id: 4,
        name: "Dr.Balasubramanian M Professor & Head",
        position: "MECH",
        Category:
          "A Novel methodology implemented in modifying the nozzle by incorporating multi start internal thread",
        phd: "2.01641E+11",
        number: "Filed",
        patentG: "",
        academic: "2015-16"
      },
      {
        id: 5,
        name: "Dr.P.K.Devan  R.Ashokkumar V.Thangadurai Thummalalokesh",
        position: "MECH",
        Category:
          "Emission control using new chemical composition applied in engine exhaust line (muffler) of a stationery diesel engine",
        phd: "2.01641E+11",
        number: "Filed",
        patentG: "",
        academic: "2015-16"
      },
      {
        id: 6,
        name: "Dr.P.K.Devan  Mrs. K.Renugadevi",
        position: "MECH",
        Category:
          "Calotropisgigantea Natural fiber yarn reinforced composite laminate for making automobile and structural components",
        phd: "2.01641E+11",
        number: "Filed",
        patentG: "",
        academic: "2016-17"
      },
      {
        id: 7,
        name:
          "Dr.M.Balasubramania, Professor & Head, Dr.P.K.Devan, Professor, Mr.T.G.Loganathan, Associate Professor, Students  Mohamed Furquan.K, MurahariSaai Krishna,Lalith Kumar. D",
        position: "MECH",
        Category:
          "New Methodology for Generating Spur Gear and Helical Gear Using Radial Drilling Machine",
        phd: "2.01641E+11",
        number: "Filed",
        patentG: "",
        academic: "2016-17"
      },
      {
        id: 8,
        name:
          "Dr.M.Balasubramanian Professor & Head Dr. P.K.Devan, Professor Mr.T.G.Loganathan, Associate Professor Mr.M.Saravanan, Asst. Professor Students Mr. O.R.Nirmal, Mr.G.Praveen Kumar. Mr.S.R.NishokSriram.",
        position: "MECH",
        Category:
          "New approach to arrest Flammable Gases Using Microcontroller Operated Solenoids",
        phd: "2.01641E+11",
        number: "Filed",
        patentG: "",
        academic: "2016-17"
      },
      {
        id: 9,
        name:
          "Dr.M.Balasubramanian  Professor & HeadMr.N.Sadasivan Assistant Professor",
        position: "MECH",
        Category:
          "A convertible ECAP die with an interchangeable exit channel attachment enabling flexibility",
        phd: "2.01741E+11",
        number: "Filed",
        patentG: "",
        academic: "2017-18"
      },
      {
        id: 10,
        name: "Dr.Perumal Pillai E B Dr.Padmavathy T V",
        position: "ECE",
        Category:
          "Design and Development of Cross Slotted Circular Microstrip Patch Antenna Strain Sensor for Wireless Structural Health Monitoring",
        phd: "737/CHE/2015",
        number: "Filed",
        patentG: "",
        academic: "2015-16"
      },
      {
        id: 11,
        name: "Dr.Perumal Pillai E B Dr.Padmavathy T V",
        position: "ECE",
        Category:
          "Extension of Network Lifetime for Surveillance Wireless Sensor Networks Using Energy Efficient Routing Protocol",
        phd: "522/CHE/2012",
        number: "Filed",
        patentG: "",
        academic: "2015-16"
      },
      {
        id: 12,
        name:
          "Dr.N.Gangatharan Dr.C.Arun Dr.T.M.Inbamalar Mr.S.Muthumanickam S.Saravanan N.Apoorva D.Jayashree",
        position: "ECE",
        Category: "VIBRATO-LARYNX",
        phd: "2.01741E+11",
        number: "Filed",
        patentG: "",
        academic: "2017-18"
      },
      {
        id: 13,
        name:
          "Dr.N.Gangatharan Dr.Santhi.K.G MS.S.SeshaVidhya Mr.Manikandan.A Mr.Babu.M Mr.Abirami.S Dakshita Jain Thasbir S.K",
        position: "ECE",
        Category: "Animal Implementation using Intelligent Automated System",
        phd: "E-2/2873/2017/CHE",
        number: "Filed",
        patentG: "",
        academic: "2017-18"
      },
      {
        id: 14,
        name: "PADMAVATHY T V",
        position: "ECE",
        Category:
          "Extension of Network Lifetime for Surveillance Wireless Sensor Networks Using Energy Efficient Routing Protocol",
        phd: "669 /CHE/2015",
        number: "Filed",
        patentG: "",
        academic: "2012-13"
      },
      {
        id: 15,
        name: "Mr.Venkatesh Y B Mr.Revanth Kumar G Y Mr.Vignesh Babu M",
        position: "ECE",
        Category:
          "Automatic Irrigation System and Security Surveillance From Living Beings in The Agricultural Field Using Renewable Solar Power Based on WSN",
        phd: "669 /CHE/2015",
        number: "Filed",
        patentG: "",
        academic: "2014-15"
      },
      {
        id: 16,
        name: "Dr.Padmavathy T V",
        position: "ECE",
        Category:
          "Design and Development of smart sensor for damage detection in Bridges",
        phd: "7534/CH E/2016",
        number: "Filed",
        patentG: "",
        academic: "2015-16"
      },
      {
        id: 17,
        name: "Dr. N. Kalaiarasi Professor & Head",
        position: "EEE",
        Category:
          "Enhancement of safety measures in Metro rail using PLC and SCADA",
        phd: "201641018081 2016",
        number: "Filed",
        patentG: "",
        academic: "2016-17"
      },
      {
        id: 18,
        name: "Ms.S.Vaisnavi",
        position: "CSE",
        Category: "Query Specific Search Summarizing App",
        phd: "Date of Filing-12/12/2017, Application no-201741044541",
        number: "Filed",
        patentG: "",
        academic: "2017-18"
      },
      {
        id: 19,
        name: "Dr. Sankar Ram N",
        position: "CSE",
        Category: "Gaming as Service –Cloud",
        phd: "2614/CHE/201(filed)",
        number: "Filed",
        patentG: "",
        academic: "2014-15"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-md-9 col-sm-8">
          <div className="forum-wrapper section-header03">
            <h2>
              <span>PATENTS</span>
            </h2>
            <hr className="line" style={{ borderColor: "gray" }} />
            <div className="forum-content about-ds-content">
              <h5>LIST OF PATENTS</h5>
            </div>
            <br />
            <br />
            <table
              className="table table-responsive-sm table-bordered"
              style={{
                width: "80%",
                marginLeft: "-6%",
                marginTop: "16%",
                backgroundColor: "#DEEAF6"
              }}
            >
              <thead>
                <tr>
                  <th scope="col">SL.No</th>
                  <th scope="col">Name of the Inventors</th>
                  <th scope="col">Department</th>
                  <th scope="col">Title</th>
                  <th scope="col">Patent Number</th>
                  <th scope="col">Patent Filed</th>
                  <th scope="col">Patent Granted</th>
                  <th scope="col">Academic Year</th>
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
                    <td>{council.number}</td>
                    <td>{council.patentG}</td>
                    <td>{council.academic}</td>
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

export default Patent;
