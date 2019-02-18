const intitialState = {
    age: 21,
    history: []
}

const counterreducer = (state = intitialState, action) => {
    const newState = { ...state }
    // if(action.type === "AGE_UP"){
    //     //newState.age++;

    // }
    // if(action.type ==="AGE_DOWN"){
    //     newState.age--;

    // }

    switch (action.type) {
        case "AGE_UP":
            return {
                age: newState.age + action.value,
                history: newState.history.concat({ id: Math.random(), age: newState.age + action.value })
            }

            break;

        case "AGE_DOWN":
            return {
                age: newState.age - action.value,
                history: newState.history.concat({ id: Math.random(), age: newState.age - action.value })
            }

            break;
        case "DEL_ENTRY":
            return {
                ...state,
                history: newState.history.filter((el) => el.id !== action.id)
            }
            break;
    }
    return newState
}

export default counterreducer;