import React from "react";
import TrackVisibility from "react-on-screen";
import Project from './Project';

function ProjectsView({portfolios}) {
  return (
    <div className="row mt-30-reverse">
      {portfolios.map(portfolio => (
        <TrackVisibility
          once
          offset={200}
          className="col-lg-4 col-md-6 col-12 mt-30"
          key={portfolio.id}
        >
          <Project content={portfolio} />
        </TrackVisibility>
      ))}
    </div>
  );
}

export default ProjectsView;
