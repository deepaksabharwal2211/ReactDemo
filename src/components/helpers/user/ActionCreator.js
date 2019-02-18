import {ACTION_TYPES} from './'

const Addnewuser = (value) => {
    return {
      type: ACTION_TYPES.ADD_USER,
      value: value
    }
  }

  export {
    Addnewuser
  };