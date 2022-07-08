import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from 'redux-thunk';
import reducer from "./reducers/index";
//import logger from 'redux-logger'





let store = createStore(
    reducer,
    composeWithDevTools(
      
        applyMiddleware( thunk)
        )
 //  applyMiddleware(logger) ),

  
    );

export default store;