import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard"
import { Link } from "react-router-dom"

const CharacterList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUsers(json));


    }, []);


    return (
        <div>
            {users.map((user) => {

                return (
                    <Link to={`/detail/${user.id}`}>
                        <CharacterCard key={user.id} />;
                    </Link>)

            })}
        </div>

    );


};



export default CharacterList;