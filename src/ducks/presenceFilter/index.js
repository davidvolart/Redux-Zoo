import { SET_PRESENCE_FILTER } from "./actions/setPresenceFilter";

export default (state = 'all', action) => {
  switch (action.type) {
    case SET_PRESENCE_FILTER:
      return action.filter;
    default:
      return state;
  }
};
