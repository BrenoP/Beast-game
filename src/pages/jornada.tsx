import { useContext, useEffect, useState } from "react";
import Image from 'next/image';
import Swal from 'sweetalert2';

import { GameContext } from '../providers/game';
import { 
    Item
} from '../components/ListOfHeroes/style';

export default function Jorney() {

    const [timeScreen, setTimeScreen] = useState(1);
    const { deckOfHeroes } : any = useContext(GameContext);

    useEffect(() => {
        if(timeScreen === 1) {
            Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'Something went wrong!',
                showCloseButton: true,
            }).then(() => {
                setTimeScreen(2)
            })
        }
        if(timeScreen === 2) {
            setTimeout(() => {
                setTimeScreen(3)
            }, 2000)
        } 
    }, [timeScreen]);

    return (
        <>
            <h1>
                {
                    timeScreen === 1 ? null : 
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