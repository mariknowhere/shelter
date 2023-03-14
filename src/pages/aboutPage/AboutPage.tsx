import styles from './AboutPage.module.scss';
import {FC, useEffect, useRef, useState} from "react";
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";
import classNames from "classnames";
import {IPage, PageListEnum} from "../PageTypes";

const AboutPage: FC<IPage> = ({
  isAnimate,
  setAnimate,
  isPageVisible,
  activeSlideIndex
}) => {
  const [isTitleVisible, setTitleVisible]= useState(false);
  const [isImageVisible, setImageVisible]= useState(false);
  const [isTextVisible, setTextVisible]= useState(false);
  const [isButtonVisible, setButtonVisible]= useState(false);

  const [isAnimateDone, setAnimateDone] = useState(false);

  const aboutImageFirstRef = useRef(null);
  const aboutImageSecondRef = useRef(null);
  const aboutImageThirdRef = useRef(null);
  const aboutImageFourthRef = useRef(null);
  const aboutImageFifthRef = useRef(null);

  const [scrollImageFirstCount, setScrollImageFirstCount] = useState(0);
  const [scrollImageSecondCount, setScrollImageSecondCount] = useState(0);
  const [scrollImageThirdCount, setScrollImageThirdCount] = useState(150);
  const [scrollImageFourthCount, setScrollImageFourthCount] = useState(250);
  const [scrollImageFifthCount, setScrollImageFifthCount] = useState(600);

  const onWheel = () => {
    if (scrollImageFifthCount <= -400 && !isAnimate && !isAnimateDone) {
      setAnimate(true);

      // @ts-ignore
      aboutImageFirstRef.current!.classList.add('hidden');
      // @ts-ignore
      aboutImageSecondRef.current!.classList.add('hidden');
      // @ts-ignore
      aboutImageThirdRef.current!.classList.add('hidden');
      // @ts-ignore
      aboutImageFourthRef.current!.classList.add('hidden');
      // @ts-ignore
      aboutImageFifthRef.current!.classList.add('hidden');
    } else if (scrollImageFifthCount < 600 && isAnimateDone) {
      setScrollImageFirstCount(prevState => prevState + 20);
      setScrollImageSecondCount(prevState => prevState + 12);
      setScrollImageThirdCount(prevState => prevState + 20);
      setScrollImageFourthCount(prevState => prevState + 12);
      setScrollImageFifthCount(prevState => prevState + 20);

      // @ts-ignore
      aboutImageFirstRef.current!.classList.remove('hidden');
      // @ts-ignore
      aboutImageSecondRef.current!.classList.remove('hidden');
      // @ts-ignore
      aboutImageThirdRef.current!.classList.remove('hidden');
      // @ts-ignore
      aboutImageFourthRef.current!.classList.remove('hidden');
      // @ts-ignore
      aboutImageFifthRef.current!.classList.remove('hidden');

      if (scrollImageFifthCount === 580 && isAnimateDone) {
        setAnimate(true);
        setAnimateDone(false);
      }

    } else if (!isAnimate) {
      setScrollImageFirstCount(prevState => prevState - 20);
      setScrollImageSecondCount(prevState => prevState - 12);
      setScrollImageThirdCount(prevState => prevState - 20);
      setScrollImageFourthCount(prevState => prevState - 12);
      setScrollImageFifthCount(prevState => prevState - 20);
    }

    if ((PageListEnum.MainPage === activeSlideIndex || PageListEnum.ProblemsPage === activeSlideIndex) && isAnimate) {
      setTimeout(() => {
        if (scrollImageFifthCount >= 580) {
          setAnimateDone(false);
          setAnimate(false);
        } else {
          setAnimateDone(true);
          setAnimate(false);
        }
      }, 2000);
    }

    // @ts-ignore
    aboutImageFirstRef.current!.style.transform = `translateY(${scrollImageFirstCount}%)`;
    // @ts-ignore
    aboutImageSecondRef.current!.style.transform = `translateY(${scrollImageSecondCount}%)`;
    // @ts-ignore
    aboutImageThirdRef.current!.style.transform = `translateY(${scrollImageThirdCount}%)`;
    // @ts-ignore
    aboutImageFourthRef.current!.style.transform = `translateY(${scrollImageFourthCount}%)`;
    // @ts-ignore
    aboutImageFifthRef.current!.style.transform = `translateY(${scrollImageFifthCount}%)`;
  }

  useEffect(() => {
    if (isPageVisible) {
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
  }, [isTitleVisible, isImageVisible, isTextVisible, isPageVisible]);

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
      <img
        src="/assets/images/about-1.png"
        alt="О проекте"
        className={classNames(styles['about-image_third'], { 'active': isImageVisible })}
        ref={aboutImageThirdRef}
      />
      <img
        src="/assets/images/about-2.png"
        alt="О проекте"
        className={classNames(styles['about-image_fourth'], { 'active': isImageVisible })}
        ref={aboutImageFourthRef}
      />
      <img
        src="/assets/images/about-1.png"
        alt="О проекте"
        className={classNames(styles['about-image_fifth'], { 'active': isImageVisible })}
        ref={aboutImageFifthRef}
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
