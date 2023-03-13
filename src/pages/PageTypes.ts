import {Dispatch, SetStateAction} from "react";

export interface IMainPage {
    swiper: any;
}

export interface ISolutionPage extends IPage {
    titleRef: any;
    nearImageRef: any;
    consulsImageRef: any;
    plansImageRef: any;
    videoImageRef: any;
}

export interface IPage {
    isAnimate: boolean;
    isPageVisible?: boolean;
    setAnimate: Dispatch<SetStateAction<boolean>>;
    className?: string;
    activeSlideIndex?: number
}


export enum PageListEnum {
    AboutPage = 1,
    ProblemsPage = 2,
    PeoplePage = 3,
    RoadmapPage = 4,
    SupportPage = 5,
    TeamPage = 6,
}
