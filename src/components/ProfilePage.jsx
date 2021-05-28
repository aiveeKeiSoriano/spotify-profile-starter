import { useState } from "react";
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function ProfilePage(props) {
    const location = useLocation();
    let [token, setToken] = useState(null)
    useEffect(() => {
        setToken(location.hash.split('&')[0].replace('#access_token=', ''));
    }, [location]);
        // eslint-disable-next-line
        // , [])
    
    useEffect(() => getInfo()
        // eslint-disable-next-line
        , [token])
    
    
    getInfo()
    
    
    return (
        <div>
            <h1>PROFILE</h1>
        </div>
    )
}