
'use client'
import React, { useContext, useState } from "react"


const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginUserHandler = (data) => {
        //api request to validate users
        setAuthUser({name:data.name})
        setIsLoggedIn(true)
    }

    const logOutUserHandler = () => {
        setAuthUser(null)
        setIsLoggedIn(false)
    }

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        loginUserHandler,
        logOutUserHandler
    }
    
    return (
        <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
    )
}