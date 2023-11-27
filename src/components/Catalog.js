// src/components/Catalog.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import ProductCard from './ProductCard';

const initCatalog = () => {
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

const Catalog = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.catalog.products);
   
    useEffect(() => {
      dispatch(initCatalog());
    }, [dispatch]);
  
    return (
      <div className='products' >
        {products.map((product) => (
          <ProductCard brand={product.brand} model={product.model} image={product.image} id={product.id}  />
        ))}
      </div>
    );
  };
  
  export default Catalog;