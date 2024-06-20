import style from '../ui/main.module.css';

const Benefits = () => {
  return (
    <div className={style.benefits}>
      <h2>
        TBU: когда кассетный подшипник — это больше, чем просто
        подшипник.
      </h2>
      <div className={style.benefitsContainer}>
        <div className={style.benefitsLargeContainer}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={style.benefitsSmallContainer}>
          <div>
            <h5>
              Минимальный крутящий момент при
              <br /> номинальной нагрузке
            </h5>
            <p>
              Минимальный крутящий момент при
              <br /> стандартной нагрузке.
            </p>
          </div>

          <div>
            <h5>
              Улучшенная консистенция смазки для
              <br /> подшипниковых уплотнений, используемых
              <br /> для ж/д транспорта
            </h5>
            <p>
              Улучшенная смазка для подшипниковых
              <br /> уплотнений, используемых в<br /> железнодорожном
              транспорте.
            </p>
          </div>
          <div>
            <h5>Снижение сопротивления качению</h5>
            <p>Уменьшение сопротивления качению.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Benefits };
