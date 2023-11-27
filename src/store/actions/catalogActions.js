
export const initCatalog = () => {
    return async (dispatch) => {
      try {
        const response = await fetch("/api/products");
        const products = await response.json();
        
        dispatch({
          type: 'INITIALIZE_CATALOG',
          products,
        });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  };
  
  

  export const productDetails = (productId) => {
    return async (dispatch) => {
      try {
          const response = await fetch(`/api/product/${productId}`); // Assuming you have a utility function fetchProducts() to fetch products from the API
          const product = await response.json(); // Assuming the response is in JSON format
          console.log(product+" catalog");
        dispatch({
            type: 'PRODUCT_DETAILS',
            selected: product,
        });
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  };
  