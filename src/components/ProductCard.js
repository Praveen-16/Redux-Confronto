// import React from "react";

// const ProductCard = ({  id, brand, model, image }) => {
//   return (
//     <div className="product-card">
//       <img src={image} alt="not" />
//       <p>{brand}</p>
//       <h3>{model}</h3>
//       <button>Add to Compare</button>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCompare } from '../store/actions/compareActions';
import { getImage } from '../server';

const ProductCard = ({ id, brand, model, image }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCompare = () => {

    dispatch(addToCompare(id));
   
    
  };

  const handleImageClick = () => {
    history.push(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <img
        src={getImage(image)} // Assuming getImage is a function that processes the image URL
        alt={`${brand} ${model}`}
        onClick={handleImageClick}
      />
     
        <p>{brand}</p>
        <h3>{model}</h3>
       
          <button onClick={handleAddToCompare}>Add to Compare</button>
       
    </div>
  );
};

export default ProductCard;
