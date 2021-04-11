import NProgress from "nprogress"

const LOGIN="LOGIN";
const AUTH_SUCCESS="AUTH_SUCCESS";
const AUTH_FAILED="AUTH_FAILED";
const LOG_OUT="LOG_OUT";



function initState () {
  return { 
      token: localStorage.token?localStorage.token:"", 
      user:localStorage.user?localStorage.user:{},
      isAuthenticated:localStorage.isAuthenticated?localStorage.isAuthenticated:false,
      fail:false
  }
}

const initialState={
    isAuthenticated:false,
    fail:false,
    user:{},
    message:"",
}

const loginUser = (payload)=>{
    return {
        type:LOGIN,
        payload
    }
}
export const logOutUser=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    return{
        type:LOG_OUT
    }
}


const authSuccess =()=>{
    return {
        type:AUTH_SUCCESS
    }
}

const authFailed =(payload)=>{
    return {
        type:AUTH_FAILED,
        payload
    }
}

/////Reducer
export function authReducer(state=initState(),action){
    switch (action.type) {

        case LOGIN:
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload.user,
                token:action.payload.token
            }
        case LOG_OUT:
            
            return {
                    ...state,
                     user: {} ,
                     isAuthenticated:false,
                     fail:false,
                     message:"",
                     token:"",
                    }
        case AUTH_SUCCESS:
            return{
                ...state,
                fail:false,
                message:"",
                isAuthenticated:true,
            }
        case AUTH_FAILED:
            return {
                ...state,
                fail:true,
                message:action.payload
            }    
        default:
            return state;
            
    }

}

export const userRegisterFetch = (user,history) => {
    return dispatch => {
      NProgress.start();

      return fetch("https://event-app-final.herokuapp.com/api/register/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          
        },
        body: JSON.stringify({...user}),
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            dispatch(authFailed(data.message));
            NProgress.done();
          } else {
            
            // localStorage.setItem("token", data.token);
            // dispatch(authSuccess());
            // dispatch(loginUser(data.user))
            NProgress.done();
            history.push("/login");
          }
        })
    }
  }


export const userLoginFetch = (user,history) => {
    return dispatch => {
      NProgress.start();
      return fetch("https://event-app-final.herokuapp.com/api/login/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({...user}),
      })
        .then(resp => resp.json())
        .then(data => {
          
          if (data.error) {
              dispatch(authFailed(data.message));     
              NProgress.done();
          } else {
            
            dispatch(authSuccess());
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.person));
            localStorage.setItem("isAuthenticated",true);
            
            dispatch(loginUser({user:data.person,token:data.token}))
            NProgress.done();
            history.push("/home");
          }
        })
    }
  }


  export const getProfileFetch = () => {
    return dispatch => {
      const token = localStorage.token;
      if (token) {
        return fetch("http://178.238.229.100:9002/profile", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              dispatch(authFailed(data.message));
              localStorage.removeItem("token")
            } else {
                dispatch(authSuccess());
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))
            }
          })
      }
    }
  }

