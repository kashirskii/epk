import style from '../../sass/header.module.scss';
import { Kelly_Slab } from 'next/font/google';

const kelly = Kelly_Slab({
  subsets: ['cyrillic'],
  weight: '400',
});

const Logo = () => {
  return (
    <div className={[style.logo, kelly.className].join(' ')}>
      <svg
        height='24'
        viewBox='0 0 150 74'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M150 72.2603C146.247 4.84527 55.3436 21.3728 60.7645 74C48.0982 74 47.8378 74 42 74C42 60.7885 47.8378 23.1125 89.5367 19.1981C143.328 15.7187 150 59.0488 150 72.2603Z'
          fill='url(#paint0_linear_253_6)'
        />
        <path
          d='M150 71.6593C144.788 -19.0445 18.5328 3.19252 26.0618 74C8.46969 74 8.10811 74 0 74C0 56.2246 8.10811 5.53323 66.0232 0.26656C140.734 -4.41489 150 53.8838 150 71.6593Z'
          fill='url(#paint1_linear_253_6)'
        />
        <path
          d='M150 72C145.5 -5.5 36.5 13.5 43 74C27.8122 74 27.5 74 20.5 74C20.5 58.8121 27.5 15.5 77.5 11C142 7 150 56.8121 150 72Z'
          fill='url(#paint2_linear_253_6)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_253_6'
            x1='115.278'
            y1='8.74546'
            x2='0.208845'
            y2='-11.2903'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#005EA7' />
            <stop offset='1' stop-color='white' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_253_6'
            x1='144.5'
            y1='7.49999'
            x2='6.62292'
            y2='-6.69402'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#005EA7' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_253_6'
            x1='135'
            y1='30.5'
            x2='81'
            y2='82'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='white' />
            <stop offset='1' stopColor='#005EA8' />
          </linearGradient>
        </defs>
      </svg>
      <div>
        EPK-Brenco
        <span>Подшипниковая&nbsp;Компания</span>
      </div>
    </div>
  );
};

export { Logo };
