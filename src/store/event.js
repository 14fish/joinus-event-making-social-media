import {
  getEventsAPI,
  createEventAPI,
  getOneEventAPI,
  deleteEventAPI,
  getNearByAPI,
  updateEventAPI,
  getJoinedAPI,
  joinEventAPI,
} from "../API/";

const ADD_EVENT = "ADD_EVENT";
const SET_EVENT = "SET_EVENT";
const SET_SINGLE = "SET_SINGLE";
const SET_NEARBY = "SET_NEARBY";
const CLEAR_UPDATE = "CLEAR_UPDATE";
const SET_UPDATED = "SET_UPDATED";
const SET_JOINED = "SET_JOINED";
const JOIN_EVENT = "JOIN_EVENT";

const initialState = {
  events: [],
  single: {
    author: {
      name: "",
      image: "",
    },
    location: {
      latitude: "",
      longitude: "",
    },
    guests: [],
    joined: false,
  },
  nearBy: [],
  updated: {},
  joined: [],
};

export function eventReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_EVENT:
      return {
        ...state,
        events: [...payload],
      };
    case SET_SINGLE:
      return {
        ...state,
        single: payload,
      };
    case SET_NEARBY:
      return {
        ...state,
        nearBy: payload,
      };
    case CLEAR_UPDATE:
      return {
        ...state,
        updated: {},
      };
    case SET_UPDATED:
      return {
        ...state,
        updated: payload,
      };
    case SET_JOINED:
      return {
        ...state,
        joined: [...payload],
      };
    default:
      return state;
  }
}

export const joinEvent = (id) => async (dispatch) => {
  try {
    console.log(id);
    const response = await joinEventAPI(JSON.stringify({}), id);
    const json = await response.json();
    if (json.message) {
      console.log(json.message);
    }
  } catch (error) {}
};

// export const unJoinEvent = (id) =>async (dispatch)=>{
//     try {
//         const response = await joinEventAPI({},id);
//         const json = await response.json();
//         if(json.message){
//             console.log(message);
//         }
//     } catch (error) {

//     }
// }
export const setEvents = (payload) => {
  return {
    type: SET_EVENT,
    payload,
  };
};

export const addEvent = (payload) => {
  return {
    type: ADD_EVENT,
    payload,
  };
};

export const setSingleEvent = (payload) => {
  return {
    type: SET_SINGLE,
    payload,
  };
};
export const setNearBy = (payload) => {
  return {
    type: SET_NEARBY,
    payload,
  };
};

export const clearUpdated = () => {
  return {
    type: CLEAR_UPDATE,
  };
};
export const setUpdated = (payload) => {
  return {
    type: SET_UPDATED,
    payload,
  };
};

export const setJoined = (payload) => {
  return {
    type: SET_JOINED,
    payload,
  };
};

///////////////////Middlewares/////////////////////
///////////////////////////////////////////////////
export const getEvents = (data) => async (dispatch) => {
  try {
    const response = await getEventsAPI(data);
    const json = await response.json();

    if (!json) {
      throw new Error("Empty Json");
    }
    dispatch(setEvents(json));
  } catch (e) {
    console.log(e.message);
  }
};

export const createEvent = (data, history) => async (dispatch) => {
  try {
    const json = JSON.stringify(data);
    const response = await createEventAPI(json);
    history.push("/home");
  } catch (e) {
    console.log(e.message);
  }
};

export const getSingleEvent = (id) => async (dispatch) => {
  try {
    const response = await getOneEventAPI({}, id);

    const json = await response.json();
    await dispatch(setSingleEvent(json));
  } catch (e) {
    console.log(e);
  }
};
export const deleteEvent = (id) => async (dispatch) => {
  try {
    const response = await deleteEventAPI(JSON.stringify({}), id);
    const json = await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getNearBy = (location) => async (dispatch) => {
  try {
    const response = await getNearByAPI({ ...location });

    dispatch(setNearBy(await response.json()));
  } catch (error) {}
};

export const updateEvent = (data, history) => async (dispatch) => {
  try {
    const json = JSON.stringify(data);
    console.log(data);
    const response = await updateEventAPI(json, data.id);
    history.push("/event/" + data.id);
    dispatch(clearUpdated);
  } catch (error) {
    console.log(error.message);
  }
};

export const getJoinedEvents = () => async (dispatch) => {
  try {
    const response = await getJoinedAPI({});
    const json = await response.json();
    dispatch(setJoined(json));
  } catch (error) {
    console.log(error.message);
  }
};
