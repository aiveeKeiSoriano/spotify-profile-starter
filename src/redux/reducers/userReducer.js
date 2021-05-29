import { PROFILE_OBTAINED, TOPARTISTS_OBTAINED, TOPTRACKS_OBTAINED } from "../actions/action_types";


let initialState = {
    profile: null,
    topArtists: null,
    topTracks: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE_OBTAINED:
            return { ...state, profile: action.payload }
        case TOPARTISTS_OBTAINED:
            return { ...state, topArtists: action.payload }
        case TOPTRACKS_OBTAINED:
            return { ...state, topTracks: action.payload }
        default:
            return state
    }
}