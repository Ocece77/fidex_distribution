import { legacy_createStore as createStore, combineReducers } from 'redux';
import languageReducer from '../redux/langageReducer'; 

const rootReducer = combineReducers({
  language: languageReducer,  
});

const store = createStore(rootReducer);

export default store;
