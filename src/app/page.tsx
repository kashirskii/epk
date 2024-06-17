import TheMap from '@/components/TheMap/TheMap';
import style from '../components/TheMap/regions.module.css';

export default function page() {
  return (
    <main className={style.main}>
      <TheMap />
    </main>
  );
}
