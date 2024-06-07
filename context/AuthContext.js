
'use client'
import { useRouter } from "next/navigation"
import React, { useContext, useState } from "react"
import Cookies from 'js-cookie';
// import users from '../constants/users'


const users = [
    {
        "name" : "Jack Odhiambo",
        "email": "jacodhis@gmail.com",
        "phone": "0789098789",
        "password": "12345678",
    },
     {
        "name" : "Sammy Odero",
        "email": "sammyodero@gmail.com",
        "phone": "0729592870",
        "password": "12345678",
    },
      {
        "name" : "Beryl Achieng",
        "email": "achieng@gmail.com",
        "phone": "0799098789",
        "password": "12345678",
    },
       {
        "name" : "Patricia Adhiambo",
        "email": "pat@gmail.com",
        "phone": "0719098789",
        "password": "12345678",
    },
        {
        "name" : "Shell Odhiambo",
        "email": "shell@gmail.com",
        "phone": "0735098789",
        "password": "12345678",
    },     
    
]




const AuthContext = React.createContext()


export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [error,setError] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    
    const router = useRouter()

    const loginUserHandler = (data) => {
        let email = data.email
        let password = data.password

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            let data = {
                name: user.name,
                email: user.email,
                phone: user.phone
            }
            
            setAuthUser(data)
            setIsLoggedIn(true)
            setIsSuccess(true)
            Cookies.set('authToken', '12345678');
            router.push('/products')
        } else {
            setIsSuccess(false)
            setHasError(true)
            setError("Wrong credentials")
            setTimeout(() => {
                setHasError(false)
                setError("")
            }, 3000);
            
        }
        
    }

    const logOutUserHandler = () => {
        console.log("cookies to remove : " , Cookies.get('authToken'))
        setAuthUser(null)
        setIsLoggedIn(false)
        setIsSuccess(false)
        Cookies.remove('authToken');
         
    }

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        loginUserHandler,
        logOutUserHandler,
        hasError,
        error,
        isSuccess
    }
    
    return (
        <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
    )
}