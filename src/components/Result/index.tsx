import Image from 'next/image';
import Link from 'next/link';

import { 
    ContainerResult,
    List,
    Beast
} from './style';
import HeroesList from "../MyHeroes/HeroesList";
import Button from '../Button';

export default function Result({ 
    win, 
    beast,
    nextCreature,
    setNextCreature,
    lifes,
    setLifes,
    condition
}) {

    function goToNextCreature() {
        setNextCreature(!nextCreature);
    }

    return (
        <>
            {
                win !== null && (
                    <>
                        {
                            win ? (
                                <>
                                    <Button onClick={() => goToNextCreature()}>
                                        Próxima criatura
                                    </Button>
                                    <h1>GANHOO</h1>
                                </>
                            ) : (
                                <>
                                    <Button onClick={() => setLifes(lifes - 1)}>
                                        <Link href="/herois" passHref>
                                            Voltar para a loja
                                        </Link>
                                    </Button>
                                    <h1>perdeu :c</h1>
                                    <p>{condition}</p>
                                </>
                            )
                        }
                    </>
                )
            }
            <ContainerResult>
                <List>
                    <HeroesList />
                </List>
                <Beast>
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
                </Beast>
            </ContainerResult>
        </>
    );
}