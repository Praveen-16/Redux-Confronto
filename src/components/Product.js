
// Product.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productDetails } from '../store/actions/catalogActions';
import { getImage } from '../server';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const  selectedProduct = useSelector((state) => state.catalog.selected);
  console.log(selectedProduct)
  
  useEffect(() => {
      dispatch(productDetails(id));
    }, [dispatch, id]);
    
    if (!selectedProduct) {
        // Handle the case where the product details are not available yet
        return <p>Loading...</p>;
    }
    
    if(selectedProduct){
        
        const {  brand, model, rear_camera, front_camera, screen, storage, os, cost, image } = selectedProduct.products
        
       
      return (
        <div className="product-details">
          <img src={getImage(image)} alt={`${brand} ${model}`} />
          <h1> {model}</h1>

            <h3>by {brand} </h3>

            <ul className='details '>
            <li>Rear Camera : {rear_camera}</li>
            <li>Front Camera : {front_camera}</li>
            <li>Screen : {screen}</li>
            <li>Storage : {storage}</li>
            <li>Os : {os}</li>
            <li>Cost: ${cost}</li>
          </ul>
        </div>
      );
  
    }
  
   

 
};

export default Product;


























// import React from "react";

// const Product = () => {
//   return (
//     <div className="product-details">
//       <h1>Guava DumbPhone</h1>
//       <h3>by Guava</h3>
//       <img src="" alt="" />
//       <ul className="details">
//         <li>Rear Camera : NA</li>
//         <li>Front Camera : NA</li>
//         <li>Screen : NA</li>
//         <li>Storage : NA</li>
//         <li>Os : NA</li>
//         <li>Cost: $1</li>
//       </ul>
//     </div>
//   );
// };

// export default Product;
