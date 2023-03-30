import "./itemListContainer.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ItemListContainer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((response) => {
            setCategories(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Categorías</h1>
            <ul className="categories">
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default ItemListContainer
