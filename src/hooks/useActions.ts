import { useDispatch } from "react-redux"; // allows us to dispatch an action into all our different reducers
import { bindActionCreators } from "redux"; 
import { actionCreators } from "../state";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch)
        // gives us an object with all the action creators that we have defined
        // then automatically bind those action creators to the dispatch function
        // so getting back soemthing like this { searchRepositories: dispatch(searchRepositories) }
}