import { GameProvider } from '../providers/game';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  )
}

export default MyApp
