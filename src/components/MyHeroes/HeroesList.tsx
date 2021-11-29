import { useContext } from 'react';
import Image from 'next/image';
import { GameContext } from '../../providers/game';

import { 
    ListMyHeroes,
    Item
} from './style';

export default function HeroesList(removeHero) {

    const { deckOfHeroes } : any = useContext(GameContext);

    return(
        <ListMyHeroes>
            {
                deckOfHeroes.map((hero, index) => (
                    <Item key={hero.id} onClick={() => removeHero(hero, index)}>
                        <Image src={hero.iconSVG} alt="" width="25" height="25" />
                        <p>{hero.name}</p>
                        <p>Dano: {hero.damage}</p>
                        <p>Tipo: {hero.type}</p>
                    </Item>
                ))
            }
        </ListMyHeroes>
    );
}