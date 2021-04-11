import { getRecentAPI } from "../API";

const SET_ACTIVITIES = "SET_ACTIVITIES";

const initialState = {
  activities: [],
};

export function activityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVITIES:
      return {
        ...state,
        activities: [...action.payload.slice(0, 6)],
      };

    default:
      return state;
  }
}

const setActivities = (payload) => {
  return {
    type: SET_ACTIVITIES,
    payload,
  };
};
export const getActivities = () => async (dispatch) => {
  const response = await getRecentAPI();

  if (response.status >= 200 && response.status < 400) {
    const json = await response.json();

    dispatch(setActivities(json));
  } else {
    console.log("Recent Activity responded with 400+ status code");
  }
};
