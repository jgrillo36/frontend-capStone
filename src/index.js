import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   {},
//   composeEnhancers(applyMiddleware(reduxThunk))
// );
//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);