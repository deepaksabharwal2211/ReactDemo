import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import counterreducer from './Counter/reducer'
const rootReducers = combineReducers({
    form: formReducer,
    counter:counterreducer
});

const store = createStore(rootReducers);

export default store;