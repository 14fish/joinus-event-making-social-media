// import {getProductsAPI, getSingleProductAPI} from '../API';

// // Actions types

// const GET_PRODUCTS = 'GET_PRODUCTS'; 
// const SET_PRODUCTS = 'SET_PRODUCTS'; 
// const ADD_PRODUCTS = 'ADD_PRODUCTS'; 
// const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS';
// const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';


// // Reducer

// const defState = {
//     page: 0,
//     per_page: 0,
//     total: 0,
//     total_pages: 0,
//     data: [],
//     single: {}
// };

// export function productsReducer(store = defState, {type, payload}) {
    
//     switch(type) {
//         case SET_PRODUCTS:
//             return {
//                 ...store,
//                 ...payload
//             };
//         case ADD_PRODUCTS:
//             return {
//                 ...payload,
//                 data: [...store.data, ...payload.data]
//             };
//         case CLEAR_PRODUCTS:
//             return {
//                 ...store, 
//                 page: 0,
//                 per_page: 0,
//                 total: 0,
//                 total_pages: 0,
//                 data: []
//             };
//         case SET_SINGLE_PRODUCT:
//             return {
//                 ...store,
//                 single: payload
//             }
//         default:
//             return store;
//     }
// };


// // Action creators

// export const setProducts = payload => ({
//     type: SET_PRODUCTS,
//     payload
// });
// export const addProducts = payload => ({
//     type: ADD_PRODUCTS,
//     payload
// });
// export const clearProducts = () => ({
//     type: CLEAR_PRODUCTS
// });

// export const setSingleProduct = payload => ({
//     type: SET_SINGLE_PRODUCT,
//     payload
// });

// // Middlewares

// export const getProducts = () => async (dispatch) => {
//     try {
//         const res = await getProductsAPI({});
//         const json = await res.json();

//         if(!json.data) throw 'Sorry, something goes wrong...';

//         dispatch(setProducts(json));
//     } catch(e) {
//         alert(e.message || e);
//     }
// }

// export const getMoreProducts = () => async (dispatch, getState) => {
//     try {
//         const res = await getProductsAPI({
//             page: getState().products.page + 1
//         });
//         // const json = await res.json();

//         if(!json.data) throw 'Sorry, something goes wrong...';

//         dispatch(addProducts(json));
//     } catch(e) {
//         alert(e.message || e);
//     }
// }

// export const getSingleProduct = payload => async (dispatch, getState) => {
//     try {
//         console.log(payload);
//         const res = await getSingleProductAPI({}, payload);
//         const json = await res.json();

//         if(!json.data) throw 'Sorry, something goes wrong...';

//         dispatch(setSingleProduct(json.data));
//     } catch(e) {
//         alert(e.message || e);
//     }
// }
