
'use client'
import { useRouter } from "next/navigation"
import React, { useContext, useState } from "react"
import Cookies from 'js-cookie';
// import apiClient from '../utils/axios'
import dbConn from "@/config/db";
import registerUser from "@/apis/auth/registerUser";



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

    const registerHandler = async (data) => {
        let userData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password:data.password
        }
        try {
            await registerUser(userData);
            // setAuthUser(response.data.user);
            // setIsLoggedIn(true);
            Cookies.set('authToken', response.data.token);
            router.push('/products'); 
            console.log("success")
        } catch (error) {
            setHasError(true)
            setError(error)
        }
       
        // let query = "INSERT INTO users (id, name, email,phone, password) VALUES (?, ?, ?, ?, ?);" ;
        // let values = ["",userData.name,userData.email,userData.phone,userData.password]
        // try {
        //   const response = await dbConn({ query: query, values: values})
            // setAuthUser(response.data.user);
            // setIsLoggedIn(true);
            // Cookies.set('authToken', response.data.token);
            // router.push('/products'); 
            // console.log("success")
        // } catch (error) {
            // setHasError(true)
            // setError(error)
        //   console.log(error)
        // }



        // try {
        //     const response = await apiClient.post(  'register',{
        //         data:data
        //     });

            // setAuthUser(response.data.user);
            // setIsLoggedIn(true);
            // Cookies.set('authToken', response.data.token);
            // router.push('/products'); 

        // } catch (error) {
            // setHasError(true)
            // setError(error)
        // }
    }

    const loginUserHandler = async (data) => {
        let email = data.email
        let password = data.password

        console.log(data)

        const query = "SELECT * FROM users WHERE email = ? AND password = ?";
        const values = [email,password]
        try {
            const response = await dbConn({ query: query, values: values})

            setAuthUser(data)
            setIsLoggedIn(true)
            setIsSuccess(true)
            Cookies.set('authToken', '12345678');
            router.push('/products')
        } catch (error) {
            console.log("an error occured")
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
        setAuthUser(null)
        setIsLoggedIn(false)
        setIsSuccess(false)
        Cookies.remove('authToken');
         
    }

    const value = {
        authUser,
        registerHandler,
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