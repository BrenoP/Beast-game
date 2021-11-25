import Image from 'next/image';
import Link from 'next/link';

import { useGame } from '../../providers/game';
import { 
    Container,
    Item
} from './style';

export default function ListOfHeroes({ heroes }) {

    let allHeroes = heroes;
    const heroesGroup = [];
    const { deckOfHeroes, setDeckOfHeroes } : any = useGame();

    function selectHero(hero) {
        allHeroes[hero.id -1].selected = true;
        heroesGroup.push(hero)
        setDeckOfHeroes([...deckOfHeroes, hero])
    }

    return (
        <Container>
            { console.log(deckOfHeroes) }
            {
                allHeroes.map(hero => (
                    <Item 
                        key={hero.id} 
                        isSelected={hero.selected}
                        onClick={() => selectHero(hero)}
                    >    
                        <Image src={hero.icon} alt="" width="100" height="100" />
                        <p>{hero.name}</p>
                        <p>Dano: {hero.damage}</p>
                        <p>Tipo: {hero.type}</p>
                    </Item>
                ))
            }
            <Link 
                href="/jornada" 
                passHref
            >
                <button>
                    Iniciar jogo
                </button>
            </Link>
        </Container>
    )
}
