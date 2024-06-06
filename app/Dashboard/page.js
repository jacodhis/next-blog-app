
import { useAuth } from "@/context/AuthContext"

const Dashboard = () => {
    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth()

    const login = (e) => {
        e.preventDefault();
        setIsLoggedIn(true)
        setAuthUser({name:"John Doe"})
    }

    const logout = (e) => {
        e.preventDefault();
        setIsLoggedIn(false)
        setAuthUser(null)
    }
    

    return (
        <div>
            <span>User is Currently : {isLoggedIn ? 'logged in' : 'Logged Out'}</span>
            {isLoggedIn ? (<span>User name: {authUser.name}</span>) : null}
            <br />
            {isLoggedIn ?
                <button onClick={(e) => login} className="btn btn-danger">Logout Out</button> :
                <button onClick={(e) => logout} className="btn btn-primary">Log in</button>
            } 
          
        </div>
    )
}

export default Dashboard;