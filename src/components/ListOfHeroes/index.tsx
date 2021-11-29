import Image from 'next/image';
import Swal from 'sweetalert2';

import { useGame } from '../../providers/game';
import { 
    Container,
    Item
} from './style';

export default function ListOfHeroes({ heroes }) {

    let allHeroes = heroes;
    const heroesGroup = [];
    const { 
        deckOfHeroes, 
        setDeckOfHeroes,
        coins, 
        setCoins
    } : any = useGame();

    function selectHero(hero) {
        if(coins >= hero.cost) {
            setCoins(coins - hero.cost);
            allHeroes[hero.id -1].selected = true;
            heroesGroup.push(hero);
            setDeckOfHeroes([...deckOfHeroes, hero]);
        } else {
            Swal.fire({
                icon: 'error',
                title: "Você não tem moedas suficientes",
                showCloseButton: true,
                confirmButtonText: 'Ok',
            })
        }
    }

    return (
        <Container>
            {
                allHeroes.map(hero => (
                    <Item 
                        key={hero.id} 
                        isSelected={hero.selected}
                        onClick={() => selectHero(hero)}
                    >    
                        <div>
                            <Image src={hero.iconPNG} alt="" width="100" height="100" />
                        </div>
                        <h4>{hero.name}</h4>
                        <p>Dano: {hero.damage}</p>
                        <p>Tipo: {hero.type}</p>
                        <p>Custo: {hero.cost}</p>
                    </Item>
                ))
            }
        </Container>
    )
}

