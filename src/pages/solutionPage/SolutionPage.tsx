import React, {FC, useEffect, useState} from "react";
import styles from './SolutionPage.module.scss';
import classNames from "classnames";
import { ISolutionPage } from "../PageTypes";

const SolutionPage: FC<ISolutionPage> = ({
  className,
  isAnimate,
  setAnimate,
  titleRef,
  nearImageRef,
  consulsImageRef,
  plansImageRef,
  videoImageRef,
}) => {
    const [isTitleVisible, setTitleVisible]= useState(false);
    const [isImageFirstVisible, setImageFirstVisible]= useState(false);
    const [isImageSecondVisible, setImageSecondVisible]= useState(false);
    const [isImageOtherVisible, setImageOtherVisible]= useState(false);

    useEffect(() => {
          setTimeout(() => {
            setTitleVisible(isAnimate);
          }, 500);

        if (isTitleVisible) {
          setTimeout(() => {
            setImageFirstVisible(isAnimate);
          }, 500);
        }

        if (isImageFirstVisible) {
          setTimeout(() => {
            setImageSecondVisible(isAnimate);
          }, 500);
        }

        if (isImageSecondVisible) {
          setTimeout(() => {
            setImageOtherVisible(isAnimate);
          }, 500);
        }
    }, [isAnimate, isImageFirstVisible, isImageSecondVisible, isTitleVisible]);

  return (
    <div className={classNames(styles['solution'], className)}>
      <h2 ref={titleRef} className={styles['solution-title-wrapper']}>
        <div>п</div>
        <div>р</div>
        <div>о</div>
        <div>б</div>
        <div>л</div>
        <div>е</div>
        <div>м</div>
        <div>а</div>
        <div>т</div>
        <div>и</div>
        <div>к</div>
        <div>а</div>
      </h2>
      <h2 className={classNames(styles['solution-title'], { [styles['solution-title_active']]: isTitleVisible })}>решение</h2>
      <div ref={plansImageRef} className={classNames(
              styles['solution-item-wrapper'], styles['solution-item-wrapper_first'], { 'active': isImageOtherVisible }
      )}>
        <div className={styles['solution-item']}>
          <img
            className={styles['solution-item-image']}
            src="/assets/images/solution-1.png"
            alt="использование криптовалюты"
          />
          <span className={styles['solution-item-text']}>использование криптовалюты</span>
        </div>
      </div>
      <div ref={consulsImageRef} className={classNames(
              styles['solution-item-wrapper'], styles['solution-item-wrapper_second'], { 'active': isImageOtherVisible }
      )}>
        <div className={styles['solution-item']}>
          <img
            className={styles['solution-item-image']}
            src="/assets/images/solution-2.png"
            alt="использование криптовалюты"
          />
          <span className={styles['solution-item-text']}>использование ДАО</span>
        </div>
      </div>
      <div ref={nearImageRef} className={classNames(
              styles['solution-item-wrapper'], styles['solution-item-wrapper_third'], { 'active': isImageOtherVisible }
      )}>
        <div className={styles['solution-item']}>
          <img
            className={styles['solution-item-image']}
            src="/assets/images/solution-3.png"
            alt="использование криптовалюты"
          />
          <h3 className={styles['solution-item-title']}>NEAR</h3>
          <span className={classNames(styles['solution-item-text'], styles['solution-item-text_secondary'])}>
            почему он?
          </span>
        </div>
      </div>
      <img src="/assets/images/solution-4.png"
           alt="Решение"
           className={classNames(styles['solution-image-fourth'], { 'active': isImageFirstVisible })}
      />
      <img src="/assets/images/solution-5.png"
           alt="Решение"
           className={classNames(styles['solution-image-fifth'], { 'active': isImageSecondVisible })}
      />
      <img src="/assets/images/solution-6.png"
           alt="Решение"
           ref={videoImageRef}
           className={classNames(styles['solution-image-sixth'], { 'active': isImageOtherVisible })}
      />
    </div>
  );
};

export default SolutionPage;
