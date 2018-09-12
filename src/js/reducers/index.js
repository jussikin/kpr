import { SUBMIT_MOVE,ERROR,MOVE_SUCCESS } from "../constants/action-types";
const initialState = {
  wins: 0,
  loses: 0,
  gameStateMessage : "Ready Player One",
  submitInProcess : false,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_MOVE:
      return { ...state, submitInProcess:true,gameStateMessage:"Submitting score"};
    case ERROR:
      return { ...state, submitInProcess:false,gameStateMessage:"ERROR Encountered"};
    case MOVE_SUCCESS:
      return { ...state,
        submitInProcess:false,
        gameStateMessage:action.payload.message,
        wins:state.wins+action.payload.wins,
        loses:state.loses+action.payload.loses}
    default:
      return state;
  }
};
export default rootReducer;
