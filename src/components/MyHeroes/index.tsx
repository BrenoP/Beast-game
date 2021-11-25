import { useContext } from 'react';
import Image from 'next/image';

import { GameContext, useGame } from '../../providers/game';
import { Container, Item } from '../ListOfHeroes/style';

export default function MyHeroes() {

    const { deckOfHeroes, coins } : any = useContext(GameContext);

    return (
        <Container style={{ flexDirection: "column" }}>
            <h3>Moedas: {coins}</h3>
            <h1>lista</h1>
            {
                deckOfHeroes.map((hero) => (
                    <Item key={hero.id}>
                        <Image src={hero.icon} alt="" width="100" height="100" />
                        <p>{hero.name}</p>
                        <p>Dano: {hero.damage}</p>
                        <p>Tipo: {hero.type}</p>
                    </Item>
                ))
            }
        </Container>
    );
}