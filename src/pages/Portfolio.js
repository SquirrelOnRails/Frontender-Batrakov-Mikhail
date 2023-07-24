import React, { Fragment } from "react";
import PortfolioMyExperience from "../components/Portfolio/PortfolioMyExperience";
import PortfolioWelcome from "../components/Portfolio/PortfolioWelcome";
import PortfolioAboutMe from "../components/Portfolio/PortfolioAboutMe";

const Portfolio = () => {
  return (
    <Fragment>
      <PortfolioWelcome />
      <PortfolioAboutMe />
      <PortfolioMyExperience />
    </Fragment>
  );
};

export default Portfolio;
