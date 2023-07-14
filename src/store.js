import { createStore } from "redux";
import counterReducer from "./reduxServices/reducers/counterReducer";


export const store = createStore(counterReducer)