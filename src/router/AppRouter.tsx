import React, {useEffect, useState} from 'react';
import AboutPage from "../pages/aboutPage/AboutPage";
import MainPage from "../pages/mainPage/MainPage";
import ProblemsPage from "../pages/problemsPage/ProblemsPage";
import SolutionPage from "../pages/solutionPage/SolutionPage";
import PeoplePage from "../pages/peoplePage/PeoplePage";
import RoadmapPage from "../pages/roadmapPage/RoadmapPage";
import SupportPage from "../pages/supportPage/SupportPage";
import TeamPage from "../pages/teamPage/TeamPage";
import NearPage from "../pages/nearPage/NearPage";
import PlansPage from "../pages/plansPage/PlansPage";
import VideoPage from "../pages/videoPage/VideoPage";
import ConsulsPage from "../pages/consulsPage/ConsulsPage";
import { Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination"

const AppRouter = () => {
    const [activeIndexSlide, setActiveIndexSlide] = useState(0);
    const [isAboutPage, setAboutPage] = useState(false);

    const onSlideChange = (swiper: any) => {
        setActiveIndexSlide(swiper.activeIndex);
    }

    useEffect(() => {
        if (activeIndexSlide === 1) {
            setAboutPage(true);
        } else {
            setAboutPage(false);
        }
    }, [activeIndexSlide]);

  return (
    <Swiper
        direction="vertical"
        modules={[Mousewheel, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        spaceBetween={30}
        allowTouchMove={false}
        mousewheel
        onSlideChange={onSlideChange}
        className="router-swiper-wrapper"
    >
        <SwiperSlide className="router-swiper-slide">
            <MainPage />
        </SwiperSlide>
        <SwiperSlide>
            {isAboutPage && <AboutPage/>}
        </SwiperSlide>
        <SwiperSlide>
            <ProblemsPage />
        </SwiperSlide>
        <SwiperSlide>
            <SolutionPage />
        </SwiperSlide>
        <SwiperSlide>
            <NearPage />
        </SwiperSlide>
        <SwiperSlide>
            <PlansPage />
        </SwiperSlide>
        <SwiperSlide>
            <ConsulsPage />
        </SwiperSlide>
        <SwiperSlide>
            <VideoPage />
        </SwiperSlide>
        <SwiperSlide>
            <PeoplePage />
        </SwiperSlide>
        <SwiperSlide>
            <RoadmapPage />
        </SwiperSlide>
        <SwiperSlide>
            <SupportPage />
        </SwiperSlide>
        <SwiperSlide>
            <TeamPage />
        </SwiperSlide>
    </Swiper>
  );
};

export default AppRouter;
