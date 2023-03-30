import { useState } from "react";
import { Link } from "react-router-dom";

export const InnerCart = () => {
    const [productosEnCarrito, setProductosEnCarrito] = useState([]);

    
    const agregarAlCarrito = (producto, cantidad) => {
        setProductosEnCarrito([...productosEnCarrito, { producto, cantidad }]);
    };

    return (
        <div>
            <h2>Mis compras</h2>
            <ul>
                {productosEnCarrito.map((productoEnCarrito) => (
                    <li key={productoEnCarrito.producto.id}>
                        {productoEnCarrito.producto.title} - Cantidad: {productoEnCarrito.cantidad}
                    </li>
                ))}
            </ul>
            <Link to="/checkout"><button>Ir a pagar</button></Link>
        </div>
    );
};

export default InnerCart;
