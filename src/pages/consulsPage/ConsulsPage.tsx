import {FC, useEffect, useState} from 'react';
import styles from './ConsulsPage.module.scss';
import classNames from "classnames";

const ConsulsPage: FC = () => {
  const [isTopVisible, setTopVisible]= useState(false);
  const [isBodyVisible, setBodyVisible]= useState(false);
  const [isBottomVisible, setBottomVisible]= useState(false);
  const [isGlobusVisible, setGlobusVisible]= useState(false);

  useEffect(() => {
    if (!isTopVisible) {
      setTimeout(() => {
        setTopVisible(true);
      }, 500);
    }

    if (isTopVisible) {
      setTimeout(() => {
        setBodyVisible(true);
      }, 500);
    }

    if (isBodyVisible) {
      setTimeout(() => {
        setBottomVisible(true);
      }, 500);
    }

    if (isBottomVisible) {
      setTimeout(() => {
        setGlobusVisible(true);
      }, 500);
    }
  }, [isBodyVisible, isBottomVisible, isTopVisible]);

  return (
    <div className={styles['consuls']}>
      <img src="/assets/images/globus.png"
           alt="Глобус"
           className={classNames(styles['consuls-globus'], { 'active': isGlobusVisible })}
      />
      <div className={styles['consuls-content']}>
        <div className={classNames(styles['consuls-top'], { 'active': isTopVisible })}>
          <h2 className={styles['consuls-top-title']}>Использование ДАО</h2>
          <span className={styles['consuls-top-description']}>
            Что такое ДАО? Децентрализованная автономная организация - система в блокчейне, которая управляется с
            помощью кода, прозрачна и не зависит от человеческого фактора. Решения в системе принимаются коллегиально.
            В нашем случае в Shelter консулами будут:
          </span>
        </div>
        <div className={classNames(styles['consuls-body'], { 'active': isBodyVisible })}>
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
        <div className={classNames(styles['consuls-bottom'], { 'active': isBottomVisible })}>
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
