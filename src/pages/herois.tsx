import axios from "axios";
import { GetStaticProps } from "next";

import ListOfHeroes from '../components/ListOfHeroes';

export default function Heroes({ heroes }) {


    return (
        <>
            <ListOfHeroes heroes={heroes} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get(`http://localhost:3000/api/heroes`);
    const data = await response.data;

    return {
        props: {
            heroes: data
        }
    }
}