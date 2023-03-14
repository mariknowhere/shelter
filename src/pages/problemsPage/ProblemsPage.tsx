import React, {FC, useRef, useState} from 'react';
import styles from './ProblemsPage.module.scss';
import classNames from "classnames";
import {IPage, PageListEnum} from "../PageTypes";
import SolutionPage from "../solutionPage/SolutionPage";
import NearPage from "../nearPage/NearPage";
import ConsulsPage from "../consulsPage/ConsulsPage";
import PlansPage from "../plansPage/PlansPage";
import VideoPage from "../videoPage/VideoPage";

let topLetterValue = 200;
let animateLetterArray: any[] = [];

let isNearAnimateDone = false;
let isConsulsAnimateDone = false;
let isPlansAnimateDone = false;
let isVideoAnimateDone = false;

const ProblemsPage: FC<IPage> = ({ isAnimate, setAnimate, activeSlideIndex }) => {
  const [isTitleRed, setTitleRed] = useState(true);
  const [isSolutionPageVisible, setSolutionPageVisible] = useState(false);
  const [isNearPageVisible, setNearPageVisible] = useState(false);
  const [isConsulsPageVisible, setConsulsPageVisible] = useState(false);
  const [isPlansPageVisible, setPlansPageVisible] = useState(false);
  const [isVideoPageVisible, setVideoPageVisible] = useState(false);

  const [isPagesAnimateStart, setPagesAnimateStart] = useState(false);
  const [isPagesAnimateDone, setPagesAnimateDone] = useState(false);

  const backgroundRef = useRef(null);
  const [scrollBackgroundCount, setScrollBackgroundCount] = useState(80);
  const [scrollBackgroundScaleCount, setScrollBackgroundScaleCount] = useState(0.6);

  const firstBlockRef = useRef(null);
  const [scrollFirstBlockCount, setScrollFirstBlockCount] = useState(120);

  const secondBlockRef = useRef(null);
  const [scrollSecondBlockCount, setScrollSecondBlockCount] = useState(240);

  const solutionPageRef = useRef(null);
  const titleRef = useRef(null);
  const [scrollSolutionCount, setScrollSolutionCount] = useState(110);

  const nearImageRef = useRef(null);
  const nearPageRef = useRef(null);
  const [scrollNearImageCount, setScrollNearImageCount] = useState(1);
  let [scrollNearImageTranslate, setScrollNearImageTranslate] = useState(1);

  const consulsImageRef = useRef(null);
  const consulsPageRef = useRef(null);
  const [scrollConsulsImageCount, setScrollConsulsImageCount] = useState(1);
  let [scrollConsulsImageTranslate, setScrollConsulsImageTranslate] = useState(1);

  const plansImageRef = useRef(null);
  const plansPageRef = useRef(null);
  const [scrollPlansImageCount, setScrollPlansImageCount] = useState(1);
  let [scrollPlansImageTranslate, setScrollPlansImageTranslate] = useState(1);

  const videoImageRef = useRef(null);
  const videoPageRef = useRef(null);
  const [scrollVideoImageCount, setScrollVideoImageCount] = useState(1);
  const [scrollVideoImageTranslate, setScrollVideoImageTranslate] = useState(1);

  const [isAnimateDone, setAnimateDone] = useState(false);

  const onWheel = () => {
    // @ts-ignore
    const letters = titleRef.current.querySelectorAll('div');
    // @ts-ignore
    const lettersArray = Array.from(letters);

    if (!isAnimateDone) {

      if (scrollBackgroundCount >= 0) {
        setScrollBackgroundCount(prevState => prevState - 10);
        setScrollBackgroundScaleCount(prevState => prevState + 0.05);

        if (scrollBackgroundCount === 10) {
          setTitleRed(false);
        }

        // @ts-ignore
        backgroundRef.current!.style.transform = `translateY(${scrollBackgroundCount}%) scale(${scrollBackgroundScaleCount})`;
      } else if (scrollSecondBlockCount >= -120) {
        setScrollFirstBlockCount(prevState => prevState - 10);
        setScrollSecondBlockCount(prevState => prevState - 10);

        if (scrollSecondBlockCount === -120) {
          // @ts-ignore
          firstBlockRef.current!.classList.add('hidden');
          // @ts-ignore
          secondBlockRef.current!.classList.add('hidden');
        }

        // @ts-ignore
        firstBlockRef.current!.style.transform = `translateY(${scrollFirstBlockCount}%)`;
        // @ts-ignore
        secondBlockRef.current!.style.transform = `translateY(${scrollSecondBlockCount}%)`;
      } else if (scrollSolutionCount >= 0) {
        setScrollSolutionCount(prevState => prevState - 5);

          let rotateLetterValue = 70;

          if (scrollSolutionCount === 100) {
            let index = 11;

            animateLetterArray.push(lettersArray[index]);
            // @ts-ignore
            lettersArray[index].style.transform = `rotate(-${rotateLetterValue}deg)`
            // @ts-ignore
            lettersArray[index].style.top = `${topLetterValue}px`;
            // @ts-ignore
            lettersArray[index].style.opacity = '1';
          } else if (scrollSolutionCount === 90) {
            let index = 10;

            animateLetterArray.push(lettersArray[index]);
            // @ts-ignore
            lettersArray[index].style.transform = `rotate(-${rotateLetterValue}deg)`
            // @ts-ignore
            lettersArray[index].style.top = `${topLetterValue + 150}px`;
            // @ts-ignore
            lettersArray[index].style.opacity = '1';
          } else if (scrollSolutionCount === 80) {
            let index = 9;

            animateLetterArray.push(lettersArray[index]);
            // @ts-ignore
            lettersArray[index].style.transform = `rotate(-${rotateLetterValue}deg)`
            // @ts-ignore
            lettersArray[index].style.top = `${topLetterValue + 300}px`;
            // @ts-ignore
            lettersArray[index].style.opacity = '1';
          } else if (scrollSolutionCount === 70) {
            let index = 8;

            animateLetterArray.push(lettersArray[index]);
            // @ts-ignore
            lettersArray[index].style.transform = `rotate(-${rotateLetterValue}deg)`
            // @ts-ignore
            lettersArray[index].style.top = `${topLetterValue + 450}px`;
            // @ts-ignore
            lettersArray[index].style.opacity = '1';
          }

        // @ts-ignore
        solutionPageRef.current!.style.transform = `translateX(${scrollSolutionCount}%) rotate(3deg) scale(1.2)`;

        if (scrollSolutionCount === 0) {
          setSolutionPageVisible(true);

          setTimeout(() => {
            setPagesAnimateStart(true);
          }, 3000);

          // @ts-ignore
          solutionPageRef.current!.style.transform = `rotate(0deg) scale(1)`;
          animateLetterArray.forEach((item) => {
            // @ts-ignore
            item.style.opacity = '0';
          })
        }

      } else if (!isPagesAnimateDone && isPagesAnimateStart) {

        if (scrollNearImageCount <= 3.2 && !isNearPageVisible) {
          setScrollNearImageCount(prevState => prevState + 0.2);
          setScrollNearImageTranslate(prevState => prevState + 6);

          if (scrollNearImageTranslate >= 50) {
            scrollNearImageTranslate = 50;
          }

          // @ts-ignore
          nearImageRef.current!.style.transform = `translate(50%, ${scrollNearImageTranslate}%) scale(${scrollNearImageCount})`;
          // @ts-ignore
          nearImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          nearImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          plansImageRef.current!.style.zIndex = '2';
        } else if (!isNearPageVisible) {
          setNearPageVisible(true);

          setTimeout(() => {
            isNearAnimateDone = true;
          }, 2000)
        }

        if (isNearAnimateDone && scrollNearImageTranslate >= 1) {
          setScrollNearImageCount(prevState => prevState - 0.2);
          setScrollNearImageTranslate(prevState => prevState - 6);

          if (scrollNearImageTranslate <= 1) {
            scrollNearImageTranslate = 0;
          }

          // @ts-ignore
          nearImageRef.current!.style.transform = `translate(50%, ${scrollNearImageTranslate}%) scale(${scrollNearImageCount})`;
          // @ts-ignore
          nearPageRef.current!.classList.remove('active');
        } else if (isNearAnimateDone && scrollConsulsImageCount <= 4.5 && !isConsulsPageVisible) {
          setScrollConsulsImageCount(prevState => prevState + 0.2);
          setScrollConsulsImageTranslate(prevState => prevState + 3);

          if (scrollConsulsImageTranslate >= 50) {
            scrollConsulsImageTranslate = 50;
          }

          // @ts-ignore
          consulsImageRef.current!.style.transform = `translate(${scrollConsulsImageTranslate}%, -${scrollConsulsImageTranslate}%) scale(${scrollConsulsImageCount})`;
          // @ts-ignore
          consulsImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          consulsImageRef.current!.style.position = 'fixed';
          // @ts-ignore
          consulsImageRef.current!.style.top = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsImageRef.current!.style.right = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          nearImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          plansImageRef.current!.style.zIndex = '2';
        } else if (!isConsulsPageVisible && isNearAnimateDone) {
          setConsulsPageVisible(true);

          setTimeout(() => {
            isConsulsAnimateDone = true;
          }, 2000)
        }

        if (isConsulsAnimateDone && scrollConsulsImageCount >= 0.8) {
          setScrollConsulsImageCount(prevState => prevState - 0.2);
          setScrollConsulsImageTranslate(prevState => prevState - 3);

          if (scrollConsulsImageTranslate >= 50) {
            scrollConsulsImageTranslate = 50;
          }

          if (scrollConsulsImageTranslate <= 1) {
            scrollConsulsImageTranslate = 0;
          }

          // @ts-ignore
          consulsImageRef.current!.style.transform = `translate(${scrollConsulsImageTranslate}%, -${scrollConsulsImageTranslate}%) scale(${scrollConsulsImageCount})`;
          // @ts-ignore
          consulsImageRef.current!.style.top = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsImageRef.current!.style.right = `${scrollConsulsImageTranslate}%`;

          // @ts-ignore
          consulsPageRef.current!.classList.remove('active');
        } else if (isConsulsAnimateDone && scrollPlansImageCount <= 4.5 && !isPlansPageVisible) {
          setScrollPlansImageCount(prevState => prevState + 0.2);
          setScrollPlansImageTranslate(prevState => prevState + 3);

          if (scrollPlansImageTranslate >= 50) {
            scrollPlansImageTranslate = 50;
          }

          // @ts-ignore
          plansImageRef.current!.style.transform = `translate(${scrollPlansImageTranslate * 3}%, -${scrollPlansImageTranslate}%) scale(${scrollPlansImageCount})`;
          // @ts-ignore
          plansImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          plansImageRef.current!.style.position = 'fixed';
          // @ts-ignore
          plansImageRef.current!.style.top = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansImageRef.current!.style.right = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansImageRef.current!.style.width = `460px`;
          // @ts-ignore
          plansImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          nearImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '2';
        } else if (isConsulsAnimateDone && !isPlansPageVisible) {
          setPlansPageVisible(true);

          setTimeout(() => {
            isPlansAnimateDone = true;
          }, 2000)
        }

        if (isPlansAnimateDone && scrollPlansImageCount >= 0.8) {
          setScrollPlansImageCount(prevState => prevState - 0.2);
          setScrollPlansImageTranslate(prevState => prevState - 3);

          if (scrollPlansImageTranslate >= 50) {
            scrollPlansImageTranslate = 50;
          }

          if (scrollPlansImageTranslate <= 1) {
            scrollPlansImageTranslate = 0;
          }

          // @ts-ignore
          plansImageRef.current!.style.transform = `translate(${scrollPlansImageTranslate * 3}%, -${scrollPlansImageTranslate}%) scale(${scrollPlansImageCount})`;
          // @ts-ignore
          plansImageRef.current!.style.top = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansImageRef.current!.style.right = `${scrollPlansImageTranslate}%`;

          // @ts-ignore
          plansPageRef.current!.classList.remove('active');
        } else if (isPlansAnimateDone && scrollVideoImageCount <= 3.6 && !isVideoPageVisible) {
          setScrollVideoImageCount(prevState => prevState + 0.2);
          setScrollVideoImageTranslate(prevState => prevState + 10);

          // @ts-ignore
          videoImageRef.current!.style.transform = `translate(50%, -${scrollVideoImageTranslate}%) scale(${scrollVideoImageCount})`;
          // @ts-ignore
          videoImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          plansImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          nearImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '2';
        } else if (isPlansAnimateDone && !isVideoPageVisible) {
          setVideoPageVisible(true);

          setTimeout(() => {
            isVideoAnimateDone = true;
          }, 2000)
        }

        if (isVideoAnimateDone && scrollVideoImageCount >= 1) {
          setScrollVideoImageCount(prevState => prevState - 0.2);
          setScrollVideoImageTranslate(prevState => prevState - 10);

          // @ts-ignore
          videoImageRef.current!.style.transform = `translate(50%, -${scrollVideoImageTranslate}%) scale(${scrollVideoImageCount})`;
          // @ts-ignore
          videoPageRef.current!.classList.remove('active');
        } else if (isVideoAnimateDone) {
          setPagesAnimateDone(true);
        }

      } else if (isPagesAnimateStart && isPagesAnimateDone && !isAnimate && !isAnimateDone) {
        setAnimate(true);
      }

    } else if (isAnimateDone) {

      if (isPagesAnimateDone && isPagesAnimateStart) {

        if (scrollVideoImageCount <= 3.6 && isVideoPageVisible) {
          setScrollVideoImageCount(prevState => prevState + 0.2);
          setScrollVideoImageTranslate(prevState => prevState + 10);

          // @ts-ignore
          videoImageRef.current!.style.transform = `translate(50%, -${scrollVideoImageTranslate}%) scale(${scrollVideoImageCount})`;
          // @ts-ignore
          videoImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          plansImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          nearImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '2';
        } else if (isPlansAnimateDone && isVideoPageVisible) {
          setVideoPageVisible(false);

          // @ts-ignore
          videoPageRef.current!.style.opacity = '1';

          setTimeout(() => {
            isVideoAnimateDone = false;
          }, 2000)
        } else if (!isVideoAnimateDone && scrollVideoImageCount >= 1) {
          setScrollVideoImageCount(prevState => prevState - 0.2);
          setScrollVideoImageTranslate(prevState => prevState - 10);

          // @ts-ignore
          videoImageRef.current!.style.transform = `translate(50%, -${scrollVideoImageTranslate}%) scale(${scrollVideoImageCount})`;
          // @ts-ignore
          videoPageRef.current!.style.opacity = '0';
        }



        if (!isVideoAnimateDone && scrollVideoImageCount <= 1 && scrollPlansImageCount <= 4.5 && isPlansPageVisible) {
          setScrollPlansImageCount(prevState => prevState + 0.2);
          setScrollPlansImageTranslate(prevState => prevState + 3);

          if (scrollPlansImageTranslate >= 50) {
            scrollPlansImageTranslate = 50;
          }

          // @ts-ignore
          plansImageRef.current!.style.transform = `translate(${scrollPlansImageTranslate * 3}%, -${scrollPlansImageTranslate}%) scale(${scrollPlansImageCount})`;
          // @ts-ignore
          plansImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          plansImageRef.current!.style.position = 'fixed';
          // @ts-ignore
          plansImageRef.current!.style.top = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansImageRef.current!.style.right = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansImageRef.current!.style.width = `460px`;
          // @ts-ignore
          plansImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          videoImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          nearImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '2';
        } else if (!isVideoAnimateDone && scrollVideoImageCount <= 1 && isPlansPageVisible) {
          setPlansPageVisible(false);

          // @ts-ignore
          plansPageRef.current!.style.opacity = '1';

          setTimeout(() => {
            isPlansAnimateDone = false;
          }, 2000)
        } else if (!isPlansAnimateDone && scrollPlansImageCount >= 0.8) {
          setScrollPlansImageCount(prevState => prevState - 0.2);
          setScrollPlansImageTranslate(prevState => prevState - 3);

          if (scrollPlansImageTranslate >= 50) {
            scrollPlansImageTranslate = 50;
          }

          if (scrollPlansImageTranslate <= 1) {
            scrollPlansImageTranslate = 0;
          }

          // @ts-ignore
          plansImageRef.current!.style.transform = `translate(${scrollPlansImageTranslate * 3}%, -${scrollPlansImageTranslate}%) scale(${scrollPlansImageCount})`;
          // @ts-ignore
          plansImageRef.current!.style.top = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansImageRef.current!.style.right = `${scrollPlansImageTranslate}%`;
          // @ts-ignore
          plansPageRef.current!.style.opacity = '0';
        }



        if (!isPlansAnimateDone && scrollPlansImageCount <= 1 && scrollConsulsImageCount <= 4.5 && isConsulsPageVisible) {
          setScrollConsulsImageCount(prevState => prevState + 0.2);
          setScrollConsulsImageTranslate(prevState => prevState + 3);

          if (scrollConsulsImageTranslate >= 50) {
            scrollConsulsImageTranslate = 50;
          }

          // @ts-ignore
          consulsImageRef.current!.style.transform = `translate(${scrollConsulsImageTranslate}%, -${scrollConsulsImageTranslate}%) scale(${scrollConsulsImageCount})`;
          // @ts-ignore
          consulsImageRef.current!.style.transition = '.2s all linear';
          // @ts-ignore
          consulsImageRef.current!.style.position = 'fixed';
          // @ts-ignore
          consulsImageRef.current!.style.top = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsImageRef.current!.style.right = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          plansImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          nearImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '2';
        } else if (!isPlansAnimateDone && scrollPlansImageCount <= 1 && isConsulsPageVisible) {
          setConsulsPageVisible(false);

          // @ts-ignore
          consulsPageRef.current!.style.opacity = '1';

          setTimeout(() => {
            isConsulsAnimateDone = false;
          }, 2000)
        } else if (!isConsulsAnimateDone && scrollConsulsImageCount >= 0.8) {
          setScrollConsulsImageCount(prevState => prevState - 0.2);
          setScrollConsulsImageTranslate(prevState => prevState - 3);

          if (scrollConsulsImageTranslate >= 50) {
            scrollConsulsImageTranslate = 50;
          }

          if (scrollConsulsImageTranslate <= 1) {
            scrollConsulsImageTranslate = 0;
          }

          // @ts-ignore
          consulsImageRef.current!.style.transform = `translate(${scrollConsulsImageTranslate}%, -${scrollConsulsImageTranslate}%) scale(${scrollConsulsImageCount})`;
          // @ts-ignore
          consulsImageRef.current!.style.top = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsImageRef.current!.style.right = `${scrollConsulsImageTranslate}%`;
          // @ts-ignore
          consulsPageRef.current!.style.opacity = '0';
        }



        if (!isConsulsAnimateDone && scrollConsulsImageCount <= 1 && scrollNearImageCount <= 3.2 && isNearPageVisible) {
          setScrollNearImageCount(prevState => prevState + 0.2);
          setScrollNearImageTranslate(prevState => prevState + 6);

          if (scrollNearImageTranslate >= 50) {
            scrollNearImageTranslate = 50;
          }

          // @ts-ignore
          nearImageRef.current!.style.transform = `translate(50%, ${scrollNearImageTranslate}%) scale(${scrollNearImageCount})`;
          // @ts-ignore
          nearImageRef.current!.style.transition = '.2s all linear';

          // @ts-ignore
          nearImageRef.current!.style.zIndex = '3';

          // @ts-ignore
          consulsImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          videoImageRef.current!.style.zIndex = '2';
          // @ts-ignore
          plansImageRef.current!.style.zIndex = '2';
        } else if (!isConsulsAnimateDone && scrollConsulsImageCount <= 1 && isNearPageVisible) {
          setNearPageVisible(false);

          // @ts-ignore
          nearPageRef.current!.style.opacity = '1';

          setTimeout(() => {
            isNearAnimateDone = false;
          }, 2000)
        } else if (!isNearAnimateDone && scrollNearImageCount >= 1) {
          setScrollNearImageCount(prevState => prevState - 0.2);
          setScrollNearImageTranslate(prevState => prevState - 6);

          if (scrollNearImageTranslate <= 1) {
            scrollNearImageTranslate = 0;
          }

          // @ts-ignore
          nearImageRef.current!.style.transform = `translate(50%, ${scrollNearImageTranslate}%) scale(${scrollNearImageCount})`;
          // @ts-ignore
          nearPageRef.current!.style.opacity = '0';
        } else if (!isNearAnimateDone && scrollNearImageCount <= 1) {
          setPagesAnimateDone(false);
        }

      } else if (!isPagesAnimateDone && scrollSolutionCount <= 115) {
        setScrollSolutionCount(prevState => prevState + 5);

        if (scrollSolutionCount === 100) {
          let index = 11;

          animateLetterArray.push(lettersArray[index]);
          // @ts-ignore
          lettersArray[index].style.transform = `rotate(0deg)`
          // @ts-ignore
          lettersArray[index].style.opacity = '0';
        } else if (scrollSolutionCount === 90) {
          let index = 10;

          animateLetterArray.push(lettersArray[index]);
          // @ts-ignore
          lettersArray[index].style.transform = `rotate(0deg)`
          // @ts-ignore
          lettersArray[index].style.opacity = '0';
        } else if (scrollSolutionCount === 80) {
          let index = 9;

          animateLetterArray.push(lettersArray[index]);
          // @ts-ignore
          lettersArray[index].style.transform = `rotate(0deg)`
          // @ts-ignore
          lettersArray[index].style.opacity = '0';
        } else if (scrollSolutionCount === 70) {
          let index = 8;

          animateLetterArray.push(lettersArray[index]);
          // @ts-ignore
          lettersArray[index].style.transform = `rotate(0deg)`
          // @ts-ignore
          lettersArray[index].style.opacity = '0';
        }

        // @ts-ignore
        solutionPageRef.current!.style.transform = `translateX(${scrollSolutionCount}%) rotate(3deg) scale(1.2)`;

        if (scrollSolutionCount === 0) {
          setSolutionPageVisible(false);

          setTimeout(() => {
            setPagesAnimateStart(true);
          }, 3000);

          animateLetterArray.forEach((item) => {
            // @ts-ignore
            item.style.opacity = '1';
          })
        }

      } else if (scrollFirstBlockCount <= 120) {
        setScrollFirstBlockCount(prevState => prevState + 10);
        setScrollSecondBlockCount(prevState => prevState + 10);

        // @ts-ignore
        firstBlockRef.current!.classList.remove('hidden');
        // @ts-ignore
        secondBlockRef.current!.classList.remove('hidden');

        // @ts-ignore
        firstBlockRef.current!.style.transform = `translateY(${scrollFirstBlockCount}%)`;
        // @ts-ignore
        secondBlockRef.current!.style.transform = `translateY(${scrollSecondBlockCount}%)`;
      } else if (scrollBackgroundCount <= 90) {
        setScrollBackgroundCount(prevState => prevState + 10);
        setScrollBackgroundScaleCount(prevState => prevState - 0.05);

        if (scrollBackgroundCount === 10) {
          setTitleRed(true);
        }

        // @ts-ignore
        backgroundRef.current!.style.transform = `translateY(${scrollBackgroundCount}%) scale(${scrollBackgroundScaleCount})`;
      } else {
        setAnimate(true);
      }

    }

    if ((PageListEnum.AboutPage === activeSlideIndex || PageListEnum.PeoplePage === activeSlideIndex) && isAnimate) {
      setTimeout(() => {
        if (!isPagesAnimateDone) {
          setAnimateDone(false);
          setAnimate(false);
        } else {
          setAnimateDone(true);
          setAnimate(false);
        }
      }, 1000);
    }

  }

  return (
    <div onWheel={onWheel}>
      <div className={styles['problems']}>
        <img
          ref={backgroundRef}
          src="/assets/images/problems_background.png"
          alt="Фон"
          className={styles['problems-image-background']}
        />
        <h2 ref={titleRef} className={classNames(styles['problems-title'], {[styles['problems-title_red']]: isTitleRed})}>
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
        <div ref={firstBlockRef} className={styles['problems-block']}>
          <img src="/assets/images/problems-1.png" alt="Фотография" className={styles['problems-block-image']}/>
          <div className={styles['problems-block-text']}>
            <h3 className={styles['problems-block-title']}>Общее количество бездомных животных в СНГ или мире</h3>
            <span className={styles['problems-block-description']}>
            В мире по примерным расчетам количество бездомных животных около 30 миллиардов котов и 10 триллионов собак.
            Это огромное количество животных находится на улице или уже внутри немногочисленных приютов по всему миру.
          </span>
          </div>
        </div>
        <div ref={secondBlockRef} className={classNames(styles['problems-block'], styles['problems-block_secondary'])}>
          <img src="/assets/images/problems-1.png" alt="Фотография" className={styles['problems-block-image']}/>
          <div className={styles['problems-block-text']}>
            <h3 className={styles['problems-block-title']}>Общее количество бездомных животных в СНГ или мире</h3>
            <span className={styles['problems-block-description']}>
            В мире по примерным расчетам количество бездомных животных около 30 миллиардов котов и 10 триллионов собак.
            Это огромное количество животных находится на улице или уже внутри немногочисленных приютов по всему миру.
          </span>
          </div>
        </div>
      </div>
      <div ref={solutionPageRef} className={styles['problems-solution-wrapper']}>
        <SolutionPage
          className={styles['problems-solution']}
          isAnimate={isSolutionPageVisible}
          setAnimate={setSolutionPageVisible}
          titleRef={titleRef}
          nearImageRef={nearImageRef}
          consulsImageRef={consulsImageRef}
          plansImageRef={plansImageRef}
          videoImageRef={videoImageRef}
        />
      </div>
      <div ref={nearPageRef}
           className={classNames(
             styles['problems-near-wrapper'], { 'active': isNearPageVisible }
      )}>
        <NearPage isAnimate={isNearPageVisible} setAnimate={setNearPageVisible} />
      </div>
      <div ref={consulsPageRef}
           className={classNames(
             styles['problems-consuls-wrapper'], { 'active': isConsulsPageVisible }
           )}>
        <ConsulsPage isAnimate={isConsulsPageVisible} setAnimate={setConsulsPageVisible} />
      </div>
      <div ref={plansPageRef}
           className={classNames(
             styles['problems-plans-wrapper'], { 'active': isPlansPageVisible }
           )}>
        <PlansPage isAnimate={isPlansPageVisible} setAnimate={setPlansPageVisible} />
      </div>
      <div ref={videoPageRef}
           className={classNames(
             styles['problems-video-wrapper'], { 'active': isVideoPageVisible }
           )}>
        <VideoPage isAnimate={isVideoPageVisible} setAnimate={setVideoPageVisible} />
      </div>
    </div>
  );
};

export default ProblemsPage;
