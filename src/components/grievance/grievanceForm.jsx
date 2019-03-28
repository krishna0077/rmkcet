import React, { Component } from "react";
class GrievanceForm extends Component {
  state = {};
  render() {
    return (
      <div class="col-md-9 col-sm-8">
        <div class="forum-wrapper section-header03">
          <h2>
            {" "}
            <span>Grievance Redressal Form</span>
          </h2>
        </div>
        <hr className="line" />
        <iframe
          title="form"
          src="https://docs.google.com/a/rmkcet.ac.in/forms/d/1SCHw0yzebdv9qUjXAHjgAOKJt-n1UEy1jm9idXSLvbk/edit?usp=sharing"
          width="100%"
          height="600"
        >
          {" "}
        </iframe>
      </div>
    );
  }
}

export default GrievanceForm;
