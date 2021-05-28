import { useEffect } from "react"


export default function Login() {

    useEffect(() => {
        fetch('https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f&response_type=token&redirect_uri=https://quizzical-poitras-057011.netlify.app/').then(resp => resp.json()).then(data => console.log(data)).catch((e) => console.log(e))
    }, [])

    // async function getToken() {
    //     let response = await fetch({
    //         method: 'GET',
    //         url: 'https://accounts.spotify.com/authorize'

    //     })
    // }


    return (
        <div className="login">
            <button>Login</button>
        </div>
    )
}