import {Dispatch, SetStateAction} from "react";

export interface IPage {
    isAnimate: boolean;
    isPageVisible?: boolean;
    setAnimate: Dispatch<SetStateAction<boolean>>;
    className?: string;
}


export enum PageListEnum {
    AboutPage = 1,
    ProblemsPage = 2,
    NearPage = 3,
    PlansPage = 4,
    ConsulsPage = 5,
    VideoPage = 6,
    PeoplePage = 7,
    RoadmapPage = 8,
    SupportPage = 9,
    TeamPage = 10,
}