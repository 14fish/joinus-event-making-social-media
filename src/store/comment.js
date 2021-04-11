import { getCommentsAPI } from "../API";

const POST_COMMENT = "POST_COMMENT";
const GET_COMMENTS = "GET_COMMENT";
const SET_COMMENTS = " SET_COMMENTS";

const initialStore = {
  comments: [],
};

const setComments = (payload) => {
  return {
    type: SET_COMMENTS,
    payload,
  };
};

export function commentReducer(store = initialStore, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...store,
        comments: [...action.payload],
      };

    default:
      return store;
  }
}

export const postComments = (data) => async (dispatch) => {
  try {
    // const  response = await postCommentsAPI(data);
    // await getCommments(data.postId);
  } catch (error) {}
};

export const getCommments = (data) => async (dispatch) => {
  try {
    const response = await getCommentsAPI(data);
    const comments = await response.json();
    dispatch(setComments(comments));
  } catch (error) {
    console.log(error.message);
  }
};
