import { useEffect, useState } from "react"
import { getUsername } from "../service/auth.service"

export const useLogin = () => {

    // Creating State
    const [username, setUsername] = useState('')

    useEffect(() => {

        // Get Token
        const token = localStorage.getItem('token')

        if (!token) {
            window.location = '/login'
        } else {
            setUsername(getUsername(token))
        }

    }, [])

    // Returning Username
    return username 

}