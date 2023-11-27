const initialState = {
    products: [],
    selected: null,
  };
  
  const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INITIALIZE_CATALOG':
        return {
          ...state,
          products: action.products,
          selected: null,
        };
      case 'PRODUCT_DETAILS':
        return {
          ...state,
          selected: action.selected,
        };
      default:
        return state;
    }
  };
  
  export default catalogReducer;
  