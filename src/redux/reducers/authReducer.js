import { THROW_ERROR, TOKEN_OBTAINED } from "../actions/action_types";

const initialState = {
    token: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case THROW_ERROR:
            return {...state, error: action.payload}
        case TOKEN_OBTAINED:
            return { ...state, error: null, token: action.payload.token, refresh: action.payload.refresh }
        default:
            return state
    }
}