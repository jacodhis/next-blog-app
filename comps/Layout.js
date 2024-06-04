import Navbar from "./Navbar";
import Footer from "./Footer";
import '../app/globals.css'

const Layout = ({children}) =>{
    return (
        <main className="content">
            <Navbar className="navbar"/>
             {children}
            <Footer />
            
        </main>
    );
}

export default Layout;