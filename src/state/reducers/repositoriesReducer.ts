import { Action } from '../actions'
import { ActionType } from '../action-types'

interface RespositoriesState {
    loading: boolean
    error: string | null
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RespositoriesState = initialState, 
    action: Action
): RespositoriesState => {
    // code inside reducer is almost always a switch statement
    // acts as type guard
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES: // action we see as soon as user clicks search button
            return { loading: true, error: null, data: []}
        case ActionType.SEARCH_REPOSITORIES_SUCCESS: // action we see when we get a response back from API
            // 100% sure that 'action' satisfies the SearchRespositoriesSuccessAction interface
            return { loading: false, error: null, data: action.payload}
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: []}
        default:
            return state
    }

}

export default reducer;