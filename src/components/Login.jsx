import { useEffect } from "react"


export default function Login() {

    useEffect(() => {
        fetch('https://accounts.spotify.com/authorize?client_id=b6b96f827f584079959eae2bd104c04f%0D%0A&response_type=token&redirect_uri=www.google.com').then(resp => resp.json()).then(data => console.log(data)).catch((e) => console.log(e))
    }, [])

    // async function getToken() {
    //     let response = await fetch({
    //         method: 
    //     })
    // }


    return (
        <div className="login">
            <button>Login</button>
        </div>
    )
}