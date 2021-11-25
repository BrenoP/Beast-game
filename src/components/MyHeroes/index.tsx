import { useContext } from 'react';
import Image from 'next/image';

import { GameContext } from '../../providers/game';
import { Container, Item } from '../ListOfHeroes/style';

export default function MyHeroes() {

    const { 
        deckOfHeroes, 
        setDeckOfHeroes, 
        coins,
        setCoins 
    } : any = useContext(GameContext);

    function removeHero(hero, heroToremove) {
        setDeckOfHeroes(deckOfHeroes.filter((hero, index) => index !== heroToremove));
        setCoins(coins + hero.cost);
    }

    return (
        <Container style={{ flexDirection: "column" }}>
            <h3>Moedas: {coins}</h3>
            <h1>lista</h1>
            {
                deckOfHeroes.map((hero, index) => (
                    <Item key={hero.id} onClick={() => removeHero(hero, index)}>
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