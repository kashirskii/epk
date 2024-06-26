import style from '../sass/main/main.module.scss';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Career } from './components/Career';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ООО "ЕПК-Бренко Подшипниковая Компания"',
  description:
    'Предприятие "Епк-Бренко" занимается производством и ремонтом\
    инновационных железнодорожных подшипников кассетного типа для \
    грузовых и пассажирских вагонов. Завод оборудован современным \
    оборудованием для производства высокотехнологичной продукции.',
};

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <About />
        <Benefits />
        <Career />
      </div>
    </main>
  );
}
