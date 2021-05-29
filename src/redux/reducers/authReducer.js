import { TOKEN_OBTAINED } from "../actions/action_types";

const initialState = {
    token: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case TOKEN_OBTAINED:
            return { ...state, token: action.payload }
        default:
            return state
    }
}