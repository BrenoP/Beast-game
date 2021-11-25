import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

import { GameContext } from '../providers/game';
import Result from '../components/Result';

export default function Jorney() {

    const [timeScreen, setTimeScreen] = useState(0);
    const [beastIndex, setBeastIndex] = useState(0);
    const [beast, setBeast] = useState(null);
    const [allbeasts, setAllBeasts] = useState(null);
    const [win, setWin] = useState(null);
    const [nextCreature, setNextCreature] = useState(false);
    const { deckOfHeroes, coins, setCoins } : any = useContext(GameContext);

    useEffect(() => {
        getBeast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(allbeasts) {
            setBeast(allbeasts[beastIndex]);
            setBeastIndex(beastIndex + 1);
            setTimeScreen(1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextCreature]);

    useEffect(() => {
        if(timeScreen === 1) {
            battleStarts()
        }
        if(timeScreen === 2) {
            battleResults()
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeScreen]);

    async function getBeast() {
        const response = await axios.get(`http://localhost:3000/api/beasts`);
        const data = await response.data;
        setAllBeasts(data);
        setBeast(data[beastIndex]);
        setBeastIndex(beastIndex !== 0 ? 0 : beastIndex + 1);
        setTimeScreen(1);
    }

    function battleStarts() {
        Swal.fire({
            imageUrl: beast.icon,
            imageHeight: 200,
            title: `${beast.name}`,
            html: `<p>Tipo: ${beast.type} </p>` +
            `<p>Vida: ${beast.life} </p>`,
            showCloseButton: true,
            confirmButtonText: 'Lutar',
        }).then(() => {
            setTimeScreen(2);
        });
    }

    function battleResults() {
        let heroesCanWin = false;
        let totalHeroesDamage = 0;
        deckOfHeroes.map(hero => {
            if(beast.type === "Voador") {
                if(hero.type === "A distância") {
                    heroesCanWin = true
                } 
            } else {
                heroesCanWin = true
            }
            totalHeroesDamage = totalHeroesDamage + hero.damage;
        });
        if(heroesCanWin && totalHeroesDamage > beast.life) {
            setWin(true);
            setCoins(coins + 1);
        } else {
            setWin(false);
        }
        setTimeout(() => {
            setTimeScreen(3);
        }, 2000);
    }

    return (
        <>
            <h1>
                {
                    timeScreen === 1 ? null : 
                    timeScreen === 2 ? "lutando..." : 
                    <Result 
                        win={win} 
                        beast={beast}
                        nextCreature={nextCreature}
                        setNextCreature={setNextCreature}
                    />
                }
            </h1>
        </>
    );
}