import {FC, useRef, useState} from 'react';
import styles from './ProblemsPage.module.scss';
import classNames from "classnames";
import {IPage} from "../PageTypes";

const ProblemsPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
  const [isTitleRed, setTitleRed] = useState(true);

  const backgroundRef = useRef(null);
  const [scrollBackgroundCount, setScrollBackgroundCount] = useState(100);
  const [scrollBackgroundScaleCount, setScrollBackgroundScaleCount] = useState(0.5);

  const firstBlockRef = useRef(null);
  const [scrollFirstBlockCount, setScrollFirstBlockCount] = useState(120);

  const secondBlockRef = useRef(null);
  const [scrollSecondBlockCount, setScrollSecondBlockCount] = useState(120);

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
      setScrollFirstBlockCount(prevState => prevState - 5);

      // @ts-ignore
      firstBlockRef.current!.style.transform = `translateY(${scrollFirstBlockCount}%)`;
    } else if (scrollSecondBlockCount >= -120) {
      setScrollFirstBlockCount(prevState => prevState - 5);
      setScrollSecondBlockCount(prevState => prevState - 5);

      // @ts-ignore
      firstBlockRef.current!.style.transform = `translateY(${scrollFirstBlockCount}%)`;
      // @ts-ignore
      secondBlockRef.current!.style.transform = `translateY(${scrollSecondBlockCount}%)`;
    } else {
      setAnimate(true);
    }
  }

  return (
    <div onWheel={onWheel} className={styles['problems']}>
      <img
        ref={backgroundRef}
        src="/assets/images/problems_background.png"
        alt="Фон"
        className={styles['problems-image-background']}
      />
      <h2 className={classNames(styles['problems-title'], {[styles['problems-title_red']]: isTitleRed})}>
        проблематика
      </h2>
      <div ref={firstBlockRef} className={styles['problems-block']}>
        <img src="/assets/images/problems-1.png" alt="Фотография" className={styles['problems-block-image']}/>
        <div className={styles['problems-block-text']}>
          <h4 className={styles['problems-block-title']}>Общее количество бездомных животных в СНГ или мире</h4>
          <span className={styles['problems-block-description']}>
            В мире по примерным расчетам количество бездомных животных около 30 миллиардов котов и 10 триллионов собак.
            Это огромное количество животных находится на улице или уже внутри немногочисленных приютов по всему миру.
          </span>
        </div>
      </div>
      <div ref={secondBlockRef} className={classNames(styles['problems-block'], styles['problems-block_secondary'])}>
        <img src="/assets/images/problems-1.png" alt="Фотография" className={styles['problems-block-image']}/>
        <div className={styles['problems-block-text']}>
          <h4 className={styles['problems-block-title']}>Общее количество бездомных животных в СНГ или мире</h4>
          <span className={styles['problems-block-description']}>
            В мире по примерным расчетам количество бездомных животных около 30 миллиардов котов и 10 триллионов собак.
            Это огромное количество животных находится на улице или уже внутри немногочисленных приютов по всему миру.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
