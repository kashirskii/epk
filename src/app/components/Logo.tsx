import style from '../ui/header.module.css';
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
