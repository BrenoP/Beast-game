import { useEffect, useState } from "react";
import axios from "axios";

import ListOfHeroes from '../components/ListOfHeroes';
import MyHeroes from '../components/MyHeroes';

export default function Heroes() {

    const [heroes, setHeroes] = useState([]);

    async function getHeroes() {
        const response = await axios.get(`http://localhost:3000/api/heroes`);
        const data = await response.data;
        setHeroes(data);
    }

    useEffect(() => {
        getHeroes();
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <ListOfHeroes heroes={heroes} />
            <MyHeroes />
        </div>
    );
}