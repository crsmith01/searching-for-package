import { ActionType } from "../action-types"

interface SearchRespositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES
}

interface SearhRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR
    payload: string
}

export type Action = 
    | SearchRespositoriesAction 
    | SearhRepositoriesSuccessAction 
    | SearchRepositoriesErrorAction
