import {FC} from 'react';
import styles from './NearPage.module.scss';

const NearPage: FC = () => {
  return (
    <div className={styles['near']}>
      <div className={styles['near-content']}>
        <div className={styles['near-top']}>
          <div className={styles['near-top-text']}>
            <img src="/assets/icons/paw.svg" alt="NEAR" className={styles['near-top-image']} />
            <h2 className={styles['near-top-title']}>NEAR</h2>
            <h3 className={styles['near-top-topic']}>почему он?</h3>
          </div>
          <div className={styles['near-top-paragraphs']}>
            <p className={styles['near-top-paragraph']}>
              Near Protocol - выбор миллионов пользователей. (ссылка на кол во активных кошельков и транзакций)<br />
              Надежная команда проекта - разработчики Near, команда высокого уровня, имеющая опыт работы в международных
              IT компаниях.Высокая масштабируемость и скорость обработки транзакции делает Near Protocol уникальным
              решением, для стартапов и благотворительных организаций разного уровня. <br />
              Легкая настройка и низкая стоимость операций позволяет понять принцип работы даже новичку.
            </p>
          </div>
        </div>
        <div className={styles['near-bottom']}>
          <div className={styles['near-bottom-item']}>
            <div className={styles['near-bottom-item-images']}>
              <img
                src="/assets/icons/light_white_secondary.svg"
                alt="Искры"
              />
            </div>
            <h4 className={styles['near-bottom-item-title']}>Быстрота</h4>
            <p className={styles['near-bottom-item-paragraph']}>
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
              представляет собой интересный эксперимент проверки новых предложений.
            </p>
          </div>
          <div className={styles['near-bottom-item']}>
            <div className={styles['near-bottom-item-images']}>
              <img
                src="/assets/icons/light_white_secondary.svg"
                alt="Искры"
              />
              <img
                src="/assets/icons/light_white_secondary.svg"
                alt="Искры"
              />
            </div>
            <h4 className={styles['near-bottom-item-title']}>Прозрачность</h4>
            <p className={styles['near-bottom-item-paragraph']}>
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
              представляет собой интересный эксперимент проверки новых предложений.
            </p>
          </div>
          <div className={styles['near-bottom-item']}>
            <div className={styles['near-bottom-item-images']}>
              <img
                src="/assets/icons/light_white_secondary.svg"
                alt="Искры"
              />
              <img
                src="/assets/icons/light_white_secondary.svg"
                alt="Искры"
              />
              <img
                src="/assets/icons/light_white_secondary.svg"
                alt="Искры"
              />
            </div>
            <h4 className={styles['near-bottom-item-title']}>Легкая настройка</h4>
            <p className={styles['near-bottom-item-paragraph']}>
              Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
              представляет собой интересный эксперимент проверки новых предложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearPage;
