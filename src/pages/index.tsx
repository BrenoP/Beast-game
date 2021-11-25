import Link from 'next/link';

export default function Regras() {

  return (
      <>
          <h3>Regras</h3>
          <p>Escolha seus heróis, cada um tem um dano e um tipo de dano</p>
          <p>Vá em uma jornada enfrentando feras e veja quão longe você vai</p>
          <Link href="/herois" passHref><button>Iniciar jogo</button></Link>
      </>
  );
}