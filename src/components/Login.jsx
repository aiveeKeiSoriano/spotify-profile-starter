// import { useEffect } from "react"


export default function Login() {

    // useEffect(() => {
    //     fetch('https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=token&redirect_uri=https://quizzical-poitras-057011.netlify.app/').then(resp => resp.json()).then(data => console.log(data)).catch((e) => console.log(e))
    // }, [])

    // useEffect(() => getToken(), [])

    // async function getToken() {
    //     let response = await fetch({
    //         method: 'POST',
    //         url: 'https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=token&redirect_uri=https://quizzical-poitras-057011.netlify.app/'

    //     })
    //     // let data = await response.json()
    //     console.log(response)
    // }


    return (
        <div className="login">
            <button><a href='https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=token&scope=user-top-read%20user-read-private%20user-read-email&redirect_uri=http://localhost:3000/profile'>Login</a></button>
        </div>
    )
}