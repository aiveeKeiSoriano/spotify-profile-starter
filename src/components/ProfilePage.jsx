import { useState } from "react";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function ProfilePage(props) {
    const location = useLocation();
    const TracksURL = 'https://api.spotify.com/v1/me/top/tracks'
    const ArtistURL = 'https://api.spotify.com/v1/me/top/artists'
    const ProfileURL = 'https://api.spotify.com/v1/me'
    // const Client = 'YjZiOTZmODI3ZjU4NDA3OTk1OWVhZTJiZDEwNGMwNGY6ZWNmYjNjOWYyZjlkNDVhZTk4NjhiNzc1ZGFmYjk5NWQ='
    const Client = 'ZTdiZWJjODEyMzRlNDczN2FkYTYwYmM2NjZlYjUwZDc6OWIwMDVkZjlmZGE4NDE3MWEwNmVjMjc2MmNmYTQ3YTI='
    const tokenURL = 'https://accounts.spotify.com/api/token'
    // console.log(location)
    let [code, setCode] = useState(location.search.replace('?code=', ''))
    let [token, setToken] = useState(null)
    let [refresh, setRefresh] = useState(null)

    useEffect(() => {
        setToken(location.hash.split('&')[0].replace('#access_token=', ''));
    }, [location]);
    //     // eslint-disable-next-line
    //     // , [])
    
    useEffect(() => {
        // getInfo()
        // getArtists()
        // getTracks()
        getToken()
        console.log(code)
    }
        // eslint-disable-next-line
        , [code])
    
    useEffect(() => token ? getInfo() : console.log(refresh), [token])
    
    async function getToken() {
        let response = await fetch(tokenURL, {
            method: 'POST',
            body: 'grant_type=authorization_code&code=' + code + '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile',
            headers: {
                'Authorization': 'Basic ' + Client,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        let data = await response.json()
        console.log(data)
        setToken(data.access_token)
        setRefresh(data.refresh_token)
    }
    
    let getInfo = async () => {
        console.log(token)
        let response = await fetch(ProfileURL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        let data = await response.json()
        console.log(data)
    }

    let getArtists = async () => {
        let response = await fetch(ArtistURL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        let data = await response.json()
        console.log(data)
    }

    let getTracks = async () => {
        let response = await fetch(TracksURL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        let data = await response.json()
        console.log(data)
    }
    

    // useEffect(() => {
    //     let tokens = location.hash.split('&')[0].replace('#access_token=', '');
    //     console.log(1, tokens)
    //     fetch('https://api.spotify.com/v1/me', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + tokens,
    //         }
    //     }).then(response => response.json())
    //         .then((data) => console.log(data)).catch(e => console.log(e));
    // }, []);
    
    return (
        <div>
            <h1>PROFILE</h1>
        </div>
    )
}