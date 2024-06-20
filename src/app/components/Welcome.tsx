import style from '../ui/main.module.css';

const Welcome = () => {
  return (
      <div className={style.welcome}>
        <h1>Хватит колесить кругами!</h1>
        <p>
          Представляем инновационную технологию подшипников нового
          поколения.
          <br /> <span>Конический кассетный подшипник (TBU)</span> -
          Надежность и Долговечность!
        </p>
      </div>
  );
};

export { Welcome };
