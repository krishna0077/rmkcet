import React, { Component } from 'react';
import "../styles/common.css";

class DreamCompanies extends Component {
  state = {
    companies: [
      {
        id: 1,
        name: "AMAZON DEVELOPMENT CENTRE INDIA PVT. LTD.",
        salary:"11 LAKHS"
      },
      {
        id: 2,
        name: "ZOHO CORPORATION PVT LTD",
        salary:"6.60 LAKHS"
      },
      {
        id: 3,
        name: "SIRIUS COMPUTER SOLUTIONS INDIA PVT. LTD.",
        salary:"6.00 LAKHS"
      },
      {
        id: 4,
        name: "ZILKER TECHNOLOGY INDIA PVT. LTD.",
        salary:"6.00 LAKHS"
      },
      {
        id: 5,
        name: "SAINT-GOBAIN INDIA PVT. LTD.",
        salary:"6.00 LAKHS"
      },
      {
        id: 6,
        name: "SOLITON TECHNOLOGIES PVT. LTD.",
        salary:"5.40 LAKHS"
      },
      {
        id: 7,
        name: "KAAR TECHNOLOGIES INDIA PVT. LTD.",
        salary:"5.00 LAKHS"
      },
      {
        id: 8,
        name: "ZOOM Rx HEALTH CARE TECHNOLOGY SOLUTIONS PVT. LTD.",
        salary:"5.00 LAKHS"
      },
      {
        id: 9,
        name: "E-CON SYSTEMS INDIA PVT. LTD.",
        salary:"4.20 LAKHS"
      }
    ]}
  render() { 
    return ( <React.Fragment>
      <div class="row"  style={{ marginLeft:"10px" }}>
        <div class="forum-wrapper section-header03">
          <h3>PRODUCT COMPANIES OFFERING  <span>HIGHEST SALARY</span></h3>
           <br/>
           <br/>
           <table
             className="table table-responsive-sm table-bordered"
              style={{ width: "63%", marginLeft: "7%" }} >
                    <thead>
                      <tr>
                        <th scope="col">SL.No</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Salary Per Annum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.companies.map(council => (
                        <tr key={council.id}>
                          <th scope="row">{council.id}</th>
                          <td>{council.name}</td>
                          <td>{council.salary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 
        </div>
      </div>
  </React.Fragment> );
  }
}
 
export default DreamCompanies;