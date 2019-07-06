export const SET_PRESENCE_FILTER = "SET_PRESENCE_FILTER";
export function setPresenceFilter(filter) {
  return {
    type: SET_PRESENCE_FILTER,
    filter: filter
  };
}
