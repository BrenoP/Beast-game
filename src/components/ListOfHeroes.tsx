import Image from 'next/image';

export default function ListOfHeroes({ heroes }) {
    return (
        <div>
            {
                heroes.map(hero => (
                    <li key={hero.id}>    
                        <Image src={hero.icon} alt="" width="100" height="100" />
                        {hero.name}
                    </li>
                ))
            }

        </div>
    )
}

