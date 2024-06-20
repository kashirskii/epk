import TheMap from '@/components/TheMap/TheMap';
import style from '../components/TheMap/regions.module.css';
import { Welcome } from './components/Welcome';
import { WelcomeArticle } from './components/WelcomeArticle';
import { Benefits } from './components/Benefits';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <Welcome />
        <WelcomeArticle/>
        <Benefits/>
      </div>
    </main>
  );
}
