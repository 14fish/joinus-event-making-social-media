import { getProfileAPI } from "../API";

const SET_DETAILS = "SET_DETAILS";

const initialState = {
  id: "",
  name: "",
  birthdate: "",
  city: "",
  email: "",
  image: "",
  createdAt: "",
  interests: [],
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export const setDetails = (payload) => {
  return {
    type: SET_DETAILS,
    payload,
  };
};

export const getDetails = () => async (dispatch) => {
  try {
    const response = await getProfileAPI();

    if (response.status > 199 && response.status < 400) {
      const json = await response.json();

      dispatch(setDetails(json));
    }
  } catch (e) {
    console.log(e.message, "Profile  get details failed");
  }
};
