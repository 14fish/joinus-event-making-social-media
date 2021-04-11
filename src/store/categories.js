import { getCategoriesAPI } from "../API";

const SET_CATEGORIES = "SET_CATEGORIES";

const initialState = {
  categories: [],
};
/////Reducer
export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}

///Async Actions
export const getCategories = () => async (dispatch) => {
  try {
    const response = await getCategoriesAPI();
    dispatch(setCategories(await response.json()));
  } catch (e) {
    console.log(e.message);
  }
};

/// Action Creator
export const setCategories = (payload) => {
  return {
    type: SET_CATEGORIES,
    payload,
  };
};
