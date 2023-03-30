import "./cartWidget.css"
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <Link to="/ver carrito">
            <div className="cart-container">
            <div className="cart"><p>🛒</p>
            </div>
            <div>
            <p className="notif">0</p>
            </div>
        </div></Link>
    )
}

export default CartWidget