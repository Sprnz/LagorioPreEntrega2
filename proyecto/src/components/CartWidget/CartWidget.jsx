import "./cartWidget.css"

export const CartWidget = () => {
    return (
        <div className="cart-container">
            <div className="cart"><p>🛒</p>
            </div>
            <div>
            <p className="notif">0</p>
            </div>
        </div>
    )
}

export default CartWidget