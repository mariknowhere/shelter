import {FC, useEffect, useState} from 'react';
import styles from './TeamPage.module.scss';
import {splitText} from "../../utils/splitText";
import {animateText} from "../../utils/animateText";
import classNames from "classnames";

const TeamPage: FC = () => {
  const [isTopVisible, setTopVisible]= useState(false);
  const [isSwiperVisible, setSwiperVisible]= useState(false);
  const [isLinksVisible, setLinksVisible]= useState(false);

  useEffect(() => {
    if (!isTopVisible) {
      setTimeout(() => {
        setTopVisible(true);
      }, 1000);
    }

    if (isTopVisible) {
      setTimeout(() => {
        setSwiperVisible(true);
      }, 1000);
    }

    if (isSwiperVisible) {
      setTimeout(() => {
        setLinksVisible(true);
      }, 1000);
    }
  }, [isSwiperVisible, isTopVisible]);

  return (
    <div className={styles['team']}>
      <div className={styles['team-content']}>
        <div className={classNames(styles['team-top'], { 'active':  isTopVisible})}>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
          <span className={styles['team-top-text']}>наша Команда</span>
        </div>
        <div className={classNames(styles['team-swiper'], { 'active': isSwiperVisible })}>
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
        <div className={classNames(styles['team-links-wrapper'], { 'active': isLinksVisible })}>
          <div className={styles['team-links']}>
            <a href="/#" className={styles['team-links-item']}>
              Vkontakte
            </a>
            <a href="/#" className={styles['team-links-item']}>
              instagram
            </a>
            <a href="/#" className={styles['team-links-item']}>
              twitter
            </a>
            <a href="/#" className={styles['team-links-item']}>
              facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
