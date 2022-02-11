import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Cart from '../../pages/Cart'
import Products from '../../pages/Products'
import { DataContext } from '../../context/DataContext';
import Buy from '../../pages/Buy';

const Navbar = () => {

    // USE CONTEXT TO USE THE DATA FOR THE WHOLE APP
    const { selectedProducts, user } = useContext(DataContext);

    const [counter, setCounter] = useState(selectedProducts.length)

    return (
        <Router>
            <div style={{ border: '1px solid #272626', backgroundColor: '#272626', color: 'white', padding: '10px 10px', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontWeight: 600 }}>Tienda de productos</Link>
                <div style={{ display: 'flex' }}>
                    <p style={{ marginRight: 20, fontWeight: 300 }}>{user.firstName}</p>
                    <Link to="/Cart" style={{ marginRight: 20 }}>Carrito <span>({ selectedProducts.length })</span></Link>
                    <p style={{ fontWeight: 300 }}>Crédito $<span>{user.credit}</span></p>
                </div>
            </div>

            <Routes>
            <Route path="/" element={<Products counter={counter} setCounter={setCounter} />} />
            <Route path="/Cart" element={<Cart setCounter={setCounter} />} />
            <Route path="/Buy" element={<Buy />} />
            </Routes>
        </Router>
    )
    
}

export default Navbar