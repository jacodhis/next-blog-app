'use client'
import { useRouter } from "next/navigation";
import goTo from '../constants/routes'
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import Dashboard from './../app/Dashboard/page';
import Register from './../app/register/page';



const Navbar = () => {

    const { authUser, isLoggedIn,logOutUserHandler} = useAuth()
    const { cartCount } = useCart()

    const router = useRouter();

    const handleNavigation = (page) => {
    
        const viewPage = goTo[page]
        if (viewPage != undefined) {
            router.push(viewPage);
        } else {
            router.push('../notFound');
        }
    };


    const logout = () => {
        logOutUserHandler()
         router.push('/')
    }


    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid" style={{ cursor:"pointer" }}>
            <a className="navbar-brand" onClick={()=>handleNavigation('home')}>Home </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={ ()=> handleNavigation('products')}>Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={()=>handleNavigation('cart')}>Cart({cartCount })</a>
                </li>
                {isLoggedIn ? <li className="nav-item">
                    <a className="nav-link" onClick={()=>handleNavigation('dashboard')}>Dashboard</a>
                </li> : null}
                <li className="nav-item">
                    {isLoggedIn ? <a className="nav-link"  onClick={logout}>{authUser.name}</a> : <a className="nav-link" onClick={()=>handleNavigation('login')}>Login</a>}
                        </li>
                        
                <li className="nav-item">
                    {!isLoggedIn && <a className="nav-link"  onClick={()=>handleNavigation('register')} >Register</a> }
                </li>
                
                       
                </ul>
            </div>
            </div>
        </nav>
    </>
}

export default Navbar;