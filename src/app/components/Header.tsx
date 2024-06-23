import Link from 'next/link';
import { Logo } from './Logo';
import { SearchButton } from './SearchButton';
import style from '../../sass/header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <div className={style.links}>
          <Logo />
          <Link href='#'>О нас</Link>
          <Link href='#'>Сервисы</Link>
          <Link href='#'>Карьера</Link>
          <Link href='#'>Контакты</Link>
          <Link href='#'>Документы</Link>
        </div>
        <SearchButton/>
      </nav>
    </header>
  );
};

export { Header };
