import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
const Navbar = () => {
    return (

        
        <nav className="contenedor">
            <p className="brand">MANDALAI</p>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="productos">
                <button>Products</button>
            </Link>

            <Link to="/about">
            <button>About</button>
            </Link>

            <Link to="contacto">
            <button>Contact</button>
            </Link>

            <Link to="cart">
            <CartWidget/>
            </Link>
        </nav>
    )
}

export default Navbar