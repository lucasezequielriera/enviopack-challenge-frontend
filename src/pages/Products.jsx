import React, { useState, useEffect, useContext } from 'react'
import dataProducts from "../config/data/products.json"
import Image from "../images/image-product.jpg"
import { DataContext } from '../context/DataContext';
import { Link } from "react-router-dom"

const Products = ({ setCounter }) => {
    
    // USE CONTEXT TO USE THE DATA FOR THE WHOLE APP
    const { selectedProducts, setSelectedProducts, isPress, setIsPress } = useContext(DataContext);

    const [filteredProducts, setFilteredProducts] = useState()

    // SELECTED PRODUCTS COUNTER
    useEffect(() => {
        setCounter(Object.keys(isPress).length)
    })

    // ORDER FILTER OPTIONS
    const options = [
        {
            id: 1,
            label: 'Seleccionar',
            value: 'normal'
        },
        {
            id: 2,
            label: 'Más baratos',
            value: 'cheapest'
        },
        {
            id: 3,
            label: 'Más caros',
            value: 'expensive'
        }
    ]

    // LETTERS FILTER
    const handleChange = (e) => {
        const filtered = dataProducts.productos.filter(x => {
            const text = x.title.toLowerCase()
            const letters = e.target.value.toLowerCase()

            return text.indexOf(letters) >= 0
        })
        
        setFilteredProducts(filtered)
    }

    // ORDER FILTER
    const orderProducts = (e) => {
        let prices = !filteredProducts ? dataProducts.productos.map(p => p) : filteredProducts.map(k => k)

        if (e.target.value === 'cheapest') {
            prices.sort((a, b) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0)
        } else if (e.target.value === 'expensive') {
            prices.sort((a, b) => a.price < b.price ? 1 : a.price > b.price ? -1 : 0)
        }

        setFilteredProducts(prices)
    }

    return (
        <div style={{ marginTop: 20, display: 'flex', flexFlow: 'column', alignItems: 'center' }}>

            {/* TITLE */}
            <p style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
                Catálogo
            </p>

            <div style={{ width: 930, display: 'flex', marginTop: 50, justifyContent: 'space-between', marginRight: 15 }}>

                {/* INPUT */}
                <input style={{ width: 250, padding: '5px 5px' }} type="text" placeholder="Buscar productos por nombre"
                onChange={e => handleChange(e)
                } />

                {/* SELECT */}
                <div>
                    <p style={{ marginLeft: 0, fontSize: 10, marginBottom: 2, textAlign: 'left', color: 'grey' }}>ORDENAR POR</p>
                    <select onChange={e => orderProducts(e)}>
                        { options.map(option => <option key={option.id} value={option.value}>{option.label}</option>) }
                    </select>
                </div>

            </div>

            {/* PRODUCTS */}
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', width: 1000, marginTop: 10 }}>
                {!filteredProducts ? dataProducts.productos.map(product => {
                    return <div key={product.id} style={{ width: 300, height: 350, marginRight: 15, marginBottom: 15, borderRadius: 5, boxShadow: '0px 0px 5px grey' }}>
                        <img src={Image} alt="Cellphone" style={{ width: 170, marginTop: 20 }}></img>
                        <p style={{ marginTop: 10, fontSize: 19, padding: '0px 24px' }}>{product.title}</p>
                        <p style={{ marginTop: 15, fontSize: 19 }}>$ {product.price}</p>
                        { !isPress[product.id] ? <button style={{ marginTop: 20, width: 260, backgroundColor: '#1b1b1b', color: 'white', padding: '8px 0px', fontSize: 14, border: 'none', borderRadius: 4, cursor: 'pointer' }} type="button" onClick={(k) => {
                            setIsPress({ ...isPress, [product.id]: true })
                            // VALIDATION FOR NOT REPEATING THE SAME ID
                            !isPress[product.id] && setSelectedProducts([ ...selectedProducts, product ])
                        }}>Agregar al carrito</button>
                        : <Link to="/Cart" type="button" style={{ display: 'flex', justifyContent: 'center' ,margin: 20, width: 260, backgroundColor: '#1b1b1b', color: 'white', padding: '8px 0px', fontSize: 14, border: 'none', borderRadius: 4, cursor: 'pointer' }}>Ver carrito</Link> }
                    </div>
                })
                : filteredProducts.map(product => {
                    return <div key={product.id} style={{ width: 300, height: 350, marginRight: 15, marginBottom: 15, borderRadius: 5, boxShadow: '0px 0px 5px grey' }}>
                        <img src={Image} alt="Cellphone" style={{ width: 170, marginTop: 20 }}></img>
                        <p style={{ marginTop: 10, fontSize: 19, padding: '0px 24px' }}>{product.title}</p>
                        <p style={{ marginTop: 15, fontSize: 19 }}>$ {product.price}</p>
                        { !isPress[product.id] ? <button style={{ marginTop: 20, width: 260, backgroundColor: '#1b1b1b', color: 'white', padding: '8px 0px', fontSize: 14, border: 'none', borderRadius: 4, cursor: 'pointer' }} type="button" onClick={(k) => {
                            setIsPress({ ...isPress, [product.id]: true })
                            // VALIDATION FOR NOT REPEATING THE SAME ID
                            !isPress[product.id] && setSelectedProducts([ ...selectedProducts, product ])
                        }}>Agregar al carrito</button>
                        : <Link to="/Cart" type="button" style={{ display: 'flex', justifyContent: 'center' ,margin: 20, width: 260, backgroundColor: '#1b1b1b', color: 'white', padding: '8px 0px', fontSize: 14, border: 'none', borderRadius: 4, cursor: 'pointer' }}>Ver carrito</Link> }
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default Products