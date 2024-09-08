import React from 'react'
import { useLogin } from '../hooks/useLogin'

const ProfilePage = () => {

    // Getting username
    const username = useLogin()

    return (
        <div>
            <h1>Profile Page - {username}</h1>
        </div>
    )
}

export default ProfilePage