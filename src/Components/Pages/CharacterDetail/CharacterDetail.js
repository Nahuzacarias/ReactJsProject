
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Item from "../../Item/Item";


const CharacterDetail = () => {

    const [user, setUser] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setUser(json));

    }, [id]);

    return (
        <div className="characterList-detail">
            <div key={user.id}>
                <Item data={user} />
            </div>
        </div>
    );
};

export default CharacterDetail;