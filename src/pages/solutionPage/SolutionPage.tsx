import {FC} from "react";
import styles from './SolutionPage.module.scss';
import classNames from "classnames";

const SolutionPage: FC = () => {
  return (
    <div className={styles['solution']}>
      <h2 className={styles['solution-title']}>решение</h2>
      <div className={classNames(styles['solution-item-wrapper'], styles['solution-item-wrapper_first'])}>
        <div className={styles['solution-item']}>
          <img
            className={styles['solution-item-image']}
            src="/assets/images/solution-1.png"
            alt="использование криптовалюты"
          />
          <span className={styles['solution-item-text']}>использование криптовалюты</span>
        </div>
      </div>
      <div className={classNames(styles['solution-item-wrapper'], styles['solution-item-wrapper_second'])}>
        <div className={styles['solution-item']}>
          <img
            className={styles['solution-item-image']}
            src="/assets/images/solution-2.png"
            alt="использование криптовалюты"
          />
          <span className={styles['solution-item-text']}>использование ДАО</span>
        </div>
      </div>
      <div className={classNames(styles['solution-item-wrapper'], styles['solution-item-wrapper_third'])}>
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
      <img src="/assets/images/solution-4.png" alt="Решение" className={styles['solution-image-fourth']}/>
      <img src="/assets/images/solution-5.png" alt="Решение" className={styles['solution-image-fifth']}/>
      <img src="/assets/images/solution-6.png" alt="Решение" className={styles['solution-image-sixth']}/>
    </div>
  );
};

export default SolutionPage;
