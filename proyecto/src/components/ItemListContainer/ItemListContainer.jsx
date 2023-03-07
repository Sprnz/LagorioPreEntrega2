import "./itemListContainer.css"

const ItemListContainer = ({productos}) => {

    return (
        <div className="items">
            {productos.map(productos => 
            <h4 key={productos.id}>{productos.title}</h4>)}
            </div>
    )
}

export default ItemListContainer