import style from '../../sass/header.module.scss'
import { Kelly_Slab } from 'next/font/google';

const kelly = Kelly_Slab({
  subsets: ['cyrillic'],
  weight: '400',
});

const Logo = () => {
  return (
    <div className={[style.logo, kelly.className].join(' ')}>
      EPK-Brenco
    </div>
  );
};

export { Logo };
