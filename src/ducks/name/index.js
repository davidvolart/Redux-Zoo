import { SET_NAME } from "./actions/setName";

function reduceName(state = "Hoboken", action) {
  switch (action.type) {
    case SET_NAME:
      return action.name; 
    default:
      return state;
  }
}

export default reduceName;
