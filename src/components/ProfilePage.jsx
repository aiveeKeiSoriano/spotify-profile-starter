import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import styled from "styled-components";
import { getInfo, getToken, tokenObtained } from "../redux/actions/actions";
import Error from "./Error";
import SideBar from "./SideBar";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    background-color: rgb(24,24,24);
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 1em;
    height: 100vh;
    overflow-y: scroll;
    flex: 1;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    color: white;
    width: 100%;
    max-width: 800px;

`
const Pic = styled.div`
    width: 150px;
    height: 150px;
    border: 3px solid white;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .default {
        padding: 2em;
        filter: invert();
    }
`
const Stats = styled.div`
    display: flex;
    max-width: 300px;
    width: 100%;
    justify-content: space-between;

    .stat {
        text-transform: uppercase;
        font-size: 0.6rem;
        font-weight: 600;
        color: #bbbbbb;
        letter-spacing: 1.5px;
        display: flex;
        flex-direction: column;
        gap: .4em;
        align-items: center;
    }

    .stat p:first-of-type {
        font-size: 1rem;
        color: #1FBA57;
    }
`

const Logout = styled.button`
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: 600;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    padding: .8em 2em;
    border-radius: 20px;
    margin-top: 1em;
    cursor: pointer;

    &:hover {
        background-color: #ffffff1d;
    }
`

export default function ProfilePage(props) {
    const location = useLocation();
    const LocalToken = localStorage.getItem('Token')
    let dispatch = useDispatch()
    let token = useSelector(state => state.auth.token)
    let user = useSelector(state => state.user)
    let error = useSelector(state => state.auth.error)

    useEffect(() => {
        if (LocalToken) dispatch(tokenObtained(LocalToken))
        else if (!token) dispatch(getToken(location.search.replace('?code=', '')))
        else (getInfo())
    }
        // eslint-disable-next-line
        , [])

    useEffect(() => {
        if (token) {
            dispatch(getInfo())
        }
    },
        // eslint-disable-next-line
        [token])

    return (
        <Wrapper>
            <SideBar />
            <Content>
                {error &&
                    <Error />
                }
                {user &&
                    <Profile>
                        <Pic>
                            <img className={user.profile.images[0] ? null : 'default'} src={user.profile.images[0] ? user.profile.images[0].url : "/images/person.svg"} alt="" />
                        </Pic>
                        <h1 className="name">{user.profile.display_name}</h1>
                        <Stats>
                            <div className="stat">
                                <p>{user.profile.followers.total}</p>
                                <p>followers</p>
                            </div>
                            <div className="stat">
                                <p>{user.profile.following}</p>
                                <p>following</p>
                            </div>
                            <div className="stat">
                                <p>{user.profile.playlists}</p>
                                <p>playlists</p>
                            </div>
                    </Stats>
                    <Logout>Logout</Logout>
                    </Profile>
                }
            </Content>
        </Wrapper>
    )
}

    // const TracksURL = 'https://api.spotify.com/v1/me/top/tracks'
    // const ArtistURL = 'https://api.spotify.com/v1/me/top/artists'
    // const ProfileURL = 'https://api.spotify.com/v1/me'
    // // const Client = 'YjZiOTZmODI3ZjU4NDA3OTk1OWVhZTJiZDEwNGMwNGY6ZWNmYjNjOWYyZjlkNDVhZTk4NjhiNzc1ZGFmYjk5NWQ='
    // const Client = 'ZTdiZWJjODEyMzRlNDczN2FkYTYwYmM2NjZlYjUwZDc6OWIwMDVkZjlmZGE4NDE3MWEwNmVjMjc2MmNmYTQ3YTI='
    // const tokenURL = 'https://accounts.spotify.com/api/token'

    // let [code, setCode] = useState(location.search.replace('?code=', ''))
    // let [token, setToken] = useState(null)
    // let [refresh, setRefresh] = useState(null)

    // useEffect(() => {
    //     setToken(location.hash.split('&')[0].replace('#access_token=', ''));
    // }, [location]);
    //     // eslint-disable-next-line
    //     // , [])

    // useEffect(() => {
    //     // getInfo()
    //     // getArtists()
    //     // getTracks()
    //     getToken()
    //     console.log(code)
    // }
    //     // eslint-disable-next-line
    //     , [code])


    // async function getToken() {
    //     let response = await fetch(tokenURL, {
    //         method: 'POST',
    //         body: 'grant_type=authorization_code&code=' + code + '&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile',
    //         headers: {
    //             'Authorization': 'Basic ' + Client,
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     })
    //     let data = await response.json()
    //     console.log(data)
    //     setToken(data.access_token)
    //     setRefresh(data.refresh_token)
    // }

    // let getInfo = async () => {
    //     console.log(token)
    //     let response = await fetch(ProfileURL, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     let data = await response.json()
    //     console.log(data)
    // }

    // let getArtists = async () => {
    //     let response = await fetch(ArtistURL, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     let data = await response.json()
    //     console.log(data)
    // }

    // let getTracks = async () => {
    //     let response = await fetch(TracksURL, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + token
    //         }
    //     })
    //     let data = await response.json()
    //     console.log(data)
    // }


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

