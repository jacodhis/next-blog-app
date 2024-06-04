'use client'
import { useRouter } from "next/navigation";
import goTo from '../../constants/routes'



const Navbar = () => {

    const router = useRouter();

    const handleNavigation = (page) => {
    
        const viewPage = goTo[page]
        if (viewPage != undefined) {
            router.push(viewPage);
        } else {
            router.push('../notFound/');
        }
        
    };

    return <>
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" onClick={()=>handleNavigation('home')}>Home </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" onClick={()=>handleNavigation('posts')}>posts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={()=>handleNavigation('images')}>Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </div>
            </div>
            </nav>
    </>
}

export default Navbar;