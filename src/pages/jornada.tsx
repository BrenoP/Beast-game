import { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import { GameContext, useGame } from '../providers/game';
import { 
    Item
} from '../components/ListOfHeroes/style';

export default function Jorney() {

    const [timeScreen, setTimeScreen] = useState(1);
    const { deckOfHeroes } : any = useContext(GameContext);

    useEffect(() => {
        if(timeScreen < 3) {
            if(timeScreen === 1) {
                setTimeout(() => {
                    setTimeScreen(2)
                }, 5000)
            } else {
                setTimeout(() => {
                    setTimeScreen(3)
                }, 2000)
            }
        }
    }, [timeScreen]);

    return (
        <>
            <h1>
                {
                    timeScreen === 1 ? "criatura" : 
                    timeScreen === 2 ? "lutando..." : 
                    "resultado" 
                }
            </h1>
            <div style={{ display: 'flex' }}>
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
        </>
    );
}