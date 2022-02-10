import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import user from "../../config/data/profile.json"
import Products from '../../pages/Products'

const Navbar = () => {

    const [counter, setCounter] = useState(0)

    return (
        <Router>
            <div style={{ border: '1px solid #272626', backgroundColor: '#272626', color: 'white', padding: '10px 10px', display: 'flex', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontWeight: 600 }}>Tienda de productos</Link>
                <div style={{ display: 'flex' }}>
                    <p style={{ marginRight: 20, fontWeight: 300 }}>{user.profile.firstName}</p>
                    <Link to="/Cart" style={{ marginRight: 20 }}>Carrito <span>({counter})</span></Link>
                    <p style={{ fontWeight: 300 }}>Crédito $<span>{user.profile.credit}</span></p>
                </div>
            </div>

            <Routes>
            <Route path="/" element={<Products counter={counter} setCounter={setCounter} />}></Route>
            <Route path="/Cart"></Route>
            </Routes>
        </Router>
    )
    
}

export default Navbar