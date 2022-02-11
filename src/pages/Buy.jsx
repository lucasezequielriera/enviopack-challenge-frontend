import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import { Link } from "react-router-dom"

const Buy = () => {

    // USE CONTEXT TO USE THE DATA FOR THE WHOLE APP
    const { resolve } = useContext(DataContext);

    return (
        <div style={{ marginTop: 20, display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
                Estado de la compra
            </p>

            {/* RESULTS */}
            <div style={{ width: 480, display: 'flex', flexFlow: 'column nowrap', marginTop: 50, justifyContent: 'center', marginRight: 15, border: '1px solid transparent', padding: 10, borderRadius: 5, boxShadow: '0px 0px 5px grey', alignItems: 'center' }}>
                {resolve ? (<>
                    <p>La compra se realizó con éxito</p>
                    <Link to="/" type="button" style={{ padding: '10px', backgroundColor: '#272626', color: 'white', border: 'none', borderRadius: 3, fontWeight: 300, cursor: 'pointer', fontSize: 13, marginTop: 10, width: 450 }}>
                        Volver al catálogo
                    </Link>
                </>)
                : (<>
                    <p style={{ padding: '0px 30px' }}>Ocurrió un error con tu compra, revisá que el importe no supere el crédito disponible en tu cuenta</p>
                    <Link to="/Cart" type="button" style={{ padding: '10px', backgroundColor: '#272626', color: 'white', border: 'none', borderRadius: 3, fontWeight: 300, cursor: 'pointer', fontSize: 13, marginTop: 10, width: 450 }}>
                        Volver al carrito
                    </Link>
                </>)
                }
            </div>

        </div>
    )
}

export default Buy