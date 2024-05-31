import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    let { user } = useContext(UserContext)
    if(!user) return <div className="text-center">Please Login</div>
    return (
        <div className="text-center">
            <h1>Profile</h1>
            <h2>Username: {user.username}</h2>
            <h2>Password: {user.password}</h2>
        </div>
    )
}

export default Profile