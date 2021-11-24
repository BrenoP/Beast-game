import { useGame } from '../providers/game';
import Link from 'next/link';

export default function Regras() {

  const { game, setGame } : any = useGame();

  return (
      <>
          { console.log(game) }
          <h3>Regras</h3>
          <p>Escolha seus heróis, cada um tem um dano e um tipo de dano</p>
          <p>Vá em uma jornada enfrentando feras e veja quão longe você vai</p>
          <Link href="/jogo" passHref><button onClick={() => setGame({ gameTime: 2 })}>Iniciar jogo</button></Link>
      </>
  );
}