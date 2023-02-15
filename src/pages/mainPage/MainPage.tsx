import React from 'react';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles['main']}>
      <div className={styles['main-navbar-wrapper']}>
        <div className={styles['main-navbar-circle']} />
        <ul className={styles['main-navbar']}>
          <li className={styles['main-navbar-item']}>
            <img src="/assets/icons/light_black.svg" alt="О проекте" className={styles['main-navbar-item-image']}/>
            <a className={styles['main-navbar-item-text']}>О проекте</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a className={styles['main-navbar-item-text']}>Медиа</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a className={styles['main-navbar-item-text']}>Проблематика</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a className={styles['main-navbar-item-text']}>Решение</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a className={styles['main-navbar-item-text']}>Roadmap</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a className={styles['main-navbar-item-text']}>Команда</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a className={styles['main-navbar-item-text']}>Контакты</a>
          </li>
        </ul>
      </div>
      <div className={styles['main-text']}>
        <h1 className={styles['main-title']}>!Shelter</h1>
        <h2 className={styles['main-topic']}>уникальный благотворительный<br /> проект</h2>
        <div className={styles['main-donations-wrapper']}>
          <div className={styles['main-donations']}>
            <div className={styles['main-donations-top']}>
              <img src="/assets/icons/light_white.svg" alt="Донаты" className={styles['main-donations-image']} />
              <h3 className={styles['main-donations-top-title']}>ДОНАТЫ</h3>
              <span className={styles['main-donations-top-text']}>вместе мы сможем помочь приютам</span>
            </div>
            <div className={styles['main-donations-bottom']}>
              <button className={styles['main-donations-bottom-title']}>Задонатить</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['main-list-wrapper']}>
        <div className={styles['main-list-block']}/>
        <div className={styles['main-list']}>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" className={styles['main-list-item-image']} />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" className={styles['main-list-item-image']} />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" className={styles['main-list-item-image']} />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" className={styles['main-list-item-image']} />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
        </div>
      </div>
      <div className={styles['main-notation-wrapper']}>
        <img src="/assets/icons/arrows.svg" alt="Стрелки" className={styles['main-notation-dots']} />
        <div className={styles['main-notation']}>
          <img src="/assets/icons/dots.svg" alt="Кавычки" className={styles['main-notation-image']} />
          <span className={styles['main-notation-text']}>
            Благотворительный проект помощи животным на основе<br /> блокчейн и DAO технологии.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
