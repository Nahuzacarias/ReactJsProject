import { useEffect } from 'react';
import productos from "../../productos.json"

const Itemlistcontainer = () => { 


        useEffect(() => {
                new Promise((resolve, reject) => {

                        setTimeout(() => {


                                resolve(productos);
                        }, 500);

                }).then((data) => {
                        console.log(data);
                });
        }, []);
};



export default Itemlistcontainer;