import {FC} from 'react';
import styles from './TeamPage.module.scss';

const TeamPage: FC = () => {
  return (
    <div className={styles['team']}>
      <div className={styles['team-content']}>
        <div className={styles['team-top']}>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
        </div>
        <div className={styles['team-swiper']}>
          <div className={styles['team-swiper-slide']}>
            <img
              src="/assets/images/team-person-1.png"
              alt="Персона"
            />
            <div className={styles['team-swiper-slide-text']}>
              Ульяна Михеева
            </div>
          </div>
          <div className={styles['team-swiper-slide']}>
            <img
              src="/assets/images/team-person-2.png"
              alt="Персона"
            />
            <div className={styles['team-swiper-slide-text']}>
              Ульяна Михеева
            </div>
          </div>
          <div className={styles['team-swiper-slide']}>
            <img
              src="/assets/images/team-person-3.png"
              alt="Персона"
            />
            <div className={styles['team-swiper-slide-text']}>
              Ульяна Михеева
            </div>
          </div>
        </div>
        <div className={styles['team-links-wrapper']}>
          <div className={styles['team-links']}>
            <a href="" className={styles['team-links-item']}>
              Vkontakte
            </a>
            <a href="" className={styles['team-links-item']}>
              instagram
            </a>
            <a href="" className={styles['team-links-item']}>
              twitter
            </a>
            <a href="" className={styles['team-links-item']}>
              facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
