
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';


const Itemlistcontainer = () => { 
const[items, setItems] = useState([])

useEffect(()=>{
        fetch('../productos.json')
        .then((res)=>res.json())
        .then((data)=> setItems(data))
},[])
return(
<>
<ItemList items={items}/>
</>
)
};


export default Itemlistcontainer;