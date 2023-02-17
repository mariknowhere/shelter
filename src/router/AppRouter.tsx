import React from 'react';
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

const AppRouter = () => {
  return (
    <>
      <MainPage />
      <AboutPage />
      <ProblemsPage />
      <SolutionPage />
      <NearPage />
      <PlansPage />
      <ConsulsPage />
      <VideoPage />
      <PeoplePage />
      <RoadmapPage />
      <SupportPage />
      <TeamPage />
    </>
  );
};

export default AppRouter;
