import {Dispatch, SetStateAction} from "react";

export interface IPage {
    isAnimate: boolean;
    setAnimate: Dispatch<SetStateAction<boolean>>;
}


export enum PageListEnum {
    AboutPage = 1,
    ProblemsPage = 2,
    SolutionPage = 3,
    NearPage = 4,
    PlansPage = 5,
    ConsulsPage = 6,
    VideoPage = 7,
    PeoplePage = 8,
    RoadmapPage = 9,
    SupportPage = 10,
    TeamPage = 11,
}