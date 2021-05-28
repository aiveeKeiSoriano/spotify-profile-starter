import { useEffect } from "react"


export default function ProfilePage(props) {
    useEffect(() => console.log(props.params.match.token), [])
    return (
        <div></div>
    )
}