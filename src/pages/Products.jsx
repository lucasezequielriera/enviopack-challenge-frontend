import React, { useState, useEffect } from 'react'
import dataProducts from "../config/data/products.json"
import Image from "../images/image-product.jpg"

const Products = ({ counter, setCounter }) => {

    const [isPress, setIsPress] = useState({})
    const [productCounter, setProductCounter] = useState(0)

    useEffect(() => {
        setCounter(Object.keys(isPress).length)
    }, [isPress])

    const searchByName = () => {
        return (
            <input style={{ width: 250, padding: '5px 5px' }} type="text" placeholder="Buscar productos por nombre" />
        )
    }

    const orderProducts = () => {
        return (<div>
            <p style={{ marginLeft: 0, fontSize: 10, marginBottom: 2, textAlign: 'left', color: 'grey' }}>ORDENAR POR</p>
            <select>
                <option selected>Seleccionar</option>
                <option>Más baratos</option>
                <option>Más caros</option>
            </select>
        </div>)
    }

    return (
        <div style={{ marginTop: 20, display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
                Catálogo
            </p>
            <div style={{ width: 930, display: 'flex', marginTop: 50, justifyContent: 'space-between', marginRight: 15 }}>
                {searchByName()}
                {orderProducts()}
            </div>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', width: 1000, marginTop: 10 }}>
                {dataProducts.productos.map(product => {
                    return <div key={product.id} style={{ width: 300, height: 350, marginRight: 15, marginBottom: 15, borderRadius: 5, boxShadow: '0px 0px 5px grey' }}>
                        <img src={Image} alt="Cellphone image" style={{ width: 170, marginTop: 20 }}></img>
                        <p style={{ marginTop: 10, fontSize: 19, padding: '0px 24px' }}>{product.title}</p>
                        <p style={{ marginTop: 15, fontSize: 19 }}>$ {product.price}</p>
                        <button style={{ marginTop: 20, width: 260, backgroundColor: '#1b1b1b', color: 'white', padding: '8px 0px', fontSize: 14, border: 'none', borderRadius: 4, cursor: 'pointer' }} type="button" onClick={(k) => setIsPress({ ...isPress, [product.id]: true })}>
                            {isPress[product.id] === true ? "Ver carrito" : "Agregar al carrito"}
                        </button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products