import React from 'react';
import AboutPage from "../pages/aboutPage/AboutPage";
import MainPage from "../pages/mainPage/MainPage";
import ProblemsPage from "../pages/problemsPage/ProblemsPage";
import SolutionPage from "../pages/solutionPage/SolutionPage";
import PeoplePage from "../pages/peoplePage/PeoplePage";
import RoadmapPage from "../pages/roadmapPage/RoadmapPage";
import SupportPage from "../pages/supportPage/SupportPage";
import TeamPage from "../pages/teamPage/TeamPage";

const AppRouter = () => {
  return (
    <>
      <MainPage />
      <AboutPage />
      <ProblemsPage />
      <SolutionPage />
      <PeoplePage />
      <RoadmapPage />
      <SupportPage />
      <TeamPage />
    </>
  );
};

export default AppRouter;
