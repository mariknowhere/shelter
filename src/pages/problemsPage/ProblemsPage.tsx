import React, {FC, useRef, useState} from 'react';
import styles from './ProblemsPage.module.scss';
import classNames from "classnames";
import {IPage} from "../PageTypes";
import SolutionPage from "../solutionPage/SolutionPage";

let solutionClientX = 0;
let animateLetterArray: any[] = [];
const ProblemsPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
  const [isTitleRed, setTitleRed] = useState(true);
  const [isSolutionPageVisible, setSolutionPageVisible] = useState(false);

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

  const onWheel = () => {
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

      // @ts-ignore
      const letters = titleRef.current.querySelectorAll('div');
      // @ts-ignore
      const lettersArray = Array.from(letters);

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
            rotateLetterValue += 70;

            if (rotateLetterValue >= 90) {
              rotateLetterValue = 90;
            }

            if (index <= 5) {
              animateLetterArray.push(lettersArray[12-index]);
              // @ts-ignore
              lettersArray[12-index].style.transform = `rotate(-${rotateLetterValue}deg)`
              // @ts-ignore
              lettersArray[12-index].style.position = 'absolute';
              // @ts-ignore
              lettersArray[12-index].style.top = `${100*index}px`;
              // @ts-ignore
              lettersArray[12-index].style.left = `${solutionCoordinates.x-300}px`;
              // @ts-ignore
              lettersArray[12-index].style.zIndex = '1';
            }
          }
        })
      }

      animateLetterArray.forEach((item) => {
        item.style.left = `${solutionCoordinates.x-300}px`;
        item.style.transition = '.2s all linear';
      })


      // @ts-ignore
      solutionPageRef.current!.style.transform = `translateX(${scrollSolutionCount}%) rotate(3deg) scale(1.2)`;
    } else {
      setAnimate(true);
      setSolutionPageVisible(true);

      // @ts-ignore
      solutionPageRef.current!.style.transform = `rotate(0deg) scale(1)`;
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
        />
      </div>
    </div>
  );
};

export default ProblemsPage;
