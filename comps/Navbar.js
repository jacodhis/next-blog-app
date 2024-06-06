'use client'
import { useRouter } from "next/navigation";
import goTo from '../constants/routes'
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";



const Navbar = () => {
    const { authUser, isLoggedIn ,loginUserHandler,logOutUserHandler} = useAuth()
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

    const login = () => {
        let data = {
            name:"John Doe"
        }
        loginUserHandler(data)

    }

    const logout = () => {
        logOutUserHandler()
    }
    

    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" style={{ cursor:"pointer" }}>
            <a class="navbar-brand" onClick={()=>handleNavigation('home')}>Home </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={()=>handleNavigation('products')}>Products</a>
                </li>
                <li class="nav-item">
                            <a class="nav-link" onClick={() => handleNavigation('cart')}>Cart({cartCount })</a>
                </li>
                <li class="nav-item">
                    {isLoggedIn ? <a class="nav-link"  onClick={logout}>{authUser.name}</a> : <a class="nav-link" onClick={ login}>Login</a>}
                </li>
                       
                </ul>
            </div>
            </div>
        </nav>
    </>
}

export default Navbar;