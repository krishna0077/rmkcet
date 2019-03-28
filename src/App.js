import React, { Component } from "react";
import Mainpage from "./components/mainpage";
import { Route, Redirect, Switch } from "react-router-dom";
import About from "./components/about";
import Features from "./components/features";
import Pricing from "./components/pricing";
import NotFound from "./components/notfound";
import VisionAndMission from "./components/visionAndMission";
import Rules from "./components/rules";
import VicePrincipal from "./components/vicePrincipal";
import Chairman from "./components/chairman";
import ViceChairman from "./components/viceChairman";
import Management from "./components/management";
import GoverningBody from "./components/governingBody";
import Principal from "./components/principal";
import Committe from "./components/committe";
import Hostel from "./components/rmkhostel";
import Canteen from "./components/canteen";
import HealthCare from "./components/healthcare";
import Atm from "./components/Atm";
import Gym from "./components/Gym";
import Busroutes from "./components/busroutes";
import Grievance from "./components/grievance/grievance";
import LibraryLink from "./components/library/libraryLink";
import CseDeparttLink from "./components/cse-department/cseDepartLink";
import Placements from "./components/placement/placementLink";
import Admission from "./components/admissionProcedure";
import Budgets from "./components/Budget";
import "./App.css";
import Courses from "./components/Course";
import Alumini from "./components/alumini";
import Scholarship from "./components/scholarships";
import ResearchLink from "./components/research/researchLinks";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/mainpage" component={Mainpage} />
          <Route path="/about" component={About} />
          <Route path="/visionAndMission" component={VisionAndMission} />
          <Route path="/rules" component={Rules} />
          <Route path="/chairman" component={Chairman} />
          <Route path="/viceChairman" component={ViceChairman} />
          <Route path="/management" component={Management} />
          <Route path="/principal" component={Principal} />
          <Route path="/library" component={LibraryLink} />
          <Route path="/cse-department" component={CseDeparttLink} />
          <Route path="/placement" component={Placements} />
          <Route path="/grievance" component={Grievance} />
          <Route path="/governingBody" component={GoverningBody} />
          <Route path="/committe" component={Committe} />
          <Route path="/canteen" component={Canteen} />
          <Route path="/rmkhostel" component={Hostel} />
          <Route path="/healthcare" component={HealthCare} />
          <Route path="/Atm" component={Atm} />
          <Route path="/Gym" component={Gym} />
          <Route path="/scholarship" component={Scholarship} />
          <Route path="/research" component={ResearchLink} />

          <Route path="/Course" component={Courses} />
          <Route path="/Budget" component={Budgets} />
          <Route path="/admissionProcedure" component={Admission} />
          <Route path="/busroutes" component={Busroutes} />
          <Route path="/features" component={Features} />
          <Route path="/vicePrincipal" component={VicePrincipal} />
          <Route path="/alumini" component={Alumini} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" exact to="/mainpage" />
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
