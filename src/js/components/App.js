import React from "react";
import KPR from "./KPR"
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { loggedIn: state.loginstate };
};

const Appis = ({loggedIn}) => (
  <div>
    <KPR/>
  </div>
);
const App = connect(mapStateToProps)(Appis);
export default App;
