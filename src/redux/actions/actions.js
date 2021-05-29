import axios from "axios"
import { PROFILE_OBTAINED, THROW_ERROR, TOKEN_OBTAINED, TOPARTISTS_OBTAINED, TOPTRACKS_OBTAINED } from "./action_types"

const TracksURL = 'https://api.spotify.com/v1/me/top/tracks'
const ArtistURL = 'https://api.spotify.com/v1/me/top/artists'
const ProfileURL = 'https://api.spotify.com/v1/me'
// const Client = 'YjZiOTZmODI3ZjU4NDA3OTk1OWVhZTJiZDEwNGMwNGY6ZWNmYjNjOWYyZjlkNDVhZTk4NjhiNzc1ZGFmYjk5NWQ='
const Client = 'ZTdiZWJjODEyMzRlNDczN2FkYTYwYmM2NjZlYjUwZDc6OWIwMDVkZjlmZGE4NDE3MWEwNmVjMjc2MmNmYTQ3YTI='
const tokenURL = 'https://accounts.spotify.com/api/token'
 
export let throwError = (e) => ({
    type: THROW_ERROR,
    payload: e
})

export let tokenObtained = (token, refresh) => ({
    type: TOKEN_OBTAINED,
    payload: { token, refresh }
})

export let profileObtained = (object) => ({
    type: PROFILE_OBTAINED,
    payload: object
})

export let topTracksObtained = (arr) => ({
    type: TOPTRACKS_OBTAINED,
    payload: arr
})

export let topArtistsObtained = (arr) => ({
    type: TOPARTISTS_OBTAINED,
    payload: arr
})

export let getToken = (code) => {
    return async (dispatch) => {
        try {
            let response = await axios.post(tokenURL, {
                headers: {
                    'Authorization': 'Basic ' + Client,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: 'grant_type=authorization_code&code=' + code + '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile'
            })
            dispatch(tokenObtained(response.access_token, response.refresh_token))
        }
        catch (e) {
            dispatch(throwError(e))
        }
    }
}

export let getProfile = () => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(ProfileURL, {
                headers: {
                    'Authorization': 'Bearer ' + getState().auth.token
                }
            })
            dispatch(profileObtained(response))
        }
        catch (e) {
            dispatch(throwError(e))
        }
    }
}

export let getTopTracks = () => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(TracksURL, {
                headers: {
                    'Authorization': 'Bearer ' + getState().auth.token
                }
            })
            dispatch(topTracksObtained(response.items))
        }
        catch (e) {
            dispatch(throwError(e))
        }
    }
}

export let getTopArtists = () => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(ArtistURL, {
                headers: {
                    'Authorization': 'Bearer ' + getState().auth.token
                }
            })
            dispatch(topArtistsObtained(response.items))
        }
        catch (e) {
            dispatch(throwError(e))
        }
    }
}