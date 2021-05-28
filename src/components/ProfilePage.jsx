import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function ProfilePage(props) {
    const location = useLocation();
    useEffect(() => {
        console.log(["pageview", location.pathname]);
    }, [location]);
    console.log('here')
        // eslint-disable-next-line
        // , [])
    return (
        <div>
            <h1>PROFILE</h1>
        </div>
    )
}