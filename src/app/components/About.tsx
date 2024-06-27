import { AboutArticle } from './AboutArticle';
import style from '../../sass/main/about.module.scss'

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.about}>
        <h1><div/><div/>Хватит колесить кругами!</h1>
        <p>
          Представляем инновационную технологию подшипников&nbsp;нового&nbsp;поколения.
          <br/><span>Конический кассетный подшипник (TBU)</span> -
          Надежность&nbsp;и&nbsp;Долговечность!
        </p>
      </div>
      <AboutArticle />
    </div>
  );
};

export { About };
