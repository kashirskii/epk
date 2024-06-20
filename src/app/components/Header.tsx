import Link from 'next/link';
import { Logo } from './Logo';
import style from '../ui/header.module.css';
import { SearchButton } from './SearchButton';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
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
