import { useEffect } from "react"
import { useLocation } from "react-router-dom"


export default function ProfilePage(props) {
    const location = useLocation();
    useEffect(() => {
        console.log(["pageview", location.pathname]);
      }, [location]);
        // eslint-disable-next-line
        // , [])
    return (
        <div></div>
    )
}