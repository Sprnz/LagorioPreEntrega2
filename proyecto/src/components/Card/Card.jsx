import "./card.css"
import { Link } from "react-router-dom";

export const Card = ({ productos }) => {
    return (

        <div className="card-container">
            <Link to={`${productos.id}`}>
                <div className="card">
                    <h4>{productos.title}</h4>
                    <img src={productos.image} alt="" />
                    <p>{productos.description}</p>
                    <p>${productos.price}</p>
                </div>
            </Link>
        </div>


    )
}
