const domain = 'http://localhost:3004/';

const domainMain='https://event-app-final.herokuapp.com/api/'

function isEmpty(obj) { 
    for (var x in obj) {
        return false; 
        }
    return true;
}

function fetchApi(method, api, endpoint) {
    return (data , value = '') => {
        let getParams = '';
        let options = {};
        if(localStorage.getItem("token")){
            options.headers={};
            options.headers.Authorization=localStorage.getItem("token");
            options.headers["Content-Type"]="application/json";
            options.headers.Accept= 'application/json';
        }
        console.log(options);
       
        if(method !== 'GET') {
            
             options.body=data;

            options.method=method;
           
            // options={
            //     body : data,
            //     method,
            //     headers:{
            //         'Content-Type':'application/json',
            //         // 'charset':"UTF-8"
            //     }
            // }
  
            return  fetch(`${api}${endpoint}${value}${getParams}`, options);
        }
        console.log(data);
        if(!isEmpty(data)){
            getParams += '?';
            for(let key in data) {
                getParams += `${key}=${data[key]}&`;
            }
        }
        
        return fetch(`${api}${endpoint}${value}${getParams}`, options)
    }};


// export const getProductsAPI =  fetchApi('GET',domain, 'users/');
// export const getSingleProductAPI =  fetchApi('GET',domain, 'users/');

////////////////////// EVENT //////////////////////
/////////////////////////////////////////////////
export const getEventsAPI= fetchApi('GET',domainMain,"event/");
export const getOneEventAPI= fetchApi('GET',domainMain,"event/");
export const createEventAPI= fetchApi('POST',domainMain,"event/");
export const deleteEventAPI = fetchApi('DELETE',domainMain,"events/");
export const getNearByAPI = fetchApi('GET',domainMain,"nearBy/");
export const updateEventAPI= fetchApi('PUT',domainMain,"event/");
export const getJoinedAPI = fetchApi("GET",domainMain,"joined/");
export const joinEventAPI = fetchApi("POST",domainMain,"event/"); 


////////////////////CATEGORY///////////////////////
///////////////////////////////////////////////////
export const getCategoriesAPI = fetchApi("GET",domain,"categories/");



/////////////////ACTIVITIES//////////////////////////
/////////////////////////////////////////////////////
export const getRecentAPI= fetchApi("GET",domain,"recent/");



//////////////////PROFILE////////////////////////////
/////////////////////////////////////////////////////
export const getProfileAPI=fetchApi("GET",domainMain,"profile/");




//////////////////COMMENT////////////////////////////
/////////////////////////////////////////////////////
export const getCommentsAPI = fetchApi("GET",domain,"comments/");
export const postCommentsAPI = fetchApi("POST",domain,"comments/")


