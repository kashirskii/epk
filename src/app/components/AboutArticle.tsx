import Image from 'next/image';
import logo from '../../public/photo.png';
import style from '../../sass/main/about.module.scss';
import { AnimateImage } from './AnimateImage';

const AboutArticle = () => {
  return (
    <article>
      <AnimateImage>
        <Image
          src={logo}
          alt='подшипник'
          height={200}
          width={200}
          className={style.img}
        />
      </AnimateImage>
      <div className={style.text}>
        <p>
          Век цилиндрических подшипников закончился.
          «Рабочая&nbsp;лошадка» железнодорожной индустрии
          современного мира&nbsp;-&nbsp;
          конический кассетный подшипник.
        </p>
        <p>
          По сравнению c цилиндрическими, подшипники TBU производства
          «ЕПК&ndash;Бренко» обеспечивают более
           высокую грузоподъёмность вагона и более 
          высокие скорости движения поездов.
        </p>
        <p>
          В отличие от цилиндрических, кассетный подшипник TBU
          является цельным узлом, который не требует регулировки перед
          монтажом и дополнительной смазки. Подшипники TBU
          обеспечивают более высокую осевую нагрузку и межремонтный
          пробег до 800&nbsp;000 км, а также не требуют обслуживания
          на протяжении всего гарантийного срока службы (8 лет).
        </p>
      </div>
    </article>
  );
};

export { AboutArticle };
