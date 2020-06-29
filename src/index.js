import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// create reducer as in src/store/reducer.js
// import { createStore } from 'redux'; and import { Provider } from 'react-redux';
// wrap the root <App/> component with the Provider like this <Provider><App/></Provider> 
// create store like in 11th line and pass the reducer in it
// pass the created store in the provider like <Provider store={store}><App/></Provider> //store is expected by the provider
// now in the component you want to use the redux create 2 const mapStateToProps and mapDispatchToProps as in the Persons.js
// connect the mapStateToProps and mapDispatchToProps to the component in which you are using them in.
// for doing so import { connect } from 'react-redux and add it down to the export and pass mapStateToProps and mapDispatchToProps as the arguments
