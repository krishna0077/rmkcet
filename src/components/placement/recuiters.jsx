import React, { Component } from 'react';
import "../styles/common.css";

class Recuiters extends Component {
  state = {
    companies: [
      {
        id: 1,
        name: "Virtusa Polarise"
      },
      {
        id: 2,
        name: "Zoho"
      },
      {
        id: 3,
        name: "Infosys PVT Ltd.,"
      },
      {
        id: 4,
        name: "TCS"
      },
      {
        id: 5,
        name: "Wipro"
      },
      {
        id: 6,
        name: "Cognizant"
      },
    ]}
  render() { 
    return ( <React.Fragment>
      <div class="row"  style={{ marginLeft:"10px" }}>
        <div class="forum-wrapper section-header03">
          <h2>Regular <span>Recruiters</span></h2>
           <br/>
           <br/>
           <table
             className="table table-responsive-sm table-bordered"
              style={{ width: "63%", marginLeft: "7%" }} >
                    <thead>
                      <tr>
                        <th scope="col">SL.No</th>
                        <th scope="col">Company Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.companies.map(council => (
                        <tr key={council.id}>
                          <th scope="row">{council.id}</th>
                          <td>{council.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                 
        </div>
      </div>
  </React.Fragment> );
  }
}
 




export default Recuiters;