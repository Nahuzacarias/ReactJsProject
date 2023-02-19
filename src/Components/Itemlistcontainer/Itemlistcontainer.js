import React , { useEffect} from 'react';

const Itemlistcontainer = () => {

        useEffect(() => {
            fetch(`../../productos.js`)
                .then((response) => response.json())
                .then((json) => console.log(json));
    
        })

    
}

export default Itemlistcontainer