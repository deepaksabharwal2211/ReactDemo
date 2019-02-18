import {ACTION_TYPES} from './'
const initialState = {

};

const postUserValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_USER:
           //localStorage.setItem('postUserValue', action.value);
            return {
                ...state,
                'postUserValue': action.value
            }
        default:
            return state;
    }
}

export {
    postUserValueReducer
};
