import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import classNames from "classnames";
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";

const MainPage = () => {
  const [isTitleVisible, setTitleVisible]= useState(false);
  const [isTopicVisible, setTopicVisible]= useState(false);
  const [isNotationVisible, setNotationVisible]= useState(false);
  const [isArrowsVisible, setArrowsVisible]= useState(false);
  const [isDonationsVisible, setDonationsVisible]= useState(false);
  const [isPurpleBlockVisible, setPurpleBlockVisible]= useState(false);

  useEffect(() => {
    if (!isTitleVisible) {
      splitText('data-main-title');
      animateText('data-main-title', 2000);

      setTitleVisible(true);
    }

    if (isTitleVisible) {
      setTimeout(() => {
        setPurpleBlockVisible(true);
      }, 500);
    }

    if (isPurpleBlockVisible) {
      setTimeout(() => {
        setTopicVisible(true);
      }, 500);
    }
    
    if (isTopicVisible) {
      setTimeout(() => {
        setNotationVisible(true);
      }, 500);
    }

    if (isNotationVisible) {
      setTimeout(() => {
        setArrowsVisible(true);
      }, 500);
    }

    if (isArrowsVisible) {
      setTimeout(() => {
        setDonationsVisible(true);
      }, 500);
    }

  }, [isArrowsVisible, isNotationVisible, isPurpleBlockVisible, isTitleVisible, isTopicVisible]);

  return (
    <div className={styles['main']}>
      <div className={styles['main-navbar-wrapper']}>
        <div className={styles['main-navbar-circle']} />
        <ul className={styles['main-navbar']}>
          <li className={styles['main-navbar-item']}>
            <img src="/assets/icons/light_black.svg" alt="О проекте" />
            <a href="/#" className={styles['main-navbar-item-text']}>О проекте</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a href="/#" className={styles['main-navbar-item-text']}>Медиа</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a href="/#" className={styles['main-navbar-item-text']}>Проблематика</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a href="/#" className={styles['main-navbar-item-text']}>Решение</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a href="/#" className={styles['main-navbar-item-text']}>Roadmap</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a href="/#" className={styles['main-navbar-item-text']}>Команда</a>
          </li>
          <li className={styles['main-navbar-item']}>
            <a href="/#" className={styles['main-navbar-item-text']}>Контакты</a>
          </li>
        </ul>
      </div>
      <div className={styles['main-text']}>
        <h1 data-main-title className={classNames(styles['main-title'], 'magic-text')}>!Shelter</h1>
        <h2 className={classNames(styles['main-topic'], {'active': isTopicVisible})}>
          уникальный благотворительный<br /> проект
        </h2>
        <div className={classNames(styles['main-donations-wrapper'], { 'active': isDonationsVisible })}>
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
        <div className={classNames(styles['main-list-block'], { 'active': isPurpleBlockVisible })}/>
        <div className={styles['main-list']}>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
          <div className={styles['main-list-item']}>
            <img src="/assets/icons/light_black.svg" alt="Вместе мы сможем помочь" />
            <span className={styles['main-list-item-text']}>Вместе мы сможем помочь</span>
          </div>
        </div>
      </div>
      <div className={styles['main-notation-wrapper']}>
        <img
            src="/assets/icons/arrows.svg"
            alt="Стрелки"
            className={classNames(styles['main-notation-dots'], {'active': isArrowsVisible})}
        />
        <div className={classNames(styles['main-notation'], {'active': isNotationVisible})}>
          <img src="/assets/icons/dots.svg" alt="Кавычки" />
          <span className={styles['main-notation-text']}>
            Благотворительный проект помощи животным на основе<br /> блокчейн и DAO технологии.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
