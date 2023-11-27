export const addToCompare = (productId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`/api/product/${productId}`);
        const product = await response.json();
        console.log(product + " Compare");
  
        dispatch({
          type: 'ADD_TO_COMPARE',
          products: product, // Corrected key name to match the reducer
        });
      } catch (error) {
        console.error('Error fetching product details for comparison:', error);
      }
    };
  };
  
  export const removeFromCompare = (productId) => {
    return (dispatch) => {
      // Dispatch the REMOVE_FROM_COMPARE action with the productId
      dispatch({
        type: 'REMOVE_FROM_COMPARE',
        productId,
      });
    };
  };
  


// src/store/actions/compareAction.js
// export const addToCompare = (product) => ({
//     type: 'ADD_TO_COMPARE',
//     product,
//   });
  
//   export const removeFromCompare = (productId) => ({
//     type: 'REMOVE_FROM_COMPARE',
//     productId,
//   });
  
//   export const fetchAndAddToCompare = (productId) => {
//     return async (dispatch) => {
//       try {
//         // Assuming you have a utility function fetchProductDetailsById() to fetch details by ID
//         const product = await fetch(`/api/product/${productId}`).json();
//         console.log(product);
     
//         dispatch(addToCompare(product));
//       } catch (error) {
//         console.error('Error fetching product details for comparison:', error);
//       }
//     };
//   };
  


























  
//   export const addToCompare = (productId) => {
//     return async (dispatch) => {
//       try {
//         const response = await fetch(`/api/product/${productId}`);
//         const product = await response.json();
//         console.log(product);
        
//         dispatch({
//             type: 'ADD_TO_COMPARE',
//             products:product,
//         });
//       } catch (error) {
//         console.error('Error fetching product details for comparison:', error);
//       }
//     };
//   };
  
//   export const removeFromCompare = (productId) => {
//     return (dispatch) => {
//       // Dispatch the REMOVE_FROM_COMPARE action with the productId
//       dispatch({
//         type: 'REMOVE_FROM_COMPARE',
//         productId,
//       });
//     };
//   };
  w