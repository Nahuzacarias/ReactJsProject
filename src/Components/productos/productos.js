import React from 'react'

const productos = (id, nombre, precio, foto, descripcion) => {
    return (
        <div>
            <p>{id}</p>
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{foto}</p>
            <p>{descripcion}</p>

        </div>
    )
}

export default productos