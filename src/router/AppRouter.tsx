import React, {useEffect, useState} from 'react';
import AboutPage from "../pages/aboutPage/AboutPage";
import MainPage from "../pages/mainPage/MainPage";
import ProblemsPage from "../pages/problemsPage/ProblemsPage";
import PeoplePage from "../pages/peoplePage/PeoplePage";
import RoadmapPage from "../pages/roadmapPage/RoadmapPage";
import SupportPage from "../pages/supportPage/SupportPage";
import TeamPage from "../pages/teamPage/TeamPage";
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination"
import {PageListEnum} from "../pages/PageTypes";

const AppRouter = () => {
    const [activeIndexSlide, setActiveIndexSlide] = useState(0);

    const [isAboutPage, setAboutPage] = useState(false);
    const [isPeoplePage, setPeoplePage] = useState(false);
    const [isRoadmapPage, setRoadmapPage] = useState(false);
    const [isSupportPage, setSupportPage] = useState(false);
    const [isTeamPage, setTeamPage] = useState(false);

    const [isAboutAnimate, setAboutAnimate] = useState(false);
    const [isProblemsAnimate, setProblemsAnimate] = useState(false);
    const [isRoadMapAnimate, setRoadMapAnimate] = useState(false);
    const [isSupportAnimate, setSupportAnimate] = useState(false);

    const [swiper, setSwiper] = useState<any>({
        enabled: true
    });

    const onSlideChange = (swiper: any) => {
        setActiveIndexSlide(swiper.activeIndex);
        setSwiper(swiper);
    }

    useEffect(() => {
        switch (activeIndexSlide) {
            case PageListEnum.AboutPage: {
                setAboutPage(true);

                if (isAboutAnimate) {
                    setTimeout(() => {
                        swiper.enabled = true;
                    }, 500)
                } else {
                    swiper.enabled = false;
                }

                break;
            }

            case PageListEnum.ProblemsPage: {
                if (isProblemsAnimate) {
                    setTimeout(() => {
                        swiper.enabled = true;
                    }, 2000)
                } else {
                    swiper.enabled = false;
                }

                break;
            }

            case PageListEnum.PeoplePage: {
                setPeoplePage(true);

                break;
            }

            case PageListEnum.RoadmapPage: {
                setRoadmapPage(true);

                if (isRoadMapAnimate) {
                    setTimeout(() => {
                        swiper.enabled = true;
                    }, 500)
                } else {
                    swiper.enabled = false;
                }

                break;
            }

            case PageListEnum.SupportPage: {
                setSupportPage(true);

                if (isSupportAnimate) {
                    setTimeout(() => {
                        swiper.enabled = true;
                    }, 500)
                } else {
                    swiper.enabled = false;
                }

                break;
            }

            case PageListEnum.TeamPage: {
                setTeamPage(true);

                break;
            }
        }

    }, [activeIndexSlide, isRoadMapAnimate, isSupportAnimate, isAboutAnimate, isProblemsAnimate]);

  return (
    <Swiper
        direction="vertical"
        modules={[Mousewheel, Pagination]}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        allowTouchMove={false}
        mousewheel={{
        }}
        speed={2000}
        effect="cards"
        onSlideChange={onSlideChange}
        onInit={(swiper) => {setSwiper(swiper)}}
        className="router-swiper-wrapper"
    >
        <SwiperSlide className="router-swiper-slide">
            <MainPage swiper={swiper} />
        </SwiperSlide>
        <SwiperSlide>
            <AboutPage
              isPageVisible={isAboutPage}
              isAnimate={isAboutAnimate}
              setAnimate={setAboutAnimate}
              activeSlideIndex={activeIndexSlide}
            />
        </SwiperSlide>
        <SwiperSlide>
            <ProblemsPage isAnimate={isProblemsAnimate} setAnimate={setProblemsAnimate} activeSlideIndex={activeIndexSlide} />
        </SwiperSlide>
        <SwiperSlide>
            <PeoplePage isAnimate={isPeoplePage} setAnimate={setPeoplePage} />
        </SwiperSlide>
        <SwiperSlide>
            <RoadmapPage
              isPageVisible={isRoadmapPage}
              isAnimate={isRoadMapAnimate}
              setAnimate={setRoadMapAnimate}
              activeSlideIndex={activeIndexSlide}
            />
        </SwiperSlide>
        <SwiperSlide>
            <SupportPage
              isPageVisible={isSupportPage}
              isAnimate={isSupportAnimate}
              setAnimate={setSupportAnimate}
              activeSlideIndex={activeIndexSlide}
            />
        </SwiperSlide>
        <SwiperSlide>
            <TeamPage isAnimate={isTeamPage} setAnimate={setTeamPage} />
        </SwiperSlide>
    </Swiper>
  );
};

export default AppRouter;
