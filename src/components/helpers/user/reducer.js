import { ACTION_TYPES } from './'
const initialState = {
    userList: []
};

const postUserValueReducer = (state = initialState, action) => {
    let newState = { ...state }
    if (action.type == 'GET_DATA') {
        newState.userList = action.data
    }
    return newState
}

export {
    postUserValueReducer
};
