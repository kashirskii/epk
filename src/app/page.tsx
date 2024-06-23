import style from '../components/TheMap/regions.module.css';
import { About } from './components/About';
import { Benefits } from './components/Benefits';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <About />
        <Benefits/>
      </div>
    </main>
  );
}
