import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCompare } from '../store/actions/compareActions';
import { getImage } from '../server';

const Compare = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.compare.products);
  const  selectedProduct = useSelector((state) => state.catalog.products);
  console.log(selectedProduct)
  
  
  console.log(products)

  const handleRemoveFromCompare = (productId) => {
    dispatch(removeFromCompare(productId));
  };
  if (!products) {
    // Render loading state or return null
    return <div>Loading.nn..</div>; // or return null; or any other loading indication
  }
  return (
    <div className="comparison-grid">
      <div className="feature-labels">
        <div></div>
        <div>Brand</div>
        <div>Model</div>
        <div>Rear Camera</div>
        <div>Front Camera</div>
        <div>Screen</div>
        <div>Storage</div>
        <div>OS</div>
        <div>Cost</div>
      </div>
      {products.map((product) => (
        <div key={product.id} className="product-table">
          <div className="product-features">
            <div>
              <img src={getImage(product.image)} alt={product.model} />
            </div>
            <div>{product.brand}</div>
            <div>{product.model}</div>
            <div>{product.rear_camera}</div>
            <div>{product.front_camera}</div>
            <div>{product.screen}</div>
            <div>{product.storage}</div>
            <div>{product.os}</div>
            <div>${product.cost.toFixed(2)}</div>
            <div>
              <button onClick={() => handleRemoveFromCompare(product.id)}>REMOVE</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Compare;


















// import React from "react";

// const Compare = () => {
//   return (
//     <div className="comparison-grid">
//       <div className="feature-labels">
//         <div></div>
//         <div>Brand</div>
//         <div>Model</div>
//         <div>Rear Camera</div>
//         <div>Front Camera</div>
//         <div>Screen</div>
//         <div>Storage</div>
//         <div>OS</div>
//         <div>Cost</div>
//       </div>
//       <div className="product-table">
//         <div className="product-features">
//           <div>
//             <img src="" alt="" />
//           </div>
//           <div>Guava</div>
//           <div>DumbPhone</div>
//           <div>1MP</div>
//           <div>2MP</div>
//           <div>2inch Full HD</div>
//           <div>2MB</div>
//           <div>Windows CE</div>
//           <div>$1.20</div>
//           <div>
//             <button>REMOVE</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Compare;
