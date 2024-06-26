import { ReactNode } from 'react';
import style from '../../sass/main/benefits.module.scss';

interface BenefitsCardProps {
  children?: ReactNode;
  title: string;
  text: string;
}

const BenefitsCard = ({
  children,
  title,
  text,
}: BenefitsCardProps) => {
  return (
    <div className={style.card}>
      {children}
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export { BenefitsCard };
