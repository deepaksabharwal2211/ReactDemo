import * as ACTION_TYPES from './Action_Types';


export const AgeclickHandler = () => {
    return {
        type: ACTION_TYPES.AGE_UP,
        value: 2
    }
}

export const AgeclickHandlerDec = () => {
    return {
        type: ACTION_TYPES.AGE_DOWN,
        value: 2
    }
}