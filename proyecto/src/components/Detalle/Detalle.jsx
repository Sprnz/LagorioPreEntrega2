import "./detalle.css"
import { useParams } from "react-router-dom";
export const Detalle = ({ productos }) => {
    const { id } = useParams();
    const producto = productos.find((producto) => producto.id == id);
    console.log(id)
    console.log(producto)

    return (
        <div className="card-container-detalle">
            <div className="card-detalle">
                <h4>{producto.title}</h4>
                <img src={producto.image} alt="" />
                <h5>{producto.category}</h5>
                <p>{producto.description}</p>
                <p>{producto.price}</p>
                <p>{producto.rating.rate}</p>
            </div>
        </div>
    )
}
