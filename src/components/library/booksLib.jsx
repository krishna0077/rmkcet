import React, { Component } from "react";
class Books extends Component {
  state = {
    governCouncilMembers: [
      {
        id: 1,
        name: "COMPUTER SCIENCE AND ENGINEERING ",
        position: "1574",
        qualification: "7315"
      },
      {
        id: 2,
        name: "ELECTRONICS & COMMUNICATION ENGG.",
        position: "1320",
        qualification: "6486"
      },
      {
        id: 3,
        name: "ELECTRICAL & ELECTRONICS ENGG. ",
        position: "690",
        qualification: "2838"
      },
      {
        id: 4,
        name: "MECHANICAL ENGINEERING",
        position: "747",
        qualification: "4517"
      },
      {
        id: 5,
        name: "SCIENCE & HUMANITIES",
        position: "641",
        qualification: "2042"
      },
      {
        id: 6,
        name: "TRAINING AND PLACEMENT (Career Guidance)",
        position: "230",
        qualification: "674"
      },
      {
        id: 7,
        name: "TOTAL",
        position: "5202",
        qualification: "23872"
      }
    ]
  };
  render() {
    return (
      <div class="col-md-9 col-sm-8">
        <div class="forum-wrapper section-header03">
          <h2>
            LIBRARY <span>STOCK</span>
            <hr className="line" />
          </h2>
        </div>

        <table
          className="table table-responsive-sm table-bordered"
          style={{ width: "90%" }}
        >
          <thead>
            <tr>
              <th scope="col">SL.No</th>
              <th scope="col">BRANCH</th>
              <th scope="col">NUMBER OF TITLES</th>
              <th scope="col">NUMBER OF VOLs.</th>
            </tr>
          </thead>
          <tbody>
            {this.state.governCouncilMembers.map(council => (
              <tr key={council.id}>
                <th scope="row">{council.id}</th>
                <td>{council.name}</td>
                <td>{council.position}</td>
                <td>{council.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Books;
