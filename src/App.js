import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Catalog from './components/Catalog.js';
import Product from './components/Product';
import Compare from './components/Compare';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
  const  selectedProduct = useSelector((state) => state.catalog.products);
  var len = selectedProduct.length
  
    

  return (
    <div className="confronto-app">
      <h1>Confronto</h1>
      <div className='navigation'>
        <Link to="/">Catalog</Link>
        <Link to="/compare" className={len>0? 'strong': null}>Compare ({len})</Link>
      </div>
      
      <div className='content'> 
        <Router>
          <Switch>
            <Route path="/" exact component={Catalog} />
            <Route path="/product/:id" component={Product} />
            <Route path='/compare' component={Compare} />
          </Switch>
        </Router>
       

      
      </div>
    </div>
  );
};

export default App;
