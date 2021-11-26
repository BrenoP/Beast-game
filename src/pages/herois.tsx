import { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios";

import ContainerCenter, { Container } from '../components/ContainerCenter';
import Button from '../components/Button';
import ListOfHeroes from '../components/ListOfHeroes';
import MyHeroes from '../components/MyHeroes';
import { useGame } from '../providers/game';

export default function Heroes() {

    const [heroes, setHeroes] = useState([]);
    const { gameBegun, setGameBegun} : any = useGame();

    async function getHeroes() {
        const response = await axios.get(`http://localhost:3000/api/heroes`);
        const data = await response.data;
        setHeroes(data);
    }

    useEffect(() => {
        getHeroes();
    }, []);

    return (
        <>
            <ContainerCenter justCenter>
                <Button onClick={() => setGameBegun(!gameBegun)}>
                    <Link href="/jornada" passHref>
                        Iniciar jogo
                    </Link>
                </Button>
            </ContainerCenter>
            <Container>
                <ListOfHeroes heroes={heroes} />
                <MyHeroes />
            </Container>
        </>
    );
}