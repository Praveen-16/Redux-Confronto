// src/store/reducers/index.js
import { combineReducers } from 'redux';
import catalogReducer from './reducers/catalogReducer';
import compareReducer from './reducers/compareReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

                           
// your root reducer

const rootReducer = combineReducers({
    catalog: catalogReducer,
    compare: compareReducer,
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
export default store;

// store.js
 // your root reducer



