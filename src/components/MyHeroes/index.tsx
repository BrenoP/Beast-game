import { useContext } from 'react';
import Image from 'next/image';

import { GameContext } from '../../providers/game';
import HeroesList from './HeroesList';
import { 
    Container
} from './style';

export default function MyHeroes() {

    const { 
        deckOfHeroes, 
        setDeckOfHeroes, 
        coins,
        setCoins, 
        lifes
    } : any = useContext(GameContext);

    function removeHero(hero, heroToremove) {
        setDeckOfHeroes(deckOfHeroes.filter((hero, index) => index !== heroToremove));
        setCoins(coins + hero.cost);
    }

    return (
        <Container style={{ flexDirection: "column" }}>
            <h3>Moedas: {coins}</h3>
            <h3>Vidas: {lifes}</h3>
            <h1>lista</h1>
            <HeroesList removeHero={removeHero} />
        </Container>
    );
}