import style from '../../sass/main/benefits.module.scss'
import { BenefitsCard } from './BenefitsCard';
import picture from '../../public/photo.png';
import Image from 'next/image';

const Benefits = () => {
  return (
    <div className={style.wrapper}>
      <h2>
        TBU: когда кассетный подшипник — это больше, чем просто
        подшипник.
      </h2>
      <div className={style.benefits}>
        <BenefitsCard
          title='Минимальные эксплуатационные расходы'
          text='Минимальный момент силы, который можно получить при номинальной нагрузке.'
        >
          <Image src={picture} width={200} height={200} alt='photo' />
        </BenefitsCard>
        <BenefitsCard
          title='Минимальные эксплуатационные расходы'
          text='Минимальный момент силы, который можно получить при номинальной нагрузке.'
        >
          <Image src={picture} width={200} height={200} alt='photo' />
        </BenefitsCard>
        <BenefitsCard
          title='Минимальные эксплуатационные расходы'
          text='Минимальный момент силы, который можно получить при номинальной нагрузке.'
        >
          <Image src={picture} width={200} height={200} alt='photo' />
        </BenefitsCard>
        <BenefitsCard
          title='Минимальный крутящий момент при номинальной нагрузке'
          text='Минимальный крутящий момент при стандартной нагрузке.'
        />
        <BenefitsCard
          title='Улучшенная консистенция смазки для подшипниковых уплотнений, используемых для ж/д транспорта'
          text='Улучшенная смазка для подшипниковых уплотнений, используемых в железнодорожном транспорте.'
        />
        <BenefitsCard
          title='Снижение сопротивления качению'
          text='Уменьшение сопротивления качению.'
        />
      </div>
    </div>
  );
};

export { Benefits };
