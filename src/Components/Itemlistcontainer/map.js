
import React from 'react'
import productos from "../../productos.json"

const map = () => {
    return (
        <header className="app-header"> {
            productos.map((prod) => (
                <productos key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} foto={prod.foto} descripcion={prod.descripcion} />
        
            ))
        }</header>
        
    )
}

export default map