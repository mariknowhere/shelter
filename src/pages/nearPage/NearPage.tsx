import {FC, useEffect, useState} from 'react';
import styles from './NearPage.module.scss';
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";
import classNames from "classnames";

const NearPage: FC = () => {
  const [isTitleVisible, setTitleVisible]= useState(false);
  const [isTopicVisible, setTopicVisible]= useState(false);
  const [isParagraphVisible, setParagraphVisible]= useState(false);
  const [isItemFirstVisible, setItemFirstVisible]= useState(false);
  const [isItemSecondVisible, setItemSecondVisible]= useState(false);
  const [isItemThirdVisible, setItemThirdVisible]= useState(false);
  const [isPawVisible, setPawVisible]= useState(false);

  useEffect(() => {
    if (!isTitleVisible) {
      splitText('data-near-title');
      animateText('data-near-title', 2000);

      setTitleVisible(true);
    }

    if (isTitleVisible) {
      setTimeout(() => {
        setTopicVisible(true);
      }, 500);
    }

    if (isTopicVisible) {
      setTimeout(() => {
        setItemFirstVisible(true);
        setPawVisible(true);
      }, 500);
    }

    if (isItemFirstVisible) {
      setTimeout(() => {
        setItemSecondVisible(true);
      }, 500);
    }

    if (isItemSecondVisible) {
      setTimeout(() => {
        setParagraphVisible(true);
      }, 300);
    }

    if (isParagraphVisible) {
      setTimeout(() => {
        setItemThirdVisible(true);
      }, 500);
    }
  }, [isItemFirstVisible, isItemSecondVisible, isParagraphVisible, isTitleVisible, isTopicVisible]);

  return (
    <div className={styles['near']}>
      <div className={styles['near-content']}>
        <div className={styles['near-top']}>
          <div className={styles['near-top-text']}>
            <img src="/assets/icons/paw.svg"
                 alt="NEAR"
                 className={classNames(styles['near-top-image'], { 'active': isPawVisible })}
            />
            <h2 data-near-title="" className={classNames(styles['near-top-title'], 'magic-text')}>NEAR</h2>
            <h3 className={classNames(styles['near-top-topic'], { 'active': isTopicVisible })}>почему он?</h3>
          </div>
          <div className={styles['near-top-paragraphs']}>
            <p className={classNames(styles['near-top-paragraph'], { 'active': isParagraphVisible })}>
              Near Protocol - выбор миллионов пользователей. (ссылка на кол во активных кошельков и транзакций)<br />
              Надежная команда проекта - разработчики Near, команда высокого уровня, имеющая опыт работы в международных
              IT компаниях.Высокая масштабируемость и скорость обработки транзакции делает Near Protocol уникальным
              решением, для стартапов и благотворительных организаций разного уровня. <br />
              Легкая настройка и низкая стоимость операций позволяет понять принцип работы даже новичку.
            </p>
          </div>
        </div>
        <div className={styles['near-bottom']}>
          <div className={classNames(styles['near-bottom-item'], { 'active': isItemFirstVisible })}>
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
          <div className={classNames(styles['near-bottom-item'], { 'active': isItemSecondVisible })}>
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
          <div className={classNames(styles['near-bottom-item'], { 'active': isItemThirdVisible })}>
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
