import React, { Fragment } from "react";
import PortfolioMyExperience from "../components/Portfolio/PortfolioMyExperience";
import PortfolioWelcome from "../components/Portfolio/PortfolioWelcome";
import PortfolioAboutMe from "../components/Portfolio/PortfolioAboutMe";
import PortfolioMySkills from "../components/Portfolio/PortfolioMySkills";

const Portfolio = () => {
  return (
    <Fragment>
      <PortfolioWelcome />
      <PortfolioAboutMe />
      <PortfolioMyExperience />
      <PortfolioMySkills />
    </Fragment>
  );
};

export default Portfolio;
