import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const CharacterList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        /*
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => setUsers(json));
        */
        axios("https://jsonplaceholder.typicode.com/users").then((res) =>
            setUsers(res.data)
        );
    }, []);

    return (
        <div>
            {users.map((user) => {
                return (
                    <Link to={`/detail/${user.id}`}>
                        <Item key={user.id} data={user} />
                    </Link>
                );
            })}
        </div>
    );
};

export default CharacterList;