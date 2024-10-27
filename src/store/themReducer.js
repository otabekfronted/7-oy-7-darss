const defaultState = {
    theme: "light",
};

const themReducer = (state = defaultState, action) => {
    if (action.type == "LIGHT") {
        return { ...state, theme: "light" };
    } else if (action.type == "DARK") {
        return { ...state, theme: "dark" };
    } else {
        return state;
    }
};

export default themReducer;
