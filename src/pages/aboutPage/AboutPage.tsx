import styles from './AboutPage.module.scss';
import {FC} from "react";

const AboutPage: FC = () => {
  return (
    <div className={styles['about']}>
      <img src="/assets/images/about-1.png" alt="О проекте" className={styles['about-image_first']}/>
      <img src="/assets/images/about-2.png" alt="О проекте" className={styles['about-image_second']}/>
      <div className={styles['about-content']}>
        <div className={styles['about-left-panel']}>
          <div className={styles['about-text']}>
            <h3 className={styles['about-title']}>
              Благотворительный проект помощи животным на основе блокчейн и DAO технологии.
            </h3>
            <p className={styles['about-paragraph']}>
              С другой стороны постоянный количественный рост и сфера нашей активности требуют определения и уточнения
              направлений прогрессивного развития. Повседневная практика показывает, что начало повседневной работы по
              формированию позиции позволяет выполнять важные задания.
            </p>
          </div>
          <div className={styles['about-text']}>
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
          <button  className={styles['about-button']}>
            узнать подробнее
          </button>
        </div>
        <div className={styles['about-right-panel']}>
          <div className={styles['about-text']}>
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
          <h2 className={styles['about-title_main']}>О проекте</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
