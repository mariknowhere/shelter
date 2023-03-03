import styles from './AboutPage.module.scss';
import {FC, useEffect, useState} from "react";
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";
import classNames from "classnames";

const AboutPage: FC = () => {
  const [isTitleVisible, setTitleVisible]= useState(false);
  const [isImageVisible, setImageVisible]= useState(false);
  const [isTextVisible, setTextVisible]= useState(false);
  const [isButtonVisible, setButtonVisible]= useState(false);

  useEffect(() => {
    if (!isTitleVisible) {
      splitText('data-about-title');
      animateText('data-about-title', 2000);

      setTitleVisible(true);
    }

    if (isTitleVisible) {
      setTimeout(() => {
        setImageVisible(true);
      }, 1000);
    }

    if (isImageVisible) {
      setTimeout(() => {
        setTextVisible(true);
      }, 500);
    }

    if (isTextVisible) {
      setTimeout(() => {
        setButtonVisible(true);
      }, 500);
    }

  }, [isTitleVisible, isImageVisible, isTextVisible]);

  return (
    <div className={styles['about']}>
      <img
          src="/assets/images/about-1.png"
          alt="О проекте"
          className={classNames(styles['about-image_first'], { 'active': isImageVisible })}
      />
      <img
          src="/assets/images/about-2.png"
          alt="О проекте"
          className={classNames(styles['about-image_second'], { 'active': isImageVisible })}
      />
      <div className={styles['about-content']}>
        <div className={styles['about-left-panel']}>
          <div className={classNames(styles['about-text'], {'active': isTextVisible})}>
            <h3 className={styles['about-title']}>
              Благотворительный проект помощи животным на основе блокчейн и DAO технологии.
            </h3>
            <p className={styles['about-paragraph']}>
              С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения
              направлений прогрессивного развития. Повседневная практика показывает, что начало повседневной работы по
              формированию позиции позволяет выполнять важные задания.
            </p>
          </div>
          <div className={classNames(styles['about-text'], {'active': isTextVisible})}>
            <p className={styles['about-paragraph']}>
              С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения
              направлений прогрессивного развития. Повседневная практика показывает.
            </p>
            <p className={styles['about-paragraph']}>
              С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения
              направлений прогрессивного развития. Повседневная практика показывает, что начало повседневной работы по
              формированию позиции позволяет выполнять важные задания.
            </p>
          </div>
          <button  className={classNames(styles['about-button'], {'active': isButtonVisible})}>
            узнать подробнее
          </button>
        </div>
        <div className={styles['about-right-panel']}>
          <div className={classNames(styles['about-text'], {'active': isTextVisible})}>
            <p className={styles['about-paragraph']}>
              С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения
              направлений прогрессивного развития. Повседневная практика показывает.
            </p>
            <p className={styles['about-paragraph']}>
              С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения
              направлений прогрессивного развития. Повседневная практика показывает, что начало повседневной работы по
              формированию позиции позволяет выполнять важные задания.
            </p>
          </div>
          <h2 data-about-title className={classNames(styles['about-title_main'], 'magic-text')}>О проекте</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
