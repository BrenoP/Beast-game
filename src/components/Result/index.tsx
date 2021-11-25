import { useContext } from "react";
import Image from 'next/image';

import { GameContext } from '../../providers/game';
import { 
    Item
} from '../ListOfHeroes/style';

export default function Result({ 
    win, 
    beast,
    nextCreature,
    setNextCreature
}) {

    const { deckOfHeroes } : any = useContext(GameContext);

    function goToNextCreature() {
        setNextCreature(!nextCreature)
    }

    return (
        <>
            {win !== null && <h1>{win ? "GANHOO!" : "perdeu :c"}</h1>}
            <button onClick={() => goToNextCreature()}>Próxima criatura</button>
            <div style={{ display: 'flex' }}>
                <div>
                    {
                        deckOfHeroes.map(hero => (
                            <Item key={hero.id}>
                                <Image src={hero.icon} alt="" width="100" height="100" />
                                <p>{hero.name}</p>
                                <p>Dano: {hero.damage}</p>
                                <p>Tipo: {hero.type}</p>
                            </Item>
                        ))
                    }
                </div>
                <div>
                    {
                        beast && (
                            <>
                                <Image src={beast.icon} alt="" width="100" height="100" />
                                <h2>{beast.name}</h2>
                                <p>Tipo: {beast.type}</p>
                                <p>Vida: {beast.life}</p>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}