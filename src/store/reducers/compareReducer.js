// src/store/reducers/compareReducer.js
const initialState = {
    products: [],
  };
  
  const compareReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_COMPARE':
       
        return {
          ...state,
          products: state.products.some((product) => product.products.id === action.products.products.id)
            ? state.products
            : [...state.products, action.products]
        };
      case 'REMOVE_FROM_COMPARE':
        return {
          ...state,
          products: state.products.filter((product) => product.products.id !== action.products.productId),
        };
      default:
        return state;
    }
  };
  
  export default compareReducer;
  









// const initialState = {
//     products: [],
//   };
//   console.log(initialState+" data");
  
//   const compareReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_COMPARE':
//         return {
//           ...state,
//           products: state.products.some((product) => product.id === action.product.id)
//             ? state.products
//             : [...state.products, action.product],
//         };
//       case 'REMOVE_FROM_COMPARE':
//         return {
//           ...state,
//           products: state.products.filter((product) => product.id !== action.productId),
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default compareReducer;
  