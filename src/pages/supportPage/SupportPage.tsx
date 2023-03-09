import {FC, useEffect, useRef, useState} from "react";
import styles from './SupportPage.module.scss';
import {IPage} from "../PageTypes";
import classNames from "classnames";

const SupportPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
  const supportBlockRef = useRef(null);
  const [scrollBlockCount, setScrollBlockCount] = useState(100);

  const [isTitleVisible, setTitleVisible]= useState(false);
  const [isTopicVisible, setTopicVisible]= useState(false);
  const [isButtonVisible, setButtonVisible]= useState(false);

  const onWheel = () => {
    if (scrollBlockCount <= -45) {
      setAnimate(true);
    } else {
      setScrollBlockCount(prevState => prevState - 4);
    }

    // @ts-ignore
    supportBlockRef.current!.style.transform = `translate(${scrollBlockCount}%)`;
  }
  
  useEffect(() => {
    if (isAnimate) {
      if (!isTitleVisible) {
        setTimeout(() => {
          setTitleVisible(true);
        }, 500);
      }

      if (isTitleVisible) {
        setTimeout(() => {
          setTopicVisible(true);
        }, 500);
      }

      if (isTopicVisible) {
        setTimeout(() => {
          setButtonVisible(true);
        }, 500);
      }
    }
  }, [isAnimate, isTitleVisible, isTopicVisible]);

  return (
    <div onWheel={onWheel} className={styles['support']}>
      <div className={styles['support-content']}>
        <div className={styles['support-text']}>
          <h2 className={classNames(styles['support-title'], { 'active': isTitleVisible })}>схема предоставления помощи приютам</h2>
          <span className={classNames(styles['support-description'], { 'active': isTopicVisible })}>
            Вся система строится на прозрачности и каждый пользователь сможет отследить историю транзакции.
          </span>
        </div>
        <div ref={supportBlockRef} className={styles['support-block']}>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_yellow.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>Приют</span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_green.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Заявка на получение средств для определенной цели
              </span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_purple.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Рассмотрение заявки от консулов
              </span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_blue.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Одобрение заявки
              </span>
            </div>
          </div>
          <div className={styles['support-block-item']}>
            <img src="/assets/icons/triangle.svg" alt="Треугольник" className={styles['support-block-item-tringle']} />
            <div className={styles['support-block-item-content']}>
              <img src="/assets/images/support_blue.png" alt="Задний фон" />
              <span className={styles['support-block-item-text']}>
                Поступление средств на кошелек приюта
              </span>
            </div>
          </div>
        </div>
        <div className={classNames(styles['support-bottom-wrapper'], { 'active': isButtonVisible })}>
          <div className={styles['support-bottom']}>
            <h4 className={styles['support-bottom-title']}>Ваш приют нуждается в помощи?</h4>
            <button className={styles['support-bottom-button']}>Заполнить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
