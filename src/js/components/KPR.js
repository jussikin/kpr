import React from "react";
import { connect } from "react-redux";
import {submit,login,submitMaterial} from "../actions"
import {ROCK,PAPER,SCHISSORS} from "../constants/moves"

const mapStateToProps = state => {
  return { wins: state.wins, loses:state.loses,message:state.gameStateMessage};
  };

  const mapDispatchToProps = dispatch => {
    return {
      submit_rock : () => dispatch(submitMaterial(ROCK)),
      submit_paper: () => dispatch(submitMaterial(PAPER)),
      submit_schissor: () => dispatch(submitMaterial(SCHISSORS))
    };
  };

const KPRGame = ({wins,loses,submit_rock,submit_paper,submit_schissor,message}) => (
  <div>
    <h1>Yksinkertainen Kivi-Paperi-Sakset</h1>
    <p>Voitot: {wins} Häviöt: {loses}</p>
    <button onClick={submit_rock}>Kivi</button>
    <button onClick={submit_paper}>Paperi</button>
    <button onClick={submit_schissor}>Sakset</button>
    <br/>
    <br/>
    {message}
  </div>
);

const KPR = connect(mapStateToProps,mapDispatchToProps)(KPRGame);
export default KPR;
