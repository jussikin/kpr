import { SUBMIT_MOVE,ERROR,MOVE_SUCCESS } from "../constants/action-types";
import {REVERSE,OUTCOMES} from "../constants/moves";
export const submit = material => ({ type: SUBMIT_MOVE, payload:material});
export const error = error => ({type: ERROR, payload:error});

export function succesfullMove(wins,loses,message){
    return {type:MOVE_SUCCESS,payload:{message:message,wins:wins,loses:loses}};
}

function giveWinsLoses(result){
  let wins=0;
  let loses=0;
  if(result>0)
    wins++;
  if(result<0)
    loses++;
  return {
    wins:wins,
    loses:loses,
  }
}

function giveResultAsText(result){
  var teksti = "Vastustaja valitsi:"+REVERSE[result.opponentMove];
  teksti = teksti + " Sinä valitsit:"+REVERSE[result.playerMove];
  teksti = teksti +" "+ OUTCOMES[result.result];
  return teksti;
}

export function submitMaterial(material) {
    return (dispatch) => {
        dispatch(submit(material));
        fetch("tekoaly",{
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({move:material})
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((json) => {
              const tally = giveWinsLoses(json.result);
              const resultText = giveResultAsText(json);
              dispatch(succesfullMove(tally.wins,tally.loses,resultText));
            })
            .catch(() => dispatch(error("Communication error")));
    };
}
