
'use client'

import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation";


const Dashboard = () => {

     const { authUser, isLoggedIn,logOutUserHandler} = useAuth()
    
    const router = useRouter();

    const logout = () => {
        logOutUserHandler()
        router.push('/')
    }

    if (!isLoggedIn) {
            return null;
        }

    const data = <div>
        <span>Welcome { authUser.name}</span>
                    <div onClick={()=>router.push('products')} className="text-primary">Go Shopping</div>
                    <br />
                    <span  onClick={logout} className="btn btn-danger">Logout</span> 
                </div>

    return (
        <>
           {data}
        </>
    );
}

export default Dashboard;