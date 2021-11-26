import Link from 'next/link';

import ContainerCenter from '../components/ContainerCenter';
import Button from '../components/Button';

export default function Regras() {

  return (
      <ContainerCenter justCenter={false}>
          <h3>Bem vindo ao jogo das feras</h3>
          <p>
            O objetivo do jogo é conseguir com seu grupo de heróis chegar ao final da 
            jornada na menor quantidade de tentativas possíveis.
          </p>
          <ul>
            <li>Primeiro Escolha seus heróis, cada um tem um dano e um tipo de dano</li>
            <li>Vá em uma jornada enfrentando feras e veja quão longe você vai</li>
            <li>As feras possuem uma vida e um tipo, mas cuidado, criaturas especiais requerem heróis específicos</li>
            <li>E atenção na jornada, algumas criaturas podem matar seus heróis</li>
          </ul>
          <Button>
            <Link href="/herois" passHref>
              Iniciar jogo
            </Link>
          </Button>
      </ContainerCenter>
  );
}