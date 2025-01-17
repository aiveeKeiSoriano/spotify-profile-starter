import axios from "axios";
import {
  PROFILE_OBTAINED,
  THROW_ERROR,
  TOKEN_OBTAINED,
  TOPARTISTS_OBTAINED,
  TOPTRACKS_OBTAINED,
} from "./action_types";

const TracksURL = "https://api.spotify.com/v1/me/top/tracks?time_range=";
const ArtistURL = "https://api.spotify.com/v1/me/top/artists?time_range=";
const ProfileURL = "https://api.spotify.com/v1/me";
const tokenURL = "https://accounts.spotify.com/api/token";

// aivee client
// const Client = 'YjZiOTZmODI3ZjU4NDA3OTk1OWVhZTJiZDEwNGMwNGY6ZWNmYjNjOWYyZjlkNDVhZTk4NjhiNzc1ZGFmYjk5NWQ='

//nithya client
// const Client =
//   "ZTdiZWJjODEyMzRlNDczN2FkYTYwYmM2NjZlYjUwZDc6OWIwMDVkZjlmZGE4NDE3MWEwNmVjMjc2MmNmYTQ3YTI=";

//old app
const Client = "Yjk1N2JmOWQzNDMwNDZjMWE0MTVhMDVhNTQ2Mzk2YWM6YjRjYTU5MDA5Y2Q2NGNhYTlhMTYzNTk2YmE2MGRhZTY="

//localhost redirect for local testing
// const redirect_uri = "http://localhost:3000/profile";

//netlify redirect after deploying
const redirect_uri = 'https://quizzical-poitras-057011.netlify.app/profile'

export let throwError = (e) => ({
  type: THROW_ERROR,
  payload: e,
});

export let tokenObtained = (token, refresh) => ({
  type: TOKEN_OBTAINED,
  payload: { token, refresh },
});

export let profileObtained = (object) => ({
  type: PROFILE_OBTAINED,
  payload: object,
});

export let topTracksObtained = (list, term) => ({
  type: TOPTRACKS_OBTAINED,
  payload: { list, term }
});

export let topArtistsObtained = (list, term) => ({
  type: TOPARTISTS_OBTAINED,
  payload: { list, term }
});


// If there are no stored token in local storage, this is called to get token from the code in the url
export let getToken = (code) => {
  return async (dispatch) => {
    const body = new URLSearchParams()
    body.append("grant_type", "authorization_code")
    body.append("code", code)
    body.append("redirect_uri", redirect_uri)
    try {
      let response = await axios.post(tokenURL, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + Client,
        },
      });
      // It gives token and refresh token, we store both in state and localstorage
      // This response also shows the scopes we got but we're not storing it
      dispatch(tokenObtained(response.data.access_token, response.data.refresh_token));
      localStorage.setItem("Token", response.data.access_token);
      localStorage.setItem("Refresh", response.data.refresh_token);
        
    } catch (e) {
      dispatch(throwError(e));
    }
  };
};

// Getting the initial info to show in the profile page
export let getInfo = () => {
  return async (dispatch, getState) => {
    try {
      //This gives your name, picture, and number of followers
      let profile = await axios.get(ProfileURL, {
        headers: { Authorization: "Bearer " + getState().auth.token },
      });
      //This gives the number of your followed artists
      let following = await axios.get(ProfileURL + "/following?type=artist", {
        headers: { Authorization: "Bearer " + getState().auth.token },
      });
      //This gives the number of playlist you have
      let playlists = await axios.get(ProfileURL + "/playlists", {
        headers: { Authorization: "Bearer " + getState().auth.token },
      });
        
        dispatch(profileObtained({ ...profile.data, following: following.data.artists.total, playlists: playlists.data.total, }));
        
    } catch (e) {
      // Error 401 is given when the token expires. another POST request is made using refresh token to get some new fresh access token
      if (e.request.status === 401) {
        try {
          const body = "grant_type=refresh_token&refresh_token=" + getState().auth.refresh;
          let refresh = await axios.post(tokenURL, body, {
            headers: { Authorization: "Basic " + Client },
          });
          //This request only returns a new access token, and not a new refresh token
          dispatch(tokenObtained(refresh.data.access_token, getState().auth.refresh));
        } catch (err) {
          dispatch(throwError(err));
        }
      }
      else if (e.request.status === 400) {
        dispatch(logOut())
      }
      else dispatch(throwError(e));
    }
  };
};

// Request to get top tracks ------ not applied/tested yet
export let getTopTracks = (term) => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.get(TracksURL + term, {
        headers: { Authorization: "Bearer " + getState().auth.token },
      });
      dispatch(topTracksObtained(response.data.items, term));
    }
    catch (e) {
      dispatch(throwError(e));
    }
  };
};

// Request to get top artists, term parameter stands for the time range (long_term, medium_term, short_term)
export let getTopArtists = (term) => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.get(ArtistURL + term, {
        headers: { Authorization: "Bearer " + getState().auth.token },
      });
        console.log("ARTISTS", response);
      // response.data.items is an array of the top 20 artists
      // we're saving the term in the state too just so the buttons on top of the topartist page knows which of them is active
      dispatch(topArtistsObtained(response.data.items, term));
    }
    catch (e) {
      dispatch(throwError(e));
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    dispatch(tokenObtained(null, null))
  }
}