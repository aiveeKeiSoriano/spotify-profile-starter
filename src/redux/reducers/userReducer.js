import { PROFILE_OBTAINED, TOPARTISTS_OBTAINED, TOPTRACKS_OBTAINED } from "../actions/action_types";



export default function userReducer(state = null, action) {
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