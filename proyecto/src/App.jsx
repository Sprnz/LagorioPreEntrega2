
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import { Detalle } from './components/Detalle/Detalle';



function App() {
  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductos(res.data);
  };

  useEffect(() => {
    getProductos();
  }, [])
  

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer productos={productos}/>}/>
        <Route path="/productos/:id" element={<Detalle productos={productos} />}/>
      </Routes>
    </div>
  )
}

export default App
