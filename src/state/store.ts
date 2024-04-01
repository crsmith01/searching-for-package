import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// the second argument is the initial state of the redux store
// createStore strikethrough - not really deprecated
export const store = createStore(reducers, {}, applyMiddleware(thunk));