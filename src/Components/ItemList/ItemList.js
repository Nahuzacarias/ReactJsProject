import React from 'react'
import Item from "../Item/Item"

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((prod) => <Item key={prod.id} prod={prod} />)}
        </div>
    )
}

export default ItemList