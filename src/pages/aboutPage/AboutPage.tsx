import styles from './AboutPage.module.scss';
import {FC, useEffect, useRef, useState} from "react";
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";
import classNames from "classnames";
import {IPage} from "../PageTypes";

const AboutPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
  const [isTitleVisible, setTitleVisible]= useState(false);
  const [isImageVisible, setImageVisible]= useState(false);
  const [isTextVisible, setTextVisible]= useState(false);
  const [isButtonVisible, setButtonVisible]= useState(false);

  const aboutImageFirstRef = useRef(null);
  const aboutImageSecondRef = useRef(null);
  const [scrollBlockCount, setScrollBlockCount] = useState(0);

  const onWheel = () => {
    if (scrollBlockCount === 230) {
      setAnimate(true);

      // @ts-ignore
      aboutImageFirstRef.current!.classList.add('hidden');
      // @ts-ignore
      aboutImageSecondRef.current!.classList.add('hidden');
    } else {
      setScrollBlockCount(prevState => prevState + 10);
    }

    // @ts-ignore
    aboutImageFirstRef.current!.style.transform = `translateY(-${scrollBlockCount}%)`;
    // @ts-ignore
    aboutImageSecondRef.current!.style.transform = `translateY(-${scrollBlockCount}%)`;
  }

  useEffect(() => {
    if (isAnimate) {
      if (!isTitleVisible) {
        splitText('data-about-title');
        animateText('data-about-title', 3000);

        setTimeout(() => {
          setTitleVisible(true);
        }, 1000)
      }

      if (isTitleVisible) {
        setTimeout(() => {
          setImageVisible(true);
        }, 500);
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
    }
  }, [isTitleVisible, isImageVisible, isTextVisible, isAnimate]);

  return (
    <div onWheel={onWheel} className={styles['about']}>
      <img
          src="/assets/images/about-1.png"
          alt="О проекте"
          className={classNames(styles['about-image_first'], { 'active': isImageVisible })}
          ref={aboutImageFirstRef}
      />
      <img
          src="/assets/images/about-2.png"
          alt="О проекте"
          className={classNames(styles['about-image_second'], { 'active': isImageVisible })}
          ref={aboutImageSecondRef}
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
          <h2 data-about-title="" className={classNames(styles['about-title_main'], 'magic-text')}>О проекте</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
