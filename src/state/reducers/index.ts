import { combineReducers } from "redux";
import respositoriesReducer from "./repositoriesReducer";

// our state in our redux store is going to have a key of repositories nad the value or that key is going to be whatever is returned from the repositoriesReducer
const reducers = combineReducers({
    repositories: respositoriesReducer
});

export default reducers

// this is a type definition that says the type of the root state is whatever is returned from the reducers function
// an awkward thing about redux is that we have to define the type of our state object
export type RootState = ReturnType<typeof reducers> 