const defaultState = {
    counter: 5,
};

const counterReducer = (state = defaultState, action) => {
    if (action.type == "ADD") {
        return { ...state, counter: state.counter + action.payload };
    } else if (action.type == "REMOVE") {
        return { ...state, counter: state.counter - action.payload };
    } else if (action.type == "FIVE") {
        return { ...state, counter: state.counter + action.payload };
    } else {
        return state;
    }
};

export default counterReducer;
