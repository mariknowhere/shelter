import {FC, useEffect, useState} from "react";
import styles from './SolutionPage.module.scss';
import classNames from "classnames";
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";

const SolutionPage: FC = () => {
    const [isTitleVisible, setTitleVisible]= useState(false);
    const [isImageFirstVisible, setImageFirstVisible]= useState(false);
    const [isImageSecondVisible, setImageSecondVisible]= useState(false);
    const [isImageOtherVisible, setImageOtherVisible]= useState(false);

    useEffect(() => {
        if (!isTitleVisible) {
            setTimeout(() => {
                setTitleVisible(true);
            }, 1000);
        }

        if (isTitleVisible) {
            setTimeout(() => {
                setImageFirstVisible(true);
            }, 1000);
        }

        if (isImageFirstVisible) {
            setTimeout(() => {
                setImageSecondVisible(true);
            }, 1000);
        }

        if (isImageSecondVisible) {
            setTimeout(() => {
                setImageOtherVisible(true);
            }, 1000);
        }
    }, [isImageFirstVisible, isImageSecondVisible, isTitleVisible]);

  return (
    <div className={styles['solution']}>
      <h2 className={classNames(styles['solution-title'], { [styles['solution-title_active']]: isTitleVisible })}>решение</h2>
      <div className={classNames(
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
      <div className={classNames(
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
      <div className={classNames(
              styles['solution-item-wrapper'], styles['solution-item-wrapper_third'], { 'active': isImageOtherVisible }
      )}>
        <div className={styles['solution-item']}>
          <img
            className={styles['solution-item-image']}
            src="/assets/images/solution-3.png"
            alt="использование криптовалюты"
          />
          <h4 className={styles['solution-item-title']}>NEAR</h4>
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
           className={classNames(styles['solution-image-sixth'], { 'active': isImageOtherVisible })}
      />
    </div>
  );
};

export default SolutionPage;
