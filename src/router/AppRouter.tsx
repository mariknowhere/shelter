import React from 'react';
import AboutPage from "../pages/aboutPage/AboutPage";
import MainPage from "../pages/mainPage/MainPage";
import ProblemsPage from "../pages/problemsPage/ProblemsPage";
import SolutionPage from "../pages/solutionPage/SolutionPage";

const AppRouter = () => {
  return (
    <>
      <MainPage />
      <AboutPage />
      <ProblemsPage />
      <SolutionPage />
    </>
  );
};

export default AppRouter;
