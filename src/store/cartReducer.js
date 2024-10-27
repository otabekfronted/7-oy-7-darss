const defaultState = {
    cart: [],
};

const cartReducer = (state = defaultState, action) => {
    if (action.type === "ADD_CART") {
        let copied = [...state.cart];
        copied.push(action.payload);
        return { ...state, cart: copied };
    } else if (action.type === "REMOVE_CART") {
        let copied = [...state.cart];
        copied = copied.filter((value) => value.id !== action.payload);
        return { ...state, cart: copied };
    } else if (action.type === "UPDATE_CART") {
        let copied = [...state.cart];

        return {
            copied,
            cart: copied.map((value) =>
                value.id === action.payload.id ? action.payload : value
            ),
        };
    } else {
        return state;
    }
};

export default cartReducer;
