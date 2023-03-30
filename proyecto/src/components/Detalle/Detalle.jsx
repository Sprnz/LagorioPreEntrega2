import "./detalle.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Detalle = ({ productos, agregarAlCarrito }) => {
    
    const { id } = useParams();
    const producto = productos.find((producto) => producto.id == id);
    const [cantidad, setCantidad] = useState(1);

    const handleCantidadChange = (event) => {
        setCantidad(parseInt(event.target.value));
    };

    const handleAgregarCarrito = () => {
        agregarAlCarrito(producto, cantidad);
    };

    return (
        <div className="card-container-detalle">
            <div className="card-detalle">
                <div className="detalle">
                    <h4>{producto.title}</h4>
                    <img src={producto.image} alt="" />
                    <h5>{producto.category}</h5>
                    <p>{producto.description}</p>
                    <p>{producto.price}</p>
                    <p>{producto.rating.rate}</p>
                </div>

                <div className="q-selector">
                    <div onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}>
                        ➖
                    </div>
                    <div>
                        <input
                            type="number"
                            min="1"
                            value={cantidad}
                            onChange={handleCantidadChange}
                        />
                    </div>
                    <div onClick={() => setCantidad(cantidad + 1)}>➕</div>
                </div>

                <div>
                    <button onClick={handleAgregarCarrito}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Detalle