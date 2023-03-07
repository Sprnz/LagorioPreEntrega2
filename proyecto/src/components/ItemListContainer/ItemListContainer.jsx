import { Card } from "../Card/Card"
import "./itemListContainer.css"

const ItemListContainer = ({productos}) => {

    return (
        <div className="items">
            {productos.map((productos) => (
                <Card key={productos.id} productos={productos}/>
            ))}
            </div>
    )
}

export default ItemListContainer