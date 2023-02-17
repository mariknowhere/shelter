import {FC} from 'react';
import styles from './ConsulsPage.module.scss';

const ConsulsPage: FC = () => {
  return (
    <div className={styles['consuls']}>
      <img src="/assets/images/globus.png" alt="Глобус" className={styles['consuls-globus']}/>
      <div className={styles['consuls-content']}>
        <div className={styles['consuls-top']}>
          <h2 className={styles['consuls-top-title']}>Использование ДАО</h2>
          <span className={styles['consuls-top-description']}>
            Что такое ДАО? Децентрализованная автономная организация - система в блокчейне, которая управляется с
            помощью кода, прозрачна и не зависит от человеческого фактора. Решения в системе принимаются коллегиально.
            В нашем случае в Shelter консулами будут:
          </span>
        </div>
        <div className={styles['consuls-body']}>
          <h3 className={styles['consuls-body-title']}>Консулы</h3>
          <div className={styles['consuls-body-list']}>
            <div className={styles['consuls-body-item']}>
              <img src="/assets/images/jurist.png" alt="Юрист" />
              <div className={styles['consuls-body-item-text']}>
                <h4 className={styles['consuls-body-item-name']}>Егор Еремеев</h4>
                <h5 className={styles['consuls-body-item-title']}>ЮРИСТ</h5>
              </div>
            </div>
            <div className={styles['consuls-body-item']}>
              <img src="/assets/images/analytic.png" alt="Аналитик" />
              <div className={styles['consuls-body-item-text']}>
                <h4 className={styles['consuls-body-item-name']}>Александр Яшин</h4>
                <h5 className={styles['consuls-body-item-title']}>АНАЛИТИК</h5>
              </div>
            </div>
            <div className={styles['consuls-body-item']}>
              <img src="/assets/images/media-person.png" alt="Медийная персона" />
              <div className={styles['consuls-body-item-text']}>
                <h4 className={styles['consuls-body-item-name']}>Полина Александровна</h4>
                <h5 className={styles['consuls-body-item-title']}>МЕДИЙНАЯ ПЕРСОНА</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['consuls-bottom']}>
          <h3 className={styles['consuls-bottom-title']}>Прозрачность</h3>
          <span className={styles['consuls-bottom-description']}>
            Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности
            представляет собой интересный эксперимент проверки новых предложений.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConsulsPage;
