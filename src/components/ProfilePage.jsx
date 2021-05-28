import { useEffect } from "react"


export default function ProfilePage(props) {
    useEffect(() => console.log(props.match.params.token), [])
    return (
        <div></div>
    )
}