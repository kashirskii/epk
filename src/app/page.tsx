import style from '../sass/main/main.module.scss'
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Career } from './components/Career';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <About />
        <Benefits/>
        <Career/>
      </div>
    </main>
  );
}
