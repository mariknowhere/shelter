import {FC, useEffect, useRef, useState} from 'react';
import styles from './RoadmapPage.module.scss';
import classNames from "classnames";
import {IPage} from "../PageTypes";
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";

const RoadmapPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
  const roadmapBlockRef = useRef(null);
  const [scrollBlockCount, setScrollBlockCount] = useState(60);
  const [isTitleVisible, setTitleVisible]= useState(false);

  const onWheel = () => {
    if (scrollBlockCount === -50) {
      setAnimate(true)
    } else {
      setScrollBlockCount(prevState => prevState - 1)
    }

    // @ts-ignore
    roadmapBlockRef.current!.style.transform = `translate(${scrollBlockCount}%)`;
  }
  
  useEffect(() => {
    if (!isTitleVisible) {
      splitText('data-roadmap-title');
      animateText('data-roadmap-title', 3500);

      setTitleVisible(true);
    }
  }, [isTitleVisible]);

  return (
    <div onWheel={onWheel} className={styles['roadmap']}>
      <img src="/assets/icons/light_white_secondary.svg" alt="Roadmap" className={styles['roadmap-light']} />
      <div className={styles['roadmap-block-wrapper']}>
        <img src="/assets/icons/light_white_secondary.svg" alt="Roadmap" className={styles['roadmap-block-light']} />
        <h2 data-roadmap-title="" className={classNames(styles['roadmap-block-title'], 'magic-text')}>roadmap</h2>
        <div ref={roadmapBlockRef} className={styles['roadmap-block']}>
          <div className={styles['roadmap-block-item']}>
            <div className={styles['roadmap-block-item-image-wrapper']}>
              <img src="/assets/images/roadmap-1.png" alt="Фото" />
            </div>
            <div className={styles['roadmap-block-item-content']}>
              <span className={styles['roadmap-block-item-topic']}>1Q</span>
              <h3 className={classNames(styles['roadmap-block-item-title'], styles['roadmap-block-item-title_secondary'])}>
                создание shelter
              </h3>
              <span className={styles['roadmap-block-item-description']}>
                Значимость этих проблем настолько очевидна, что постоянный.
              </span>
              <h3 className={styles['roadmap-block-item-title']}>
                создание DAO
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                помощь приютам по заявкам
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Разработка Shelter dApp
              </h3>
            </div>
          </div>
          <div className={styles['roadmap-block-item']}>
            <div className={styles['roadmap-block-item-image-wrapper']}>
              <img src="/assets/images/roadmap-2.png" alt="Фото" />
            </div>
            <div className={styles['roadmap-block-item-content']}>
              <span className={styles['roadmap-block-item-topic']}>2Q</span>
              <h3 className={styles['roadmap-block-item-title']}>
                Дроп NFT топ донатерам
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Запуск Shelter dapp
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                доступ к shelter dapp держателям NFT
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Разработка Shelter dApp
              </h3>
            </div>
          </div>
          <div className={styles['roadmap-block-item']}>
            <div className={styles['roadmap-block-item-image-wrapper']}>
              <img src="/assets/images/roadmap-3.png" alt="Фото" />
            </div>
            <div className={styles['roadmap-block-item-content']}>
              <span className={styles['roadmap-block-item-topic']}>3Q</span>
              <h3 className={styles['roadmap-block-item-title']}>
                Дроп NFT топ донатерам
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Запуск Shelter dapp
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                доступ к shelter dapp держателям NFT
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Разработка Shelter dApp
              </h3>
            </div>
          </div>
          <div className={styles['roadmap-block-item']}>
            <div className={styles['roadmap-block-item-image-wrapper']}>
              <img src="/assets/images/roadmap-3.png" alt="Фото" />
            </div>
            <div className={styles['roadmap-block-item-content']}>
              <span className={styles['roadmap-block-item-topic']}>3Q</span>
              <h3 className={styles['roadmap-block-item-title']}>
                Дроп NFT топ донатерам
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Запуск Shelter dapp
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                доступ к shelter dapp держателям NFT
              </h3>
              <h3 className={styles['roadmap-block-item-title']}>
                Разработка Shelter dApp
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
