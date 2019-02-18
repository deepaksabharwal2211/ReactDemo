import { createStore, combineReducers, compose } from "redux";
import { reducer as formReducer } from 'redux-form';
import { postUserValueReducer } from './user/reducer';
import counterreducer from './Counter/reducer'
const rootReducers = combineReducers({
    form: formReducer,
    counter: counterreducer,
    postUserValueReducer: postUserValueReducer
});
const composeEnhancers = window.location.host === 'localhost:3000' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
const enhancer = composeEnhancers();

const store = createStore(rootReducers, enhancer);
export default store;