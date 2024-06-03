import { createStore } from "redux";
import spaceReducer from "./reducer";

const store = createStore(spaceReducer);

export default store;
