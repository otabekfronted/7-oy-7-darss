import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import themReducer from "./themReducer";
import cartReducer from "./cartReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducers = combineReducers({
    counter: counterReducer,
    theme: themReducer,
    cart: cartReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
