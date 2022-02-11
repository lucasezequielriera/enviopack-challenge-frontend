import React, { useEffect, useContext } from 'react'
import Image from "../images/image-product.jpg"
import { DataContext } from '../context/DataContext';
import { Link } from "react-router-dom"

const Cart = () => {

    // USE CONTEXT TO USE THE DATA FOR THE WHOLE APP
    const { selectedProducts, setSelectedProducts, isPress, setIsPress, user, setUser, total, setTotal, setResolve } = useContext(DataContext);

    useEffect(() => {
        totalSum()
    })

    const totalSum = () => {
        const values = []
        const reducer = (a, b) => a + b

        selectedProducts.length >= 1 && selectedProducts.map(value => values.push(value.price))
        selectedProducts.length >= 1 ? setTotal(values.reduce(reducer)) : setTotal(0)
    }

    return (
        <div style={{ marginTop: 20, display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
                Carrito
            </p>

            {/* PRODUCTS */}
            <div style={{ width: 930, display: 'flex', marginTop: 50, justifyContent: 'space-between', marginRight: 15 }}>
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', width: 1000, marginTop: 10 }}>
                    {selectedProducts.length >= 1 ? selectedProducts.map(product => {
                        return <div key={product.id} style={{ width: 930, height: 80, marginRight: 0, marginBottom: 15, borderRadius: 5, boxShadow: '0px 0px 5px grey', display: 'flex', padding: '10px 10px' }}>
                            <img src={Image} alt="Cellphone" style={{ width: 100 }} />
                            <div style={{ display: 'flex', width: '100%' ,backgroundColor: '#e8e8e8', margin: '5px 0px', borderRadius: 7, justifyContent: 'space-between' }}>
                                <p style={{ fontSize: 17, padding: '0px 5px', alignSelf: 'center' }}>{product.title}</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p style={{ fontSize: 17, padding: '0px 10px', alignSelf: 'center' }}>$ {product.price}</p>
                                    <button type="button" style={{ width: 30, height: 30, backgroundColor: '#272626', border: 'none', borderRadius: 5, color: 'white', marginRight: 15, marginLeft: 5, cursor: 'pointer' }}
                                    onClick={e => {
                                        const newSelectedProducts = selectedProducts.filter(prd => prd.id !== product.id)
                                        setSelectedProducts(newSelectedProducts)
                                        setIsPress({ ...isPress, [product.id]: false })
                                    }}>X</button>
                                </div>
                            </div>
                        </div>
                    })
                    : <p style={{ marginBottom: 10 }}>No has seleccionado productos para agregar al carrito</p>
                    }
                </div>
            </div>

            {/* TOTAL */}
            {selectedProducts.length >= 1 && <div style={{ width: 930, display: 'flex', marginTop: 0, justifyContent: 'space-between', marginRight: 15 }}>
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', width: 1000, marginTop: 10 }}>
                    <div style={{ width: 930, height: 40, marginRight: 15, marginBottom: 15, borderRadius: 5, boxShadow: '0px 0px 5px grey', display: 'flex', padding: '10px 10px' }}>
                        <div style={{ display: 'flex', width: '100%', margin: '5px 0px', justifyContent: 'space-between' }}>
                            <p style={{ fontSize: 17, padding: '0px 5px', alignSelf: 'center', fontWeight: 600 }}>Total</p>
                            <p style={{ fontSize: 17, padding: '0px 10px', alignSelf: 'center' }}>${total}</p>
                        </div>
                    </div>
                </div>
            </div>}

            {/* ACTIONS */}
            {selectedProducts.length >= 1 && <div style={{ width: 950, display: 'flex', marginTop: 0, justifyContent: 'space-between', marginRight: -5 }}>
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', width: 1000, marginTop: 10 }}>
                    <Link to="/" type="button" style={{ padding: '10px', backgroundColor: '#272626', color: 'white', border: 'none', borderRadius: 3, fontWeight: 300, cursor: 'pointer', fontSize: 13 }}>
                    Volver al catálogo
                    </Link>
                    <Link to="/Buy" type="button" style={{ padding: '10px', backgroundColor: '#272626', color: 'white', border: 'none', borderRadius: 3, fontWeight: 300, cursor: 'pointer', fontSize: 13 }}
                    onClick={() => {
                        if (total <= user.credit) {
                            setResolve(true)
                            setUser({ ...user, credit: user.credit - total })
                            setSelectedProducts([])
                            setIsPress(false)
                        } else {
                            setResolve(false)
                        }
                    }}>
                    Finalizar compra
                    </Link>
                </div>
            </div>}

        </div>
    )
}

export default Cart