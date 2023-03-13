import React, {FC, useRef, useState} from 'react';
import styles from './ProblemsPage.module.scss';
import classNames from "classnames";
import {IPage} from "../PageTypes";
import SolutionPage from "../solutionPage/SolutionPage";
import NearPage from "../nearPage/NearPage";
import ConsulsPage from "../consulsPage/ConsulsPage";
import PlansPage from "../plansPage/PlansPage";
import VideoPage from "../videoPage/VideoPage";

let solutionClientX = 0;
let animateLetterArray: any[] = [];

let isNearAnimateDone = false;
let isConsulsAnimateDone = false;
let isPlansAnimateDone = false;
let isVideoAnimateDone = false;

const ProblemsPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
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
  const [scrollSecondBlockCount, setScrollSecondBlockCount] = useState(120);

  const solutionPageRef = useRef(null);
  const titleRef = useRef(null);
  const [scrollSolutionCount, setScrollSolutionCount] = useState(110);

  const nearImageRef = useRef(null);
  const nearPageRef = useRef(null);
  const [scrollNearImageCount, setScrollNearImageCount] = useState(1);
  const [scrollNearImageTranslate, setScrollNearImageTranslate] = useState(1);

  const consulsImageRef = useRef(null);
  const consulsPageRef = useRef(null);
  const [scrollConsulsImageCount, setScrollConsulsImageCount] = useState(1);
  const [scrollConsulsImageTranslate, setScrollConsulsImageTranslate] = useState(1);

  const plansImageRef = useRef(null);
  const plansPageRef = useRef(null);
  const [scrollPlansImageCount, setScrollPlansImageCount] = useState(1);
  const [scrollPlansImageTranslate, setScrollPlansImageTranslate] = useState(1);

  const videoImageRef = useRef(null);
  const videoPageRef = useRef(null);
  const [scrollVideoImageCount, setScrollVideoImageCount] = useState(1);
  const [scrollVideoImageTranslate, setScrollVideoImageTranslate] = useState(1);

  const onWheel = () => {
    // @ts-ignore
    const letters = titleRef.current.querySelectorAll('div');
    // @ts-ignore
    const lettersArray = Array.from(letters);

    if (scrollBackgroundCount >= 0) {
      setScrollBackgroundCount(prevState => prevState - 5);
      setScrollBackgroundScaleCount(prevState => prevState + 0.025);

      if (scrollBackgroundCount === 10) {
        setTitleRed(false);
      }

      // @ts-ignore
      backgroundRef.current!.style.transform = `translateY(${scrollBackgroundCount}%) scale(${scrollBackgroundScaleCount})`;
    } else if (scrollFirstBlockCount >= 0) {
      setScrollFirstBlockCount(prevState => prevState - 10);

      // @ts-ignore
      firstBlockRef.current!.style.transform = `translateY(${scrollFirstBlockCount}%)`;
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
      // @ts-ignore
      const solutionCoordinates = solutionPageRef.current.getBoundingClientRect();

      if (solutionClientX < solutionCoordinates.x) {
        solutionClientX = solutionCoordinates.x
      }

      let paddingBetweenTitleAndBorders = parseInt((solutionCoordinates.width - 1450).toFixed(0));
      let maxValueToStartAnimation = parseInt((solutionClientX - paddingBetweenTitleAndBorders).toFixed(0));
      let averageValueToAnimation = maxValueToStartAnimation / lettersArray.length;

      if (solutionCoordinates.x < maxValueToStartAnimation) {
        lettersArray.forEach((letter, index) => {
          let actualValue = maxValueToStartAnimation - averageValueToAnimation * index+1;
          let actualValueDouble = actualValue + averageValueToAnimation;

          let rotateLetterValue = 0;

          if (solutionCoordinates.x >= actualValue && solutionCoordinates.x <= actualValueDouble) {
            rotateLetterValue = 70;

            if (index <= 4) {
              animateLetterArray.push(lettersArray[12-index]);
              // @ts-ignore
              lettersArray[12-index].style.transform = `rotate(-${rotateLetterValue}deg)`
              // @ts-ignore
              lettersArray[12-index].style.position = 'absolute';
              // @ts-ignore
              lettersArray[12-index].style.top = `${150*index}px`;
              // @ts-ignore
              lettersArray[12-index].style.left = '-75px';
              // @ts-ignore
              lettersArray[12-index].style.zIndex = '1';
            }
          }
        })
      }

      animateLetterArray.forEach((item) => {
        item.style.left = '-75px';
      })

      // @ts-ignore
      solutionPageRef.current!.style.transform = `translateX(${scrollSolutionCount}%) rotate(3deg) scale(1.2)`;

      if (scrollSolutionCount === 0) {
        setSolutionPageVisible(true);

        setTimeout(() => {
          setPagesAnimateStart(true);
        }, 3000);

        // @ts-ignore
        solutionPageRef.current!.style.transform = `rotate(0deg) scale(1)`;
        lettersArray.forEach((item) => {
          // @ts-ignore
          item.style.display = 'none';
        })
      }

    } else if (!isPagesAnimateDone && isPagesAnimateStart) {

      if (scrollNearImageCount <= 3 && !isNearPageVisible) {
        setScrollNearImageCount(prevState => prevState + 0.1);
        setScrollNearImageTranslate(prevState => prevState + 2.5);

        // @ts-ignore
        nearImageRef.current!.style.transform = `translate(50%, ${scrollNearImageTranslate}%) scale(${scrollNearImageCount})`;
        // @ts-ignore
        nearImageRef.current!.style.transition = '.2s all linear';
      } else if (!isNearPageVisible) {
        setNearPageVisible(true);

        setTimeout(() => {
          isNearAnimateDone = true;
        }, 4000)
      }

      if (isNearAnimateDone && scrollNearImageTranslate >= 1) {
        setScrollNearImageCount(prevState => prevState - 0.1);
        setScrollNearImageTranslate(prevState => prevState - 2.5);

        // @ts-ignore
        nearImageRef.current!.style.transform = `translate(50%, ${scrollNearImageTranslate}%) scale(${scrollNearImageCount})`;
        // @ts-ignore
        nearPageRef.current!.classList.remove('active');
      } else if (isNearAnimateDone && scrollConsulsImageCount <= 4.6 && !isConsulsPageVisible) {
        setScrollConsulsImageCount(prevState => prevState + 0.1);
        setScrollConsulsImageTranslate(prevState => prevState + 5);

        // @ts-ignore
        consulsImageRef.current!.style.transform = `translate(-${scrollConsulsImageTranslate}%, ${scrollConsulsImageTranslate}%) scale(${scrollConsulsImageCount})`;
        // @ts-ignore
        consulsImageRef.current!.style.transition = '.2s all linear';
        // @ts-ignore
        consulsImageRef.current!.style.zIndex = '3';
      } else if (!isConsulsPageVisible && isNearAnimateDone) {
        setConsulsPageVisible(true);

        setTimeout(() => {
          isConsulsAnimateDone = true;
        }, 4000)
      }

      if (isConsulsAnimateDone && scrollConsulsImageCount >= 1) {
        setScrollConsulsImageCount(prevState => prevState - 0.1);
        setScrollConsulsImageTranslate(prevState => prevState - 5);

        // @ts-ignore
        consulsImageRef.current!.style.transform = `translate(-${scrollConsulsImageTranslate}%, ${scrollConsulsImageTranslate}%) scale(${scrollConsulsImageCount})`;
        // @ts-ignore
        consulsPageRef.current!.classList.remove('active');
      } else if (isConsulsAnimateDone && scrollPlansImageCount <= 4.6 && !isPlansPageVisible) {
        setScrollPlansImageCount(prevState => prevState + 0.1);
        setScrollPlansImageTranslate(prevState => prevState + 5);

        // @ts-ignore
        plansImageRef.current!.style.transform = `translate(${scrollPlansImageTranslate}%, ${scrollPlansImageTranslate}%) scale(${scrollPlansImageCount})`;
        // @ts-ignore
        plansImageRef.current!.style.transition = '.2s all linear';
        // @ts-ignore
        plansImageRef.current!.style.zIndex = '3';
        // @ts-ignore
        consulsImageRef.current!.style.zIndex = '2';
      } else if (isConsulsAnimateDone && !isPlansPageVisible) {
        setPlansPageVisible(true);

        setTimeout(() => {
          isPlansAnimateDone = true;
        }, 4000)
      }

      if (isPlansAnimateDone && scrollPlansImageCount >= 1) {
        setScrollPlansImageCount(prevState => prevState - 0.1);
        setScrollPlansImageTranslate(prevState => prevState - 5);

        // @ts-ignore
        plansImageRef.current!.style.transform = `translate(${scrollPlansImageTranslate}%, ${scrollPlansImageTranslate}%) scale(${scrollPlansImageCount})`;
        // @ts-ignore
        plansPageRef.current!.classList.remove('active');
      } else if (isPlansAnimateDone && scrollVideoImageCount <= 3.6 && !isVideoPageVisible) {
        setScrollVideoImageCount(prevState => prevState + 0.1);
        setScrollVideoImageTranslate(prevState => prevState + 5);

        // @ts-ignore
        videoImageRef.current!.style.transform = `translate(50%, -${scrollVideoImageTranslate}%) scale(${scrollVideoImageCount})`;
        // @ts-ignore
        videoImageRef.current!.style.transition = '.2s all linear';
        // @ts-ignore
        videoImageRef.current!.style.zIndex = '3';
        // @ts-ignore
        plansImageRef.current!.style.zIndex = '2';
      } else if (isPlansAnimateDone && !isVideoPageVisible) {
        setVideoPageVisible(true);

        setTimeout(() => {
          isVideoAnimateDone = true;
        }, 4000)
      }

      if (isVideoAnimateDone && scrollVideoImageCount >= 1) {
        setScrollVideoImageCount(prevState => prevState - 0.1);
        setScrollVideoImageTranslate(prevState => prevState - 5);

        // @ts-ignore
        videoImageRef.current!.style.transform = `translate(50%, -${scrollVideoImageTranslate}%) scale(${scrollVideoImageCount})`;
        // @ts-ignore
        videoPageRef.current!.classList.remove('active');
      } else if (isVideoAnimateDone) {
        setPagesAnimateDone(true);
      }

    } else if (isPagesAnimateStart && isPagesAnimateDone) {
      setAnimate(true);
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
