import { useState } from "react";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function ProfilePage(props) {
    const location = useLocation();
    const TracksURL = 'https://api.spotify.com/v1/me/top/tracks'
    const ArtistURL = 'https://api.spotify.com/v1/me/top/artists'
    const ProfileURL = 'https://api.spotify.com/v1/me'
    let [token, setToken] = useState(location.hash.split('&')[0].replace('#access_token=', ''))

    useEffect(() => {
        setToken(location.hash.split('&')[0].replace('#access_token=', ''));
    }, [location]);
        // eslint-disable-next-line
        // , [])
    
    useEffect(() => {
        getInfo()
        getArtists()
        getTracks()
    }
        // eslint-disable-next-line
        , [token])
    
    
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