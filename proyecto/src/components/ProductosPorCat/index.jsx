import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductosCat = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then((response) => {
                setProducts(response.data);
            });
    }, [category]);

    return (
        <div>
            <h1>Productos en {category}</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Link to={`/category/${category}/product/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductosCat;