import {FC, useEffect, useState} from 'react';
import styles from './TeamPage.module.scss';
import classNames from "classnames";
import {IPage} from "../PageTypes";

const TeamPage: FC<IPage> = ({ isAnimate, setAnimate }) => {
  const [isTopVisible, setTopVisible]= useState(false);
  const [isSwiperVisible, setSwiperVisible]= useState(false);
  const [isLinksVisible, setLinksVisible]= useState(false);

  useEffect(() => {
    if (isAnimate) {
      if (!isTopVisible) {
        setTimeout(() => {
          setTopVisible(true);
        }, 500);
      }

      if (isTopVisible) {
        setTimeout(() => {
          setSwiperVisible(true);
        }, 500);
      }

      if (isSwiperVisible) {
        setTimeout(() => {
          setLinksVisible(true);
        }, 500);
      }
    }
  }, [isAnimate, isSwiperVisible, isTopVisible]);

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
            <a href="/#" className={classNames(styles['team-links-item'], styles['team-links-item_vk'])}>
              Vkontakte
            </a>
            <a href="/#" className={classNames(styles['team-links-item'], styles['team-links-item_instagram'])}>
              instagram
            </a>
            <a href="/#" className={classNames(styles['team-links-item'], styles['team-links-item_twitter'])}>
              twitter
            </a>
            <a href="/#" className={classNames(styles['team-links-item'], styles['team-links-item_facebook'])}>
              facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
